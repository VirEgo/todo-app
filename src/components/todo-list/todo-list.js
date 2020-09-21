import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.scss';

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
    const items = todos.map(item => {
        const { id, ...itemProps } = item;
        return (
            <li className="list-group-item" key={id}>
                <TodoListItem {...itemProps}
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)} />
            </li>
        )
    });

    return (
        <div>
            <ul className="todo-list-wrapper list-group">
                {items}
            </ul>
        </div>
    )
}

export default TodoList