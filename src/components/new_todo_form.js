import React, { useState } from 'react';
import '../css/NewTodoForm.css'; // Importing the CSS file for styling

const NewTodoForm = () => {
    // State to manage form inputs
    const [formData, setFormData] = useState({
        nombre: '',
        descripcion: '',
        fechaVencimiento: '',
    });

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle form submission here
        console.log(formData);
    };

    return (
        <div className="todo-form-container">
            <h3>Nuevo TODO</h3>
            <form className="todo-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="descripcion">Descripción:</label>
                    <textarea
                        id="descripcion"
                        name="descripcion"
                        value={formData.descripcion}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="fechaVencimiento">Fecha de vencimiento:</label>
                    <input
                        type="date"
                        id="fechaVencimiento"
                        name="fechaVencimiento"
                        value={formData.fechaVencimiento}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default NewTodoForm;
