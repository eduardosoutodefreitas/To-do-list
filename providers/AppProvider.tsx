import { TasksProvider } from '@/context/TasksContext';

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <>
      <TasksProvider>{children}</TasksProvider>
    </>
  );
};

export default AppProvider;
