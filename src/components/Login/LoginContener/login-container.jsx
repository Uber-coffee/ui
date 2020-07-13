import {
  loginUserActionCreator,
  logoutUserActionCreator,
  TypeInLoginActionCreator,
  TypeInPasswordActionCreator,
} from '../../../redux/loginReducer';
import {connect} from 'react-redux';
import LoginClass from './LoginClass/login-class';

let mapStateToProps = state => {
  return {
    isAuthorized: state.loginReducer.isAuthorized,
    curentTextLogin: state.loginReducer.curentTextLogin,
    curentTextPassword: state.loginReducer.curentTextPassword,
    path: state.loginReducer.path,
  };
};

let mapDispatchToProps = dispatch => {
  return {
    onTypeLogin: symbol => dispatch (TypeInLoginActionCreator (symbol)),
    onTypePassword: symbol => dispatch (TypeInPasswordActionCreator (symbol)),
    onLogin: (login, password) =>
      dispatch (loginUserActionCreator (login, password)),
    onLogout: () => dispatch (logoutUserActionCreator ()),
  };
};

const LoginContainer = connect (mapStateToProps, mapDispatchToProps) (
  LoginClass
);

export default LoginContainer;
