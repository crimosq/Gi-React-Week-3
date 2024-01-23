import React, { useState } from 'react';

const Hard = () => {
    // state hooks
    const [todo, setTodo] = useState('');
    const [items, setItems] = useState([]);
    const [editId, setEditId] = useState(null);  // Tracks the ID of the item being edited
    const [editText, setEditText] = useState(''); // Stores the current value of the item being edited

    // helper function to add a todo
    function addTodo() {
        if (!todo) {
            return alert('Please enter a todo');
        }

        const newItem = {
            id: Math.floor(Math.random() * 1000),
            value: todo,
            isCompleted: false
        };

        setItems(oldList => [...oldList, newItem]);
        setTodo(''); // Clear the input after adding
    }

    // Function to delete a todo
    function deleteTodo(id) {
        setItems(oldList => oldList.filter(item => item.id !== id));
    }

    // Function to handle the start of editing
    function startEditing(item) {
        setEditId(item.id);
        setEditText(item.value);
    }

    function handleEditChange(e) {
        setEditText(e.target.value);
    }

   
    function saveEdit(id) {
        setItems(oldList => oldList.map(item => {
            if (item.id === id) {
                return { ...item, value: editText };
            }
            return item;
        }));
        setEditId(null);
        setEditText('');
    }

    return (
        <>
            <h1>Todo List App</h1>

            <input 
                type="text"
                placeholder="Add todo" 
                value={todo}
                onChange={e => setTodo(e.target.value)}
            />

            <button onClick={addTodo}>Add</button>

            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {editId === item.id ? (
                            // If the item is being edited, render an input field
                            <input 
                                type="text"
                                value={editText}
                                onChange={handleEditChange}
                            />
                        ) : (
                            // Otherwise, render the item normally
                            item.value
                        )}
                        <button onClick={() => deleteTodo(item.id)}>X</button>
                        {editId === item.id ? (
                            
                            <button onClick={() => saveEdit(item.id)}>Save</button>
                        ) : (
                           
                            <button onClick={() => startEditing(item)}>Edit</button>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Hard;

