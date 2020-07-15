import React from "react";
import classes from "../../DeleteTradePoint/confirm-delete-trade-point.module.css";

const ConfirmNotFound = ({onCancel, onConfirm}) =>{
    return (
        <div className={classes.wrapper}>
            <div className={classes.text_wrapper}>
                User with such email hasn’t been found. do you want to retry?
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

export default ConfirmNotFound;
