import { ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import { sendMessage } from '@extension/app/api';
import { Action } from '@common/constants/action';

interface IMutation {
  action: Action;
  children: (doMutation: (data: any) => Promise<any>, args: { error: string; isLoading: boolean }) => ReactElement;
}

const Mutation = ({ action, children }: IMutation) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const didCancel = useRef(false);

  // eslint-disable-next-line
  useEffect(() => {
    return () => {
      didCancel.current = true;
    };
  }, []);

  const doMutation = useCallback(
    async data => {
      setLoading(true);
      setError('');
      try {
        const result = await sendMessage(action, data);
        if (didCancel.current) return result;

        setLoading(false);
        return result;
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
      return false;
    },
    [action],
  );

  return children(doMutation, { isLoading, error });
};

export default Mutation;
