import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`bg-gray-100 m-1 px-3 py-2 border text-sm rounded border-gray-150 cursor-pointer ${
        task.reminder ? 'border-l-8 border-t-0 border-r-0 border-b-0 border-green-600' : ''
      }`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h2 className="flex justify-between">
        {task.text}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => {
            onDelete(task);
          }}
          // or onClick={onDelete} will return click event obj
        />
      </h2>
      <p className="text-xs">{task.day}</p>
    </div>
  );
};


export default Task;
