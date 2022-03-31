import { createContext, FC, useMemo, useContext, useCallback } from 'react';
import { api } from '@extension/app/api';
import useQuery from '@common/hooks/useQuery/useQuery';
import { IPasswordPolicy } from '@common/contracts/password';
import { checkPasswordComplexity } from '@nordpass/password-generator';

interface IPasswordPolicyContext {
  isLoading: boolean;
  errorMessage?: string;
  isEnabled: boolean;
  policy?: IPasswordPolicy;
  checkWithPolicy: (password: string) => { isPolicyMet: boolean };
}

const PasswordPolicyContext = createContext({
  isLoading: true,
} as IPasswordPolicyContext);

export const usePasswordPolicy = () => useContext(PasswordPolicyContext);

const checkIfPolicyExists = (
  policy?: IPasswordPolicy,
  enabled?: boolean,
): policy is IPasswordPolicy => !!enabled && !!policy;

export const PasswordPolicyContextProvider: FC = ({ children }) => {
  const {
    data,
    errorMessage,
    isLoading,
  } = useQuery(api.password.getPasswordPolicy);

  const policy = data?.password_policy;

  const isEnabled = checkIfPolicyExists(policy, data?.enabled);

  const checkWithPolicy = useCallback((password: string) => {
    if (!isEnabled) {
      return { isPolicyMet: true };
    }

    const {
      hasUppercase,
      hasSymbols,
      hasDigits,
    } = checkPasswordComplexity(password);

    const isLengthMet = policy.min_length <= password.length;
    const isUppercaseMet = policy.at_least_one_capital_letter_required ? hasUppercase : true;
    const isSymbolsMet = policy.at_least_one_symbol_required ? hasSymbols : true;
    const isDigitsMet = policy.at_least_one_digit_required ? hasDigits : true;

    return { isPolicyMet: isLengthMet && isUppercaseMet && isSymbolsMet && isDigitsMet };
  }, [isEnabled, policy]);

  const value: IPasswordPolicyContext = useMemo(() => ({
    isLoading,
    errorMessage,
    isEnabled,
    policy,
    checkWithPolicy,
  }), [isLoading, errorMessage, isEnabled, policy, checkWithPolicy]);

  return (
    <PasswordPolicyContext.Provider value={value}>
      {children}
    </PasswordPolicyContext.Provider>
  );
};

export default PasswordPolicyContext;
