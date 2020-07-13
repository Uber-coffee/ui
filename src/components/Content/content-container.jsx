import {connect} from 'react-redux';
import Content from './content';
import {CheckAuthorizationActionCreator} from '../../redux/loginReducer';

let mapStateToProps = state => {
  return {
    isAuthorized: state.loginReducer.isAuthorized,
  };
};

let mapDispatchToProps = dispatch => {
  return {
    Check: () => dispatch(CheckAuthorizationActionCreator ()),
  };
};

const ContentContainer = connect(mapStateToProps, mapDispatchToProps) (
  Content
);

export default ContentContainer;
