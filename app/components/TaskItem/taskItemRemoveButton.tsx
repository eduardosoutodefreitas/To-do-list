'use client';
import Image from 'next/image';
import DeleteConfirmation from '../DeleteConfirmation/deleteConfirmation';
import Modal from '../Modal/modal';
import useModal from '@/hooks/useModal';
import styles from './taskItem.module.css';
interface TaskItemRemoveButtonProps {
  taskId: string;
}

const TaskItemRemoveButton = ({ taskId }: TaskItemRemoveButtonProps) => {
  const { isOpen, toggleModal } = useModal();
  return (
    <>
      <button className={styles.removeButton} onClick={toggleModal}>
        <Image
          height={24}
          width={24}
          src={'/assets/trash.svg'}
          alt={'Remove task button icon'}
        />
      </button>
      <Modal isOpen={isOpen} onClose={toggleModal}>
        <DeleteConfirmation toggleModal={toggleModal} taskId={taskId} />
      </Modal>
    </>
  );
};

export default TaskItemRemoveButton;
