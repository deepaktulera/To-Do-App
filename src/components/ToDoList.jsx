import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ task, complete, deleteTask , editTask }) => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center pt-6 px-4 w-full'>

      {task.map((elem) => (
        <ToDoItem
          key={elem.id}
          elem={elem}
          toggleComplete={complete}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}

    </div>
  );
}

export default ToDoList;