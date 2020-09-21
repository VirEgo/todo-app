import React, { Component } from 'react';
import './todo-list-item.scss';

export default class TodoListItem extends Component {
    render() {
        const { label, onToggleDeleted, onToggleImportant, onToggleDone, done, important } = this.props;

        let classNames = "todo-list-item";

        if (done) {
            classNames += " done";
        }
        if (important) {
            classNames += " important";
        }

        return (
            <div className="todo-list-item">
                <span className={classNames}>
                    <span className="todo-list-item-label" onClick={onToggleDone}>{label}</span>
                </span>
                <button onClick={onToggleImportant} className="btn btn-outline-success btn-small">
                    <i className="fa fa-exclamation"></i>
                </button>
                <button onClick={onToggleDeleted} className="btn btn-outline-danger">
                    <i className="fa fa-trash-o"></i>
                </button>
            </div >
        );
    }
}