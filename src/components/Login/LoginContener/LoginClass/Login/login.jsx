import React from 'react';
import classes from './login.module.css';
import {NavLink} from 'react-router-dom';
const Login = props => {
  let login = React.createRef ();
  let password = React.createRef ();
  let path = props.path;

  const onTypeLogin = () => {
    let text = login.current.value;
    props.typeLoginText (text);
  };

  const onTypePassword = () => {
    let text = password.current.value;
    props.typePasswordText (text);
  };

  const onLogin = () => {
    let loginText = login.current.value;
    let passwordText = password.current.value;
    if (loginText === '' || passwordText === '') {
      alert ('Please, fill all Fields');
    } else {
      props.onLogin (loginText, passwordText);
    }
  };

  return (
    <div className={classes.back}>
      <div className={classes.wrapper}>
        <div className={classes.logo} />
        <input
          ref={login}
          onChange={onTypeLogin}
          value={props.currentLoginText ()}
          className={classes.email}
          type="text"
          placeholder="E-Mail"
          required
        />
        <input
          ref={password}
          onChange={onTypePassword}
          value={props.currentPasswordText ()}
          className={classes.password}
          type="password"
          placeholder="Password"
          required
        />
        <NavLink to="/">
          <button className={classes.exit}>EXIT</button>
        </NavLink>
        <NavLink to={path}>
          <button onClick={onLogin} className={classes.login}>LOG IN</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
