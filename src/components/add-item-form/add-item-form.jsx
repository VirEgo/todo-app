import React, { Component } from 'react';
import './item-add-form.scss';

export default class ItemAddForm extends Component {

    // maxId = 100;

    state = {
        text: ''
    }

    addItem = () => {
        console.log("sfdfdf");
    }

    inputHandler = (e) => {
        console.log(e.target.value);
        let inputValue = e.target.value;
        this.setState({
            text: inputValue
        })
    }
    render() {

        const { text } = this.state.text;
        return (
            <div className="item-add-form">
                <input type="text" onChange={this.inputHandler} />
                <button
                    onClick={() => this.props.onItemAdded(this.state.text)}
                    className="btn btn-outline-secondary mt-2">Add ToDo</button>
            </div>
        );
    }
}
