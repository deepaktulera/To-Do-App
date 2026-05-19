import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

const App = () => {
  const [task, setTask] = useState('');

  const [todo, setTodo] = useState([]);
    

  const addTask = () => {
    if (task.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false
    }

    setTodo([...todo, newTodo]);
    setTask('')
  }
  
  return (
    <div>
      <Header />
      <div className='flex justify-center pt-6 px-4 gap-2'>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text" placeholder='Enter your task' className='border p-2 px-4 rounded-full w-full sm:w-[70%]' />
        <button
          onClick={addTask}
          className='bg-black text-white px-4 sm:px-6 rounded-full'>Add</button>
      </div>
      <ToDoList todo={todo} />
    </div>
  );
}

export default App;
