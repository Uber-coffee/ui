import React from 'react';
import classes from './SearchPanel.module.css';

const SearchPanel = props => {
    return (
        <div className={classes.search_panel}>
            <div className={classes.search_icon}/>
            <input className={classes.search_input}/>
        </div>
    );
};

export default SearchPanel;
