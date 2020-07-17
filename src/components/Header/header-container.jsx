import {connect} from 'react-redux';
import Header from './header';
import {CheckAuthorizationActionCreator, logoutUserActionCreator} from '../../redux/loginReducer';

let mapStateToProps = state => {
    return {
        isAuthorized: state.loginReducer.isAuthorized,
    };
};

let mapDispatchToProps = dispatch => {
    return {
        Check: () => dispatch (CheckAuthorizationActionCreator ()),
        onLogout: () => dispatch (logoutUserActionCreator ()),
    };
};

const HeaderContainer = connect (mapStateToProps, mapDispatchToProps) (
    Header
);

export default HeaderContainer;
