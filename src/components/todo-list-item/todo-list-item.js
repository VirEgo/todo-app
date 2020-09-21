import React, { Component } from 'react';
import './todo-list-item.scss';

const TodoListItem = ({ label, onDeleted, onToggleImportant, onToggleDone, done, important }) => {
    let className = "todo-list-item";
    if (done) {
        className += " done";
    }
    if (important) {
        className += " important";
    }
    return (
        <div className="todo-list-item">
            <span className={className}>
                <span className="todo-list-item-label" onClick={onToggleDone}>{label}</span>
            </span>
            <button onClick={onToggleImportant} className="btn btn-outline-success btn-small">
                <i className="fa fa-exclamation"></i>
            </button>
            <button onClick={onDeleted} className="btn btn-outline-danger">
                <i className="fa fa-trash-o"></i>
            </button>
        </div >
    );
}

export default TodoListItem;