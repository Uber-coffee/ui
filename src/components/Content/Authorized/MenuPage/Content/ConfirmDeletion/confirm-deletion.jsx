import React from "react";

import classes from "./confirm-deletion.module.css";

const ConfirmDeletion = ({onCancel, onConfirm}) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.text_wrapper}>
                Confirm the deletion of the beverage.
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

export default ConfirmDeletion;
