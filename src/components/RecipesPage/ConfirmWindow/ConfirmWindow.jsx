import React from "react";
import classes from './ConfirmWindow.module.css';
import {NavLink} from "react-router-dom";

const ConfirmWindow = props => {
    return (
        <div className={classes.back}>
            <div className={classes.wrapper}>
                <div className={classes.confirm_text}>CONFIRM THE ADDITION OF A NEW RECIPE</div>
                <div className={classes.buttons_area}>
                    <NavLink to="/">
                        <button className={classes.cancel}>CANSEL</button>
                    </NavLink>
                    <NavLink to="/">
                        <button className={classes.confirm}>CONFIRM</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default ConfirmWindow;