import { useState } from 'react';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

function Apps() {
  const [todoList,setTodoList]=useState([
    {id:1,content:'buy milks'},
    {id:2,content:'buy salt'},
    {id:3,content:'buy sugar'},

  ])
   const deleteTodo=(id)=>{
     setTodoList(todoList.filter(todo=>todo.id!==id)) 
   }
   const addTodo=(todoList)=>{
    setTodoList(oldState=>[...oldState,todoList])
     console.log(todoList)
   }

  return (
    <div className="todo-app container ">
    <h2 className='center blue-text'>Todo's List</h2>
<Todo  todos={todoList} deleteTod={deleteTodo}/>
<AddTodo addTodo={addTodo}/>
    </div>
  );
}

export default Apps;
