import React from "react";

import classes from "./confirm-category.module.css";

const ConfirmCategory = ({onCancel, onConfirm}) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.text_wrapper}>
                Confirm the addition of a new category.
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

export default ConfirmCategory;