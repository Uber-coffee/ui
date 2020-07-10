const LOGIN_USER = 'login';
const LOGOUT_USER = 'logout';
const TYPE_LOGIN = 'typeLogin';
const TYPE_PASSWORD = 'typePasword';
const CHECK_AUTORIZATION = 'checkAuthorization';
export const loginUserActionCreator = (login, password) => {
  return {type: LOGIN_USER, login: login, password: password};
};

export const logoutUserActionCreator = () => {
  return {type: LOGOUT_USER};
};

export const TypeInLoginActionCreator = symbol => {
  return {type: TYPE_LOGIN, symbol: symbol};
};

export const TypeInPasswordActionCreator = symbol => {
  return {type: TYPE_PASSWORD, symbol: symbol};
};

export const CheckAuthorizationActionCreator = () => {
  return {type: CHECK_AUTORIZATION};
};

let init_state = {
  isAuthorized: false,
  curentTextLogin: '',
  curentTextPassword: '',
  Login: '',
  Password: '',
};

const loginReducer = (state = init_state, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      let newState = {...state};
      newState.Login = action.login;
      newState.Password = action.password;
      newState.isAuthorized = true;
      newState.curentTextLogin = '';
      newState.curentTextPassword = '';
      return newState;
    }
    case LOGOUT_USER: {
      let newState = {...state};
      newState.Login = '';
      newState.Password = '';
      newState.isAuthorized = false;
      return newState;
    }
    case TYPE_LOGIN: {
      let newState = {...state};
      newState.curentTextLogin = action.symbol;
      return newState;
    }
    case TYPE_PASSWORD: {
      let newState = {...state};
      newState.curentTextPassword = action.symbol;
      return newState;
    }
    case CHECK_AUTORIZATION: {
      let newState = {...state};
      return newState;
    }
    default:
      return state;
  }
};

export default loginReducer;
