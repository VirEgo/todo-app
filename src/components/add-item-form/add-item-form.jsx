import React, { Component } from 'react';
import './item-add-form.scss';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        })

    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="item-add-form">
                <input type="text"
                    className="form-control"
                    onChange={this.onLabelChange}
                    placeholder="What need to be done"
                    value={this.state.label} />
                <button
                    className="btn btn-outline-secondary">Add ToDo</button>
            </form>
        );
    }
}
