import React from 'react'
import './columns.css'
import Todo from './Todo';

   const handleDragStart = (e, id) => {
      e.dataTransfer.setData('text/plain', id.toString());
    }; 
  
    const handleDrop = (e, targetColumn,setTodos,todos) => {
      e.preventDefault();

      const todoId = parseInt(e.dataTransfer.getData('text/plain'), 10); 
  
      const updatedTodos = todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, column: targetColumn };
        }
        return todo;
      }); 
  
      setTodos(updatedTodos);
    }; 
  
    const allowDrop = (e) => {
      e.preventDefault();
    }; 

export default function Column({heading,column,todos,setTodos}) {
  return (

    <div
        className="column"
        onDrop={(e) => handleDrop(e, column,setTodos,todos)}
        onDragOver={(e) => allowDrop(e)}
      >
        <h2>{heading}</h2>
        <ul>
          {todos
            .filter((todo) => todo.column === column)
            .map((todo) => (

        <Todo key={todo.id} title={todo.text} todo={todo} handleDragStart={handleDragStart}></Todo>
            ))}
        </ul>
      </div>

  
  )
}
