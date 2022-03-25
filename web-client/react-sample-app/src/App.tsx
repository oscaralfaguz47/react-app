import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { InputField } from './components/InputFields/InputField';
import { Todo } from './models/todoModel';
import TodoList from './components/Lists/TodoList';


const App: React.FC = () => {
  const [todo, settodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e:React.SyntheticEvent) =>{
    e.preventDefault();
    if(todo){
      setTodos([...todos, {id:Date.now(), todo, isDone: false}]);
      settodo("");
    }
  };


  console.log(todos);
  return (
    <div>
      <h1 className='heading'>MY TASKS</h1>
      <InputField todo={todo} setTodo={settodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos}></TodoList>
    </div>


  );
}

export default App;
