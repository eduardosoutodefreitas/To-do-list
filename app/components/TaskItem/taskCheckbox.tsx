'use client';
import { useTasks } from '@/context/TasksContext';
import styles from './taskItem.module.css';

interface TaskCheckbox {
  taskId: string;
  isCompleted: boolean;
}

const TaskCheckbox = ({ isCompleted, taskId }: TaskCheckbox) => {
  const { updateTaskStatus } = useTasks();
  return (
    <div className={styles.customCheckbox}>
      <input
        onChange={() => updateTaskStatus(taskId)}
        id={taskId}
        type="checkbox"
        checked={isCompleted}
      />
      <label htmlFor={taskId} className={styles.checkboxLabel}></label>
    </div>
  );
};

export default TaskCheckbox;
