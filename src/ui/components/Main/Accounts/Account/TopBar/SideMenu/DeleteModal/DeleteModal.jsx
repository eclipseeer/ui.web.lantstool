import cn from './DeleteModal.module.css';
import { Modal } from '../../../../../../general/Modal/Modal.jsx';
import { CloseButton } from '../../../../../general/CloseButton/CloseButton.jsx';
import { Title } from '../../../../../general/Title/Title.jsx';
import { Subtitle } from '../../../../../general/Subtitle/Subtitle.jsx';
import { Button } from '../../../../../general/Button/Button.jsx';

export const DeleteModal = ({ isOpen, closeModal, remove }) => (
  <Modal isOpen={isOpen} close={closeModal}>
    <div className={cn.container}>
      <div className={cn.header}>
        <CloseButton close={closeModal} />
        <Title text="Remove key" />
      </div>
      <Subtitle
        text="Are you sure to remove this account from the Accounts? Notice this action only removes account locally from this app and DOESN'T make any
        changes on the blockchain."
      />
      <Button text="Remove" style="secondary" onClick={remove} />
    </div>
  </Modal>
);