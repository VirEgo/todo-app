import React, { Component } from 'react';
import './item-status-filter.scss';

export default class ItemStatusFilter extends Component {
    render() {
        return (
            <div className="btn-group ml-2">
                <button className="btn btn-primary">All</button>
                <button className="btn btn-outline-secondary">Active</button>
                <button className="btn btn-outline-secondary">Done</button>
            </div>
        );
    }
}