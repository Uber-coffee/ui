import React from 'react';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = props => {
  return (
    <div className={classes.header}>
      <div className={classes.logo} />
      <div className={classes.titel}>UBER COFFEE</div>
      <div className={classes.buttons_area}>
        <NavLink to="/login">
          <button className={classes.login}>LOG IN</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
