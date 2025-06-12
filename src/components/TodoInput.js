import React, { useState } from 'react';

function TodoInput({ addTodo }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            addTodo(input);
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                placeholder="Tambahkan tugas..."
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Tambah</button>
        </form>
    );
}

export default TodoInput;
