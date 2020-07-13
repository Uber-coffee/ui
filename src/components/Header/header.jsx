import React, {useState} from 'react';
import classes from './header.module.css';
import {NavLink} from 'react-router-dom';
import BurgerButton from "./BurgerButton/burger-button";
import Modal from "../Modal/modal";
import SideBar from "./SideBar/side-bar";
import UserButton from "./UserButton/user-button";

const Header = props => {
    const [sideBar, setSideBar] = useState(false);
    props.Check ();

    const toggleSideBar =  () => {
        setSideBar(!sideBar);
    }

    if (props.isAuthorized === false) {
        return (
            <div className={classes.header_unlogged}>
                <div className={classes.logo}/>
                <div className={classes.title_unlogged}>UBER COFFEE</div>
                <div className={classes.buttons_area}>
                    <NavLink to="/login">
                        <button className={classes.login}>LOG IN</button>
                    </NavLink>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className={classes.header_logged}>
                {sideBar &&
                <Modal>
                     <SideBar onClick={toggleSideBar}/>
                </Modal>
                }
                <BurgerButton onClick={toggleSideBar}/>
                <div className={classes.title_logged}>UBER COFFEE</div>
                <UserButton name={"ADMIN"}/>
            </div>
        );
    }
};

export default Header;
