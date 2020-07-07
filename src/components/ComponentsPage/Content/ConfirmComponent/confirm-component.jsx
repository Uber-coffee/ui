import React from "react";

import classes from "./confirm-component.module.css";

const ConfirmComponent = ({onCancel, onConfirm}) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.text_wrapper}>
                Confirm the addition of a new component.
            </div>
            <button className={classes.cancel} onClick={onCancel}>
                cancel
            </button>
            <button className={classes.confirm} onClick={onConfirm}>
                confirm
            </button>
        </div>
    );
};

export default ConfirmComponent;