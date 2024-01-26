'use client';
import useModal from '@/hooks/useModal';
import CustomButton from '../CustomButton/customButton';
import Modal from '../Modal/modal';
import NewTaskContainer from '../NewTaskContainer/newTaskContainer';

const AddTaskButton = () => {
  const { isOpen, toggleModal } = useModal();
  return (
    <>
      <CustomButton onClick={toggleModal}>Adicionar nova tarefa</CustomButton>
      <Modal isOpen={isOpen} onClose={toggleModal}>
        <NewTaskContainer toggleModal={toggleModal} />
      </Modal>
    </>
  );
};

export default AddTaskButton;
