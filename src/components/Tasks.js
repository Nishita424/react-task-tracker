const Tasks = ({ tasks }) => {
  return (
    <div className="tasks">
      {tasks.map((task) => {
        return <h3 key={task.id}>{task.text}</h3>;
      })}
    </div>
  );
};

export default Tasks;
