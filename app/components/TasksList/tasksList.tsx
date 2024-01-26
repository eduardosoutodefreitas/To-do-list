'use client';
import { useTasks } from '@/context/TasksContext';
import styles from './tasklist.module.css';
import TaskItem from '../TaskItem/taskItem';

const TasksList = () => {
  const { tasks } = useTasks();
  const incompleteTasks = tasks.filter((task) => !task.completed);

  const completedTasks = tasks.filter((task) => task.completed);
  return (
    <div className={styles.taskListContainer}>
      <p className={styles.listParagraph}>Suas tarefas de hoje</p>
      <ul className={styles.tasksList}>
        {incompleteTasks.map((task) => (
          <TaskItem task={task} key={task.id} />
        ))}
      </ul>
      <p className={styles.listParagraph}>Tarefas finalizadas</p>
      <ul>
        {completedTasks.map((task) => (
          <TaskItem task={task} key={task.id} />
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
