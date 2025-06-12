import React from 'react';

function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index} style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
                    <span onClick={() => toggleTodo(index)}>{todo.text}</span>
                    <button onClick={() => deleteTodo(index)}>Hapus</button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
