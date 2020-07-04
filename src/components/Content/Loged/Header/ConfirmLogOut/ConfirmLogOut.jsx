import React from 'react';
import classes from './ConfirmLogOut.module.css';
import {NavLink} from 'react-router-dom';

const ConfirmLogOut = () => {
  return (
    <div className={classes.back}>
      <div className={classes.wrapper}>
        <span className={classes.text}>Are you sure that you want to log out?</span>
        <NavLink to='/'>
            <button className={classes.exit}>NO</button>
        </NavLink>
        <NavLink to='/'>
            <button className={classes.confirm}>YES</button>
        </NavLink>
        
      </div>
    </div>
  );
};

export default ConfirmLogOut;