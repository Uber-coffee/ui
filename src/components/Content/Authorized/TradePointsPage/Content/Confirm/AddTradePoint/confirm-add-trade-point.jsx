import React from "react";
import classes from "../DeleteTradePoint/confirm-delete-trade-point.module.css";

const ConfirmAddition = ({onCancel, onConfirm}) =>{
    return (
        <div className={classes.wrapper}>
            <div className={classes.text_wrapper}>
                Confirm the addition of the new trade point.
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

export default ConfirmAddition;
