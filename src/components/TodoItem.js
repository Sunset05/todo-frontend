import React, { useState } from 'react'
import TodoForm from './TodoForm'

export default function TodoItem({ title, content, urgent, done, deleteTodo, id, updateTodo}){
    const todo = {id, title, content, urgent, done}
    const [isToggled, setIsToggled] = useState(false)
    const handleClick = (event) => deleteTodo(id)
    const handleToggle = (event) => setIsToggled(!isToggled)
    const todoCard = () => (
        <li className="todo-item">
            <h2>{title}</h2>
            <h3>{content}</h3>
            <button onClick={handleClick} className="delete-button">DELETE</button>
            <button onClick={handleToggle} className="edit-button">EDIT</button>
        </li>
    )
    
    return isToggled 
        ? <TodoForm 
            handleToggle={handleToggle}
            submitAction={updateTodo} 
            todo={todo} /> 
        : todoCard()
}