import 'tailwindcss/tailwind.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Food shopping',
      day: 'Monday',
      reminder: false,
    },
    {
      id: 2,
      text: 'Laptop screen repair',
      day: 'Tuesday',
      reminder: false,
    },
    {
      id: 3,
      text: 'Cook',
      day: 'Wednesday',
      reminder: false,
    },
    {
      id: 4,
      text: 'Visit Dentist',
      day: 'Thursday',
      reminder: true,
    },
  ]);

  // setTasks([
  //   ...tasks,
  //   {
  //     id: '5',
  //     text: 'Meeting',
  //     day: 'Friday',
  //     reminder: false,
  //   },
  // ]);

  // Without using complex concepts like context API / Redux
  const deleteTask = (e) => {
    console.log('delete', e.id);
    setTasks((tasks) => tasks.filter((task) => task.id !== e.id));
  };

  const toggleReminder = (taskId) => {
    console.log('toggle', taskId);
    setTasks((tasks) =>
      tasks.map(taskObj => {
        return taskObj.id === taskId
          ? { ...taskObj, reminder: !taskObj.reminder }
          : taskObj;
      })
    );
  };

  return (
    <div className="mx-auto max-w-xl rounded shadow-lg p-4 mt-12 border border-solid">
      <Header title="Task Tracker App" />
      <div className="my-3">
        {tasks.length ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          'No Tasks to show'
        )}
      </div>
    </div>
  );
}

export default App;
