import React from 'react';
import './app-header.scss';

const AppHeader = ({ toDo, done }) => (
    <div className="app-header d-flex">
        <h1>My todo list app</h1>
        <h2>{toDo} more to do, {done} done</h2>
    </div>
);
export default AppHeader