import React from "react";
import classes from "../../DeleteTradePoint/confirm-delete-trade-point.module.css";

const ConfirmAddSeller = ({onCancel, onConfirm, name, email, phone}) =>{
    return (
        <div className={classes.wrapper}>
            <p className={classes.text_wrapper}>
                THE SELLER IS: {name} <br/>
                EMAIL: {email} <br/>
                PHONE NUMBER: {phone} <br/>
                Do you want to add him to this trade point?
            </p>
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

export default ConfirmAddSeller;
