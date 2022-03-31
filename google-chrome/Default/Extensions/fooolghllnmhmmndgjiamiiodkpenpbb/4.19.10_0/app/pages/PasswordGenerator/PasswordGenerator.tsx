import { FC, useEffect, useState, useMemo } from 'react';
import cx from 'classnames';
import { Button, Checkbox, SVG, Text } from '@nord/ui';
import { FormattedMessage, useIntl } from 'react-intl';
import InputRange, { InputRangeClassNames } from 'react-input-range';
import { estimateStrength, generatePassword } from '@nordpass/password-generator';
import { Storage } from '@extension/common/constants';
import { Action, ExtensionAction } from '@common/constants/action';
import { HistoryProvider, IHistoryEntry } from '@common/contracts/passwordGeneratorContracts';
import StorageApi from '@extension/browser/storageApi';
import BrowserApi from '@extension/browser/browserApi';
import { RouteProps } from 'react-router';
import generateIcon from '@icons/24/generate.svg';
import chevronDownIcon from '@icons/24/chevron-down.svg';
import passwordWeakIcon from '@icons/16/weakPassword.svg';
import passwordModerateIcon from '@icons/16/moderatePassword.svg';
import passwordStrongIcon from '@icons/16/strongPassword.svg';
import Tooltip from '@common/components/Tooltip/Tooltip';
import { OpenDirection } from '@common/components/Tooltip/constants/openDirection';
import { PageHeader } from '@extension/app/pages/components/PageHeader/PageHeader';
import { getStylizedPassword } from '@common/utils/getStylizedPassword';
import { sendMessage } from '@extension/app/api';
import { getBrowser, logError } from '@extension/common/utils';
import ActionButton from '@common/components/ActionButton/ActionButton';
import { getFullUrl } from '@common/utils/parseUrl/parseUrl';
import { usePasswordPolicy } from '@extension/app/context/PasswordPolicyContext';
import FullscreenLoader from '@common/components/FullScreenLoader/FullscreenLoader';

import './PasswordGenerator.scss';
import { IPasswordPolicy } from '@common/contracts/password';
import useLoaderLogging from '@common/hooks/useLoaderLogging/useLoaderLogging';
import { isDefined } from '@common/utils/valueUtils';

const MIN_LENGTH = 8;
const MAX_LENGTH = 60;

const passwordStrength = [
  { image: passwordWeakIcon, color: 'red', message: <FormattedMessage id="passwordStrengthWeak" /> },
  { image: passwordModerateIcon, color: 'orange', message: <FormattedMessage id="passwordStrengthModerate" /> },
  { image: passwordStrongIcon, color: 'green', message: <FormattedMessage id="passwordStrengthStrong" /> },
];

const DEFAULT_INPUT_RANGE_CLASSNAMES: InputRangeClassNames = {
  activeTrack: 'input-range__track input-range__track--active',
  disabledInputRange: 'input-range input-range--disabled',
  inputRange: 'input-range',
  labelContainer: 'input-range__label-container',
  maxLabel: 'input-range__label input-range__label--max',
  minLabel: 'input-range__label input-range__label--min',
  slider: 'input-range__slider',
  sliderContainer: 'input-range__slider-container',
  track: 'input-range__track input-range__track--background',
  valueLabel: 'input-range__label input-range__label--value',
};

type TPolicy = { id: string; label: JSX.Element };

const DEFAULT_CHECKBOX_LIST = [
  { id: 'useUpper', label: <FormattedMessage id="passwordGeneratorCheckbox1" /> },
  { id: 'useLower', label: <FormattedMessage id="passwordGeneratorCheckbox2" /> },
  { id: 'useNumbers', label: <FormattedMessage id="passwordGeneratorCheckbox3" /> },
  { id: 'useSymbols', label: <FormattedMessage id="passwordGeneratorCheckbox4" /> },
  { id: 'useAmbiguous', label: <FormattedMessage id="passwordGeneratorCheckbox5" /> },
];

const defaultOptions = {
  length: 12,
  useLower: true,
  useUpper: true,
  useNumbers: true,
  useSymbols: true,
  useAmbiguous: true,
};

const isEnabledPolicy = (policy: boolean | TPolicy): policy is TPolicy => Boolean(policy);

interface IPasswordGenerator extends RouteProps {
  isAutofill?: boolean;
  fill?: (text: string) => void;
  sendDialogHeight?: () => void;
}

const mapPolicy = (options: typeof defaultOptions, policy: IPasswordPolicy) => {
  if (!policy) {
    return options;
  }

  return {
    length: policy.min_length > options.length ? policy.min_length : options.length,
    useUpper: policy.at_least_one_capital_letter_required || options.useUpper,
    useLower: true,
    useNumbers: policy.at_least_one_digit_required || options.useNumbers,
    useSymbols: policy.at_least_one_symbol_required || options.useSymbols,
    useAmbiguous: true,
  };
};

