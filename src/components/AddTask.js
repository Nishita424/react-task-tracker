import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);
  
  const addTask = (e) => {
    e.preventDefault(); // Prevents from submitting whole page
    if (!name) {
      alert('Please provide name for the desired task');
      return;
    }  
    onAdd({ text: name, day: day, reminder: reminder });
    
    setName('');
    setDay('');
    setReminder(false);
  }

  return (
    <form onSubmit={addTask}>
      <div className="flex flex-col w-1/2 gap-1 my-3">
        <label className="font-bold">Task</label>
        <input
          className="border border-gray-400 rounded text-sm px-1 py-1"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Add Task"
        />
      </div>
      <div className="flex flex-col w-1/2 gap-1 my-3">
        <label className="font-bold">Day & Time</label>
        <input
          type="text"
          value={day}
          onChange={(e) => {
            setDay(e.target.value);
          }}
          className="border border-gray-400 rounded text-sm px-1 py-1"
          placeholder="Day-Time"
        />
      </div>
      <div className="flex w-1/2 gap-3 items-center my-3">
        <label className="font-bold">Set Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(e) => {
            setReminder(e.currentTarget.checked);
          }}
          className="border border-gray-400 rounded px-1 py-1 cursor-pointer"
        />
      </div>
      <input
          type="submit"
          value="Save Task"
          className={`block w-full rounded-lg py-1 bg-red-400 text-gray-100 cursor-wait my-4 ${!name ? 'cursor-not-allowed' : ''}`}
      />
    </form>
  );
};

export default AddTask
