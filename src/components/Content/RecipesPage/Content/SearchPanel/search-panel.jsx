import React from 'react';
import classes from './search-panel.module.css';

const SearchPanel = props => {
    return (
        <div className={classes.search_panel}>
            <div className={classes.search_icon}></div>
            <input className={classes.search_input}/>
        </div>
    );
};

export default SearchPanel;