import React from 'react'
import { Todo } from '../../models/todoModel';
import SingleTodo from '../SingleTodo/SingleTodo';
import "./TodoList.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div className='todos-list'>
      { todos.map(todo =>(
        <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  )
}

export default TodoList