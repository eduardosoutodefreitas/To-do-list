import { useTasks } from '@/context/TasksContext';
import styles from './deleteConfirmation.module.css';
import CustomButton from '../CustomButton/customButton';
interface DeleteConfirmationProps {
  taskId: string;
  toggleModal: () => void;
}
const DeleteConfirmation = ({
  taskId,
  toggleModal,
}: DeleteConfirmationProps) => {
  const { removeTask } = useTasks();

  const handleDeleteTask = () => {
    removeTask(taskId);
    toggleModal();
  };

  return (
    <div className="modalContentContainer">
      <h2 className="modalContentTitle">Deletar tarefa</h2>
      <p className={styles.deleteContainerSubtitle}>
        Tem certeza que deseja excluir essa tarefa?
      </p>
      <div className="modalButtonsContainer">
        <CustomButton variant="cancel" onClick={toggleModal}>
          Cancelar
        </CustomButton>
        <CustomButton variant="danger" onClick={handleDeleteTask}>
          Deletar
        </CustomButton>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
