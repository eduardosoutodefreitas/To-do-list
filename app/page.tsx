import styles from './page.module.css';
import TasksList from './components/TasksList/tasksList';
import AddTaskButton from './components/AddTaskButton/addTaskButton';

export default function Home() {
  return (
    <main className={styles.main}>
      <TasksList />
      <AddTaskButton />
    </main>
  );
}
