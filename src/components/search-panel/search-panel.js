import React from 'react';
import ItemStatusFilter from '../item-status-filter';
import './search-panel.scss';

const SearchPanel = () => {
    const searchText = "search";
    const searchStyle = {
        fontSize: "20px"
    }
    return (
        <div className="search-panel d-flex align-items-center mb-4">
            <input className="search-input " type="text" style={searchStyle} placeholder={searchText} />
            <ItemStatusFilter />
        </div>
    );
};

export default SearchPanel;