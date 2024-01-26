import { Task } from '@/types/Task';
import TaskCheckbox from './taskCheckbox';
import TaskItemRemoveButton from './taskItemRemoveButton';
import styles from './taskItem.module.css';
interface TaskItemProps {
  task: Task;
}
const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <li className={styles.taskItem}>
      <TaskCheckbox isCompleted={task.completed} taskId={task.id} />
      <label htmlFor={task.id} className={styles.taskName}>
        {task.description}
      </label>
      <TaskItemRemoveButton taskId={task.id} />
    </li>
  );
};

export default TaskItem;
