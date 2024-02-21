import { Modal } from '../../../../../general/Modal/Modal.tsx';
import cn from './ModalGroup.module.css';
import { CloseButton } from '../../../../general/CloseButton/CloseButton.tsx';
import { BackIcon } from '../../../../../../assets/components/BackIcon.tsx';

export const ModalGroup = ({ children, isOpen, closeModal, prevStep, text }: any) => {
  return (
    <Modal isOpen={isOpen} close={closeModal}>
      <div className={cn.container}>
        <div className={cn.btnGroup}>
          {prevStep && (
            <div className={cn.prevBtn} onClick={prevStep}>
              <BackIcon style={cn.icon} />
            </div>
          )}
          <h2 className={cn.title}>{text}</h2>
          <CloseButton close={closeModal} />
        </div>
        {children}
      </div>
    </Modal>
  );
};