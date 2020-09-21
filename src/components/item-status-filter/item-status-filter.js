import React, { Component } from 'react';
import './item-status-filter.scss';

export default class ItemStatusFilter extends Component {

    buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' }
    ];



    render() {
        const { filter, onFilterChange } = this.props;
        const buttons = this.buttons.map(({ name, label }) => {
            const isActiveBtn = filter === name;
            const classes = isActiveBtn ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button
                    key={name}
                    className={`btn ${classes}`}
                    name={name}
                    onClick={() => onFilterChange(name)}>{label}</button>
            )
        });
        return (
            <div className="btn-group ml-2">
                {buttons}
            </div>
        );
    }
}