import {connect} from 'react-redux';
import Header from './header';
import {CheckAuthorizationActionCreator} from '../../redux/loginReducer';

let mapStateToProps = state => {
    return {
        isAuthorized: state.loginReducer.isAuthorized,
    };
};

let mapDispatchToProps = dispatch => {
    return {
        Check: () => dispatch (CheckAuthorizationActionCreator ()),
    };
};

const HeaderContainer = connect (mapStateToProps, mapDispatchToProps) (
    Header
);

export default HeaderContainer;
