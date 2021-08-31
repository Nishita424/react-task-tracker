import 'tailwindcss/tailwind.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState, useEffect } from 'react';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  
  // GET API
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
  
  const fetchTask = async (taskId) => {
    const response = await fetch(`http://localhost:5000/tasks/${taskId}`);
    const data = await response.json();
    return data;
  }

  // Without using complex concepts like context API / Redux
  
  // DELETE API - Response: {}
  const deleteTask = async (e) => {
    await fetch(`http://localhost:5000/tasks/${e.id}`, {
      method: 'DELETE',
    });
    // Deleting on UI or call GET API
    // setTasks((tasks) => tasks.filter((task) => task.id !== e.id));
    const updatedTasks = await fetchTasks();
    setTasks(updatedTasks);
  };

  // UPDATE API - Response: request body
  const toggleReminder = async (taskId) => {
    const task = await fetchTask(taskId);
    const updatedTask = { ...task, reminder: !task.reminder };

    const response = await fetch(`http://localhost:5000/tasks/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    });
    // Updating task reminder on UI or call GET API
    // const data = response.json();
    // setTasks((tasks) =>
    //   tasks.map(taskObj => {
    //     return taskObj.id === taskId
    //       ? { ...taskObj, reminder: data.reminder }
    //       : taskObj;
    //   })
    // );
    const updatedTasks = await fetchTasks();
    setTasks(updatedTasks);
  };
  
  // POST API - Response: data posted
  const addTask = async (newTask) => {
    // const id = Math.floor(Math.random() * 10000);
    const response = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newTask)
    });
    
    // Adding new task from UI or call GET API
    // const task = await response.json();
    // setTasks([...tasks, task]);
    const updatedTasks = await fetchTasks();
    setTasks(updatedTasks);
  };
  
  const toggleAddBtn = () => {
    setShowAddTask(!showAddTask);
  }

  return (
    <Router>
      <div className="mx-auto max-w-xl rounded shadow-lg p-4 mt-12 border border-solid">
        <Header
          title="Task Tracker"
          onAdd={toggleAddBtn}
          showAddBtn={showAddTask}
        />
        <Route path='/' exact render={() => (
          <>
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
          </>
        )} />
        <Route path='/about' component={About}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
