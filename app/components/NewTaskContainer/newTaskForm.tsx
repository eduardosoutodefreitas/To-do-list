import { SubmitHandler, useForm } from 'react-hook-form';
import CustomButton from '../CustomButton/customButton';
import styles from './newTask.module.css';
import { useTasks } from '@/context/TasksContext';
interface NewTaskFormProps {
  toggleModal: () => void;
}

interface FormData {
  taskDescription: string;
}
const NewTaskForm = ({ toggleModal }: NewTaskFormProps) => {
  const { createTask } = useTasks();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    createTask(data.taskDescription);
    toggleModal();
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className={styles.newTaskForm}
    >
      <div className={styles.inputContainer}>
        <label className={styles.newTaskLabel}>Título</label>
        <input
          {...register('taskDescription', {
            required: 'Por favor, insira sua tarefa.',
          })}
          className={styles.taskInput}
          placeholder="Digite"
          type="text"
        />
        {errors.taskDescription && (
          <p className={styles.errorMessage}>
            {errors.taskDescription.message}
          </p>
        )}
      </div>
      <div className="modalButtonsContainer">
        <CustomButton onClick={toggleModal} variant="cancel">
          Cancelar
        </CustomButton>
        <CustomButton type="submit">Adicionar</CustomButton>
      </div>
    </form>
  );
};

export default NewTaskForm;
