import React from 'react';

const TodoItemCard = ({ nombre, descripcion, fechaFinalizacion, onRemove }) => {
    return (
        <div className="card">
            <div className="card-header">
                <h5 className="card-title">{nombre}</h5>
            </div>
            <div className="card-body">
                <p className="card-text">
                    <strong>Descripción:</strong> {descripcion}
                </p>
                <p className="card-text">
                    <strong>Fecha de finalización:</strong> {fechaFinalizacion}
                </p>
                <button className="btn btn-danger" onClick={onRemove}>
                    Remove
                </button>
            </div>
        </div>
    );
};

export default TodoItemCard;
