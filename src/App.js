import React, { useState } from 'react'; 
import './App.css'
import Column from './components/Column';

const App = () => {
  
  const [todos, setTodos] = useState([
    { id: 1, text: 'Get Groceries', column: 'todo' },
    { id: 2, text: 'Pay Mobile Bill', column: 'todo' },
    { id: 3, text: 'Get Denist appointment', column: 'todo' },
    { id: 4, text: 'Call Mom', column: 'todo' },
    { id: 5, text: 'Write Blog Post', column: 'todo' },

  ]); 



  return (
    <div className='container'>

  <Column heading={"Todo"} column={"todo"} todos={todos} setTodos={setTodos}/>
  <Column heading={"Doing"} column={"doing"} todos={todos} setTodos={setTodos}/>
  <Column heading={"Done"} column={"done"} todos={todos} setTodos={setTodos}/>

  </div>

      
    
  );
}; 

export default App;