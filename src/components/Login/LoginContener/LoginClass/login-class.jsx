import React from 'react';
import Login from './Login/login';
import * as axios from 'axios';
// import {head} from 'request';

class LoginClass extends React.Component {
  componentDidMount () {
    alert (
      'If your a not an employer, please be kind to use our mobile app ʕ·͡ᴥ·ʔ'
    );
  }
  typeLoginText = symbol => {
    this.props.onTypeLogin (symbol);
  };
  currentLoginText = () => {
    return this.props.curentTextLogin;
  };

  typePasswordText = symbol => {
    this.props.onTypePassword (symbol);
  };

  currentPasswordText = () => {
    return this.props.curentTextPassword;
  };

  onLogin = (login, password) => {
    let user = {
      email: login,
      password: password,
    };
    return this.props.onLogin (login, password);
    axios
      .post (`http://ecse005008ef.epam.com:8080/api/auth/w/auth/login`, user)
      .then (responce => {
        const token = responce.headers.authorization;
        const refreshToken = {...responce.headers};
        localStorage.setItem ('jwt-Token', token);
        localStorage.setItem (
          'jwt-RefreshToken',
          refreshToken['refresh-token']
        );
        return this.props.onLogin (login, password);
      })
      .catch (err => {
        return alert ('something wrong!');
      });
  };

  path = () => {
    let path = '';
    if (this.currentPasswordText () !== '' && this.currentLoginText () !== '') {
      path = '/';
    } else {
      path = '/login';
    }
    return path;
  };

  render () {
    return (
      <Login
        typeLoginText={this.typeLoginText}
        currentLoginText={this.currentLoginText}
        typePasswordText={this.typePasswordText}
        currentPasswordText={this.currentPasswordText}
        onLogin={this.onLogin}
        path={this.path ()}
      />
    );
  }
}

export default LoginClass;
