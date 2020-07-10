import React from "react";
import classes from './ConfirmWindow.module.css';

const ConfirmWindow = props => {
    return (
        <div className={classes.back}>
            <div className={classes.wrapper}>
                <div className={classes.confirm_text}>CONFIRM THE ADDITION OF A NEW RECIPE</div>
                <div className={classes.buttons_area}>
                    <button className={classes.cancel} onClick={props.closeFunc}>CANCEL</button>
                    <button className={classes.confirm} onClick={props.closeFunc}>CONFIRM</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmWindow;
