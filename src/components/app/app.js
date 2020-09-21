import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../add-item-form';

import './app.scss';

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink coffee'),
            this.createTodoItem('Make awesome app'),
            this.createTodoItem('Have a lunch')
        ]
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
            return {
                todoData: [...newArray]
            }
        });
    }

    addItem = (text) => {
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        }

        this.setState(({ todoData }) => {
            const newArray = [...todoData, newItem]
            return {
                todoData: newArray
            }
        });
    }

    onToggleDone = () => {
        this
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            console.log(idx);
            let newArrayIsImportant = [...todoData];
            newArrayIsImportant[idx].important = !newArrayIsImportant[idx].important;
            return {
                todoData: [...newArrayIsImportant]
            }
        });
    }

    render() {
        return (
            <div className="container">
                <AppHeader toDo={1} done={3} />
                <SearchPanel />
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone} />
                <ItemAddForm onItemAdded={this.addItem} />
            </div>
        );
    }
}