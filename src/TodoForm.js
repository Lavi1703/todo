import React, { useEffect, useRef, useState } from 'react'

function TodoForm(props) {
  const [input , setInput]=useState("")
  const inputRef = useRef(null)
  useEffect(()=>{
    inputRef.current.focus()
  })
  const handleChange = (e)=>{
    setInput(e.target.value)
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log("form ");
    props.onSubmit({
        id:Math.floor(Math.random()*10000),
        text:input
    })
    setInput('')
  }
  return (
    <form onSubmit={handleSubmit}>
       <input type="text" value={input} className="todo-input" name="text"
       onChange={handleChange}
       ref={inputRef}/>
       <button className="todo-button">Add Todo</button>
    </form>
  )
}

export default TodoForm
