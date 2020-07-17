import React from "react";

import classes from "./confirm-logout.module.css";

const ConfirmLogout = ({onCancel, onConfirm}) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.text_wrapper}>
                Are you sure that you want to log out?
            </div>
            <button
                className={classes.cancel}
                onClick={onCancel}
            >
                NO
            </button>
            <button
                onClick={onConfirm}
                className={classes.confirm}
            >
                YES
            </button>
        </div>
    )
}

export default ConfirmLogout;
