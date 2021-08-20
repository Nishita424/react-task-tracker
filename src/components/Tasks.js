const tasks = [
  {
    id: 1,
    text: 'Food shopping',
    day: 'Monday',
    remainder: false,
  },
  {
    id: 2,
    text: 'Laptop screen repair',
    day: 'Tuesday',
    remainder: false,
  },
  {
    id: 3,
    text: 'Cook',
    day: 'Wednesday',
    remainder: false,
  },
  {
    id: 4,
    text: 'Visit Dentist',
    day: 'Thursday',
    remainder: false,
  },
];

const Tasks = () => {
  return (
    <div className="tasks">
      {tasks.map((task) => {
        return <h3 key={task.id}>{task.text}</h3>;
      })}
    </div>
  );
};

export default Tasks;
