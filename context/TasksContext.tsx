'use client';
import { initialTasks } from '@/constants/initialTasks';
import { Task } from '@/types/Task';
import { createContext, ReactNode, useContext, useState } from 'react';
import { v4 } from 'uuid';

interface TasksProviderProps {
  children: ReactNode;
}

interface TasksContextProps {
  tasks: Task[];
  createTask: (description: string) => void;
  removeTask: (taskId: string) => void;
  updateTaskStatus: (taskId: string) => void;
}

const TasksContext = createContext<TasksContextProps>({
  createTask: () => {},
  removeTask: () => {},
  updateTaskStatus: () => {},
  tasks: initialTasks,
});
const TasksProvider = ({ children }: TasksProviderProps) => {
  const [tasks, setTasks] = useState(initialTasks);

  const createTask = (description: string) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: v4(), description, completed: false },
    ]);
  };

  const removeTask = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const updateTaskStatus = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <TasksContext.Provider
      value={{ tasks, createTask, removeTask, updateTaskStatus }}
    >
      {children}
    </TasksContext.Provider>
  );
};

const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error('useTasks must be used within a TasksProvider');
  }
  return context;
};

export { TasksProvider, useTasks, TasksContext };
