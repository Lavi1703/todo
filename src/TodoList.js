import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
 const [todos,setTodos] =useState([]);
 const addTodo = todo =>{
    if(!todo.text || /^\s*$/.test(todo.text)){
        return;
    }
    const newTodos =[todo,...todos];
    setTodos(newTodos);
    console.log(todo,...todos);
 } ;
 
 const removeTodo=id=>{
    const removeArr=[...todos].filter(todo =>todo.id !==id);
    setTodos(removeArr)
 }

 const updatedTodo = (todoId,newValue)=>{
    if(!newValue.text || /^\s*$/.test(newValue.text)){
        return;
    }
    setTodos(prev =>prev.map(item =>(item.id === todoId ? newValue : item)))
 };
  const completeTodo=id=>{
    let updatedTodos=todos.map(todo=>{
        if(todo.id===id){
            todo.isCompelete=!todo.isCompelete;
        }
        return todo;
    });
    setTodos(updatedTodos)
  }
  return (
    <div>
      <h1>What is the plan for Today?</h1>
      <TodoForm onSubmit={addTodo}/>
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}
      updatedTodo={updatedTodo}/>
    </div>
  )
}

export default TodoList
