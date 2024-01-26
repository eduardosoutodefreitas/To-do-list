import NewTaskForm from './newTaskForm';
interface NewTaskContainerProps {
  toggleModal: () => void;
}
const NewTaskContainer = ({ toggleModal }: NewTaskContainerProps) => {
  return (
    <div className="modalContentContainer">
      <h2 className="modalContentTitle">Nova tarefa</h2>
      <NewTaskForm toggleModal={toggleModal} />
    </div>
  );
};

export default NewTaskContainer;
