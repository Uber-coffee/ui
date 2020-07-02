import React from 'react';
import classes from './Header.module.css';

const Header = props => {
    return (
        <header className={classes.header}>
            <button className={classes.menu_button}></button>
            <div className={classes.tilte}>UBER COFFEE</div>
            <button className={classes.user_button}>ADMIN</button>
        </header>
    );
};

export default Header;