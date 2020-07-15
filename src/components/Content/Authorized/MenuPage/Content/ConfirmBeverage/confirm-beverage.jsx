import React from "react";

import classes from "./confirm-beverage.module.css";

const ConfirmBeverage = ({onCancel, onConfirm}) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.text_wrapper}>
                Confirm the addition of a new beverage.
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

export default ConfirmBeverage;
