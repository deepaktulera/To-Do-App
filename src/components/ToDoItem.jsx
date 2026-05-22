import React from 'react';

const ToDoItem = ({ elem, toggleComplete, deleteTask , editTask}) => {

  return (
    <div className='border p-2 w-full sm:w-[80%] flex justify-between items-center rounded-lg'>

      <h1 className={elem.completed ? 'line-through text-gray-400' : ''}>
        {elem.text}
      </h1>

      <div className='flex gap-3 items-center'>

        <button
          onClick={() => toggleComplete(elem.id)}
          className={`px-3 py-1 rounded text-white w-20 text-xs sm:text-lg sm:w-auto transition ${elem.completed
            ? 'bg-green-500'
            : 'bg-yellow-500'
            }`}
        >
          {elem.completed ? 'Completed' : 'Mark Complete'}
        </button>

        <div className='flex gap-2 flex-col sm:flex-row'>
          <button
            onClick={() => deleteTask(elem.id)}
            className='bg-red-500 text-white text-xs sm:text-lg px-3 py-1 rounded'
          >
            Delete
          </button>
          <button
            onClick={() => editTask(elem.id, elem.text)}
            className='bg-blue-500 text-white text-xs sm:text-lg px-3 py-1 rounded'
          >
            Edit
          </button>
        </div>

      </div>

    </div>
  );
}

export default ToDoItem;