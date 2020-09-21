import React from 'react';
import './search-panel.scss';
import { Component } from 'react';

export default class SearchPanel extends Component {

    state = {
        term: ''
    }

    onSearchChange = event => {
        const term = event.target.value
        this.setState({ term });
        this.props.onSearchChange(term)
    };

    render() {
        const searchText = "search";
        const searchStyle = {
            fontSize: "20px"
        }

        return (
            <div className="search-panel d-flex align-items-center w-100">
                <input className="search-input "
                    type="text"
                    style={searchStyle}
                    placeholder={searchText}
                    onChange={this.onSearchChange}
                    value={this.state.term} />
            </div>
        );
    }
};