const PasswordGenerator: FC<IPasswordGenerator> = ({ isAutofill = false, fill, sendDialogHeight }) => {
  const [passwordOptions, setPasswordOptions] = useState<typeof defaultOptions | null>(null);
  const [isPasswordChanging, setPasswordChanging] = useState(false);
  const [password, setPassword] = useState<string | null>(null);
  const [sliderVal, setSliderVal] = useState<number | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [showOptions, setShowOptions] = useState(false);
  const { formatMessage } = useIntl();
  const { errorMessage, isLoading, policy, isEnabled } = usePasswordPolicy();
  const [minLength, setMinLength] = useState(MIN_LENGTH);
  const [checkboxList, setCheckboxList] = useState(DEFAULT_CHECKBOX_LIST);

  useLoaderLogging(isLoading, logError, 'PasswordGenerator');

  const hasOptions = useMemo(() => (
    !isEnabled || !(
      policy?.at_least_one_capital_letter_required &&
      policy.at_least_one_digit_required &&
      policy.at_least_one_symbol_required &&
      MAX_LENGTH === minLength
    )
  ), [isEnabled, policy, minLength]);

  useEffect(() => {
    if (isAutofill && password && !isPasswordChanging) {
      sendDialogHeight?.();
    }
  }, [
    isPasswordChanging,
    sendDialogHeight,
    showOptions,
    hasOptions,
    isAutofill,
    password,
    score,
  ]);

  useEffect(() => {
    (async () => {
      const result = await StorageApi.get({
        [Storage.PasswordOptions]: defaultOptions,
      });

      let options = defaultOptions;

      if (result[Storage.PasswordOptions]) {
        options = {
          length: result[Storage.PasswordOptions].length,
          useUpper: result[Storage.PasswordOptions].useUpper,
          useLower: result[Storage.PasswordOptions].useLower,
          useNumbers: result[Storage.PasswordOptions].useNumbers,
          useSymbols: result[Storage.PasswordOptions].useSymbols,
          useAmbiguous: result[Storage.PasswordOptions].useAmbiguous,
        };
      }

      if (policy && isEnabled) {
        setMinLength(policy.min_length);
        options = mapPolicy(options, policy);

        setCheckboxList([
          !policy?.at_least_one_capital_letter_required && {
            id: 'useUpper',
            label: <FormattedMessage id="passwordGeneratorCheckbox1" />,
          },
          !policy?.at_least_one_digit_required && {
            id: 'useNumbers',
            label: <FormattedMessage id="passwordGeneratorCheckbox3" />,
          },
          !policy?.at_least_one_symbol_required && {
            id: 'useSymbols',
            label: <FormattedMessage id="passwordGeneratorCheckbox4" />,
          },
        ].filter(isEnabledPolicy));
      }

      const pass = generatePassword(options);
      setSliderVal(options.length);
      setPasswordOptions(options);
      setPassword(pass);
      setScore(estimateStrength(pass) - 1);
    })();
  }, [policy, isEnabled]);

  function changeDelayedPassword(options: typeof defaultOptions) {
    setPasswordChanging(true);
    setTimeout(() => {
      const pass = generatePassword(options);
      setPassword(pass);
      setScore(estimateStrength(pass) - 1);
      setPasswordChanging(false);
    }, 200);
  }

  function setAndSaveOptions(options: typeof defaultOptions) {
    const updatedOptions = (isEnabled && policy) ? mapPolicy(options, policy) : options;
    setPasswordOptions(updatedOptions);
    changeDelayedPassword(updatedOptions);
    StorageApi.set({ [Storage.PasswordOptions]: updatedOptions });
  }

  function handleOptionChange(id: keyof typeof defaultOptions, checked: boolean) {
    const options = {
      ...passwordOptions,
      [id]: checked,
    };

    const active = [
      options.useUpper,
      options.useLower,
      options.useNumbers,
      options.useSymbols,
    ].filter(Boolean).length;

    if (active < 1) {
      return;
    }

    setAndSaveOptions(options);
  }

  const getHistoryEntry = async () => {
    const mainParams = { password, date: Date.now() } as IHistoryEntry;
    const entryWithBrowserExtension: IHistoryEntry = {
      ...mainParams,
      provider: HistoryProvider.Extension,
      browser: getBrowser(),
    };
    if (isAutofill) {
      const tabUrl = await BrowserApi.sendMessage({ type: ExtensionAction.GetTabUrl })
        .catch(error => logError('GetTabUrl:', error));

      const domain = getFullUrl(logError, tabUrl);
      const entryWithUrl: IHistoryEntry = { ...mainParams, provider: domain };
      return tabUrl ? entryWithUrl : entryWithBrowserExtension;
    }

    return entryWithBrowserExtension;
  };

  const onAutofillButtonClick = async () => {
    if (isAutofill) {
      fill?.(password);
    } else {
      BrowserApi.clipboardWrite(password);
    }

    const historyEntry = await getHistoryEntry();
    sendMessage(Action.AddPasswordGeneratorHistoryEntry, { historyEntry })
      .catch(error => logError('AddPasswordGeneratorHistoryEntry:', error));
  };

  if (errorMessage) {
    return (
      <div className="h-full flex justify-center items-center text-center p-4">
        <FormattedMessage id="undefinedError" />
      </div>
    );
  }

  if (isLoading) {
    return <FullscreenLoader />;
  }

  if (!passwordOptions || !password) {
    return null;
  }

  return (
    <div className="flex flex-col flex-1 bg-primary">
      {!isAutofill && <PageHeader title={<FormattedMessage id="passwordGenerator" />} />}
      <div className="p-4 bg-grey-lightest border-t border-b border-primary bg-primary-accent-1">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col mr-2">
            <span
              className={cx(
                'password-generator__password font-roboto-mono break-all mb-2 w-full text-lead font-700 line-h-26px truncate-2-lines',
                isPasswordChanging ? 'page-slide-out' : 'page-slide-in',
              )}
            >
              {getStylizedPassword(password)}
            </span>
            {isDefined(score) && passwordStrength[score] && (
              <div
                key={passwordStrength[score].color}
                className={`text-${passwordStrength[score].color} font-medium`}
              >
                <SVG
                  width={16}
                  height={16}
                  src={passwordStrength[score].image}
                  className="mr-1"
                />
                {passwordStrength[score].message}
              </div>
            )}
          </div>

          <ActionButton
            tooltipText={formatMessage({ id: 'generateNew' })}
            tooltipId="generate-password"
            className="ease-out duration-250 flex-shrink-0 ml-4"
            icon={generateIcon}
            onClick={() => changeDelayedPassword(passwordOptions)}
          />
        </div>
      </div>
      <div className="flex-1 px-4">
        <Tooltip id="copy" showDuration={1000} direction={OpenDirection.Bottom}>
          <FormattedMessage id="copiedTooltip" />
        </Tooltip>
        <Button
          id="autofill-button"
          className="password-generator__button w-full rounded-full my-4 flex items-center justify-center"
          data-tip-copy
          color="teal"
          onClick={onAutofillButtonClick}
        >
          {isAutofill ? <FormattedMessage id="usePassword" /> : <FormattedMessage id="copyPassword" />}
        </Button>

        {(!isAutofill || showOptions) && (
          <>
            <div className="px-3">
              {MAX_LENGTH !== minLength && (
                <>
                  <span className="text-micro mb-1 color-primary-accent-6">
                    <FormattedMessage id="length" />
                  </span>

                  <div className="mb-4">
                    <InputRange
                      maxValue={MAX_LENGTH}
                      minValue={minLength}
                      value={sliderVal}
                      onChange={value => setSliderVal(value as number)}
                      onChangeComplete={length => setAndSaveOptions({ ...passwordOptions, length: length as number })}
                      classNames={{
                        ...DEFAULT_INPUT_RANGE_CLASSNAMES,
                        valueLabel: cx(DEFAULT_INPUT_RANGE_CLASSNAMES.valueLabel, sliderVal > 50 && 'left'),
                      }}
                    />
                  </div>
                </>
              )}

              {checkboxList.map(item => (
                <div key={item.id} className="mb-3">
                  <Checkbox
                    onChange={e => handleOptionChange(
                      (e.target as HTMLInputElement).id as keyof typeof defaultOptions,
                      (e.target as HTMLInputElement).checked,
                    )}
                    id={item.id}
                    checked={passwordOptions[item.id as keyof typeof defaultOptions] as boolean}
                    label={{ children: item.label }}
                    color="teal"
                    className="text-micro font-medium color-primary-accent-6 items-center"
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {isAutofill && hasOptions && (
          <Text
            variant="body2"
            className="flex font-small justify-center font-medium color-primary cursor-pointer leading-normal items-center mb-5"
            onClick={() => setShowOptions(!showOptions)}
          >
            {!showOptions ? <FormattedMessage id="showOptions" /> : <FormattedMessage id="hideOptions" />}
            <SVG
              width={24}
              height={24}
              src={chevronDownIcon}
              className={cx('cursor-pointer flex-shrink-0', showOptions && 'rotate-180')}
              noLazy
            />
          </Text>
        )}
      </div>
    </div>
  );
};

export default PasswordGenerator;
