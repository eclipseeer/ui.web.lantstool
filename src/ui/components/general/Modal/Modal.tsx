import { ReactElement } from 'react';
import cn from './Modal.module.css';

type Props = {
  children: ReactElement;
  isOpen: boolean;
  close: any;
};

export const Modal = ({ children, isOpen, close }: Props) => {
  if (!isOpen) return null;

  return (
    <div className={cn.backstage} onClick={close}>
      <div className={cn.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};