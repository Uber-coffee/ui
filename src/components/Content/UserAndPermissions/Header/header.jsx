import React from 'react';

import classes from './header.module.css'

import BurgerButton from './BurgerButton/burger-button';
import Title from './Title/title'
import UserButton from "./UserButton/user-button";

const Header = () => {
    return (
        <div className={classes.header}>
            <BurgerButton/>
            <Title/>
            <UserButton name={"ADMIN"}/>
        </div>
    );
};

export default Header;
