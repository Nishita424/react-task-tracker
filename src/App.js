import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
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
  ]);

  return (
    <div className="container">
      <Header title="Task Tracker App" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
