import React from "react";

import classes from "./confirm.module.css";

const Confirm = ({onCancel, onConfirm}) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.text_wrapper}>
                Confirm the addition of a new employee. Remember to send him or her account information.
            </div>
            <button
                className={classes.cancel}
                onClick={onCancel}
            >
                cancel
            </button>
            <button
                onClick={onConfirm}
                className={classes.confirm}
            >
                confirm
            </button>
        </div>
    )
}

export default Confirm;
