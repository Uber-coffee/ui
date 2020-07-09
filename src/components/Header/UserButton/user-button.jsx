import React from "react";

import classes from "./user-button.module.css"

const UserButton = ({name}) => {
    return <button className={classes.user_button}>{name}</button>;
};

export default UserButton;
