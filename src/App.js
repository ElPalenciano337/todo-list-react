import React, { useState, useEffect } from 'react';

import NewTodoForm from './components/new_todo_form';
import TodoItemCard from './components/todo_item';
import Navbar from './components/navbar';
import './App.css';

function App() {
    const isTabletOrDesktop = window.innerWidth >= 768;

    const [showDialog, setShowDialog] = useState(false);

    const openDialog = () => {
        setShowDialog(true);
    };

    const closeDialog = () => {
        setShowDialog(false);
    };

    return (
        <div className="App">
            {isTabletOrDesktop ? (
                <div className="row">
                    <div className="col">
                        <NewTodoForm />
                    </div>
                    <div className="col">
                        <TodoListComponent />
                    </div>
                </div>
            ) : (
                <div>
                    <Navbar openDialog={openDialog} />
                    {showDialog && (
                        <div className="dialog-overlay" onClick={closeDialog}>
                            <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
                                <NewTodoForm />
                            </div>
                        </div>
                    )}
                    <div className="col">
                        <TodoListComponent />
                    </div>
                </div>
            )}
        </div>
    );
}

// Sample components for Login, CardList, and TodoList

const TodoListComponent = () => {
    // Sample data for 10 todo items
    const todoItems = [
        { id: 1, nombre: 'Task 1', descripcion: 'Description 1', fechaFinalizacion: '2024-05-01' },
        { id: 2, nombre: 'Task 2', descripcion: 'Description 2', fechaFinalizacion: '2024-05-02' },
        { id: 3, nombre: 'Task 3', descripcion: 'Description 3', fechaFinalizacion: '2024-05-03' },
        { id: 4, nombre: 'Task 4', descripcion: 'Description 4', fechaFinalizacion: '2024-05-04' },
        { id: 5, nombre: 'Task 5', descripcion: 'Description 5', fechaFinalizacion: '2024-05-05' },
        { id: 6, nombre: 'Task 6', descripcion: 'Description 6', fechaFinalizacion: '2024-05-06' },
        { id: 7, nombre: 'Task 7', descripcion: 'Description 7', fechaFinalizacion: '2024-05-07' },
        { id: 8, nombre: 'Task 8', descripcion: 'Description 8', fechaFinalizacion: '2024-05-08' },
        { id: 9, nombre: 'Task 9', descripcion: 'Description 9', fechaFinalizacion: '2024-05-09' },
        {
            id: 10,
            nombre: 'Task 10',
            descripcion: 'Description 10',
            fechaFinalizacion: '2024-05-10',
        },
    ];

    // Function to handle item removal
    const handleRemoveItem = (id) => {
        // Add your logic to remove the item with the given id
        console.log(`Removing item with id ${id}`);
    };

    return (
        <div>
            <h2>Todo List Component</h2>
            <div className="todo-list">
                {todoItems.map((item) => (
                    <TodoItemCard
                        key={item.id}
                        nombre={item.nombre}
                        descripcion={item.descripcion}
                        fechaFinalizacion={item.fechaFinalizacion}
                        onRemove={() => handleRemoveItem(item.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
