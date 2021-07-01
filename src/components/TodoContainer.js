import React from 'react'
import TodoItem from './TodoItem'
// destructuring
// const todos = props.todos
// const {todos} = props

export default function TodoContainer({todos, deleteTodo, updateTodo}){
    
    const showTodos = () => {
        return todos.map(todo => <TodoItem key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />)
    }

    return(
        <ul className="todo-list">
            {showTodos()}
        </ul>
    )
}