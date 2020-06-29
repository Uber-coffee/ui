import React from 'react';
import classes from './Login.module.css';
import {NavLink} from 'react-router-dom';
const Login = () => {
  alert ('УХАДИ');
  return (
    <div className={classes.back}>
      <div className={classes.wrapper}>
        <div className={classes.logo} />
        <input
          className={classes.email}
          type="text"
          placeholder="E-Mail"
          required
        />
        <input
          className={classes.password}
          type="password"
          placeholder="Password"
          required
        />
        <NavLink to="/">
          <button className={classes.exit}>EXIT</button>
        </NavLink>
        <button className={classes.login}>LOG IN</button>
      </div>
    </div>
  );
};

export default Login;
