import React from 'react'
import './columns.css'
const Todo = ({key,title,todo,handleDragStart}) => {
  return (
    <div>
          <div className='con'>
             <div className='todo'
                key={todo.id}
                draggable
                onDragStart={(e) => handleDragStart(e, todo.id)}
              >
                {title}

              </div>
</div>
    </div>
  )
}

export default Todo
