import { useState, ReactNode, FC, ComponentType, useCallback } from 'react';
import ConfirmActionModal from './ConfirmActionModal';

interface IConfirmActionModal {
  button: ComponentType<{ onClick: () => void }>;
  header: ReactNode;
  content: ReactNode;
  action: () => Promise<void>;
  actionText: ReactNode;
}

const ConfirmAction: FC<IConfirmActionModal> = ({
  button: OpenButton,
  header,
  content,
  action,
  actionText,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <OpenButton onClick={() => setIsOpen(true)} />
      {isOpen && (
        <ConfirmActionModal
          header={header}
          content={content}
          action={action}
          actionText={actionText}
          onClose={close}
        />
      )}
    </>
  );
};

export default ConfirmAction;
