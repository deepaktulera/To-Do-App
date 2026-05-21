import React from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList'
import { useState } from 'react';

const App = () => {
  const [task, settask] = useState('');

  const [Tasks, setTasks] = useState([]);

  function handleAdd() {
    if (task.trim() == '') return;
    const newToDo = {
      id: Date.now(),
      text: task,
      completed: false
    }
    setTasks([...Tasks, newToDo])
    settask('')
  }

  function handleComplete(id) {

    const updateTask = Tasks.map((item) => {

      if (item.id === id) {
        return { ...item, completed: !item.completed }
      }
      return item;
    });

    setTasks(updateTask);
  }

  function handleDelete(id) {

    const filterTask = Tasks.filter((item) => {
      return item.id !== id
    });

    setTasks(filterTask);
  }

  function handleEdit(id, text) {
  settask(text);
  const updatedTasks = Tasks.filter((item) => {
    return item.id !== id;
  });

  setTasks(updatedTasks);
}

  return (
    <div>
      <Header />
      <div className='flex w-full gap-2 justify-center'>

        <input
          className='w-[70%] border outline-none rounded-full p-2'
          value={task}
          placeholder='Enter task ....'
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAdd()
            }
          }}
          onChange={(e) => {
            settask(e.target.value)
          }}
          type="text" />
        <button
          className='bg-sky-300 p-3 rounded-full active:scale-90'
          type='submit' onClick={handleAdd}>Add</button>
      </div>
      {task.length === 0 && (
        <p className='text-gray-400 p-4'>
          No tasks available
        </p>
      )}
      <ToDoList task={Tasks} complete={handleComplete} deleteTask={handleDelete}  editTask={handleEdit} />
      <button></button>
    </div>
  );
}

export default App;
