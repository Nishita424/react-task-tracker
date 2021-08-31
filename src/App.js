import 'tailwindcss/tailwind.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState, useEffect } from 'react';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  
  // 1. Using chaining of promises
  /**
   * 
   const fetchTasks = () => {
     fetch('http://localhost:5000/tasks')
       .then(
         (res) => {
           res.json()
             .then((resp) => {
               setTasks(resp);
             });
         });
   }
   useEffect(() => {
     fetchTasks();
   }, []);
   */
  
  // 2. Using async-await
  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5000/tasks');
    const data = await response.json();
    return data;
  }
  // Self invoking syntax - doesnt work for arrow functions
  useEffect(() => {
    (async function getTasks() {
      const res = await fetchTasks();
      setTasks(res);
    }());
  }, []);
  
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
    setTasks((tasks) => tasks.filter((task) => task.id !== e.id));
  };

  const toggleReminder = (taskId) => {
    setTasks((tasks) =>
      tasks.map(taskObj => {
        return taskObj.id === taskId
          ? { ...taskObj, reminder: !taskObj.reminder }
          : taskObj;
      })
    );
  };
  
  const addTask = (newTask) => {
    const id = Math.floor(Math.random() * 10000);
    newTask = { ...newTask, 'id': id };
    setTasks([...tasks, newTask]);
  };
  
  const toggleAddBtn = () => {
    setShowAddTask(!showAddTask);
  }

  return (
    <div className="mx-auto max-w-xl rounded shadow-lg p-4 mt-12 border border-solid">
      <Header title="Task Tracker" onAdd={toggleAddBtn} showAddBtn={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
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
