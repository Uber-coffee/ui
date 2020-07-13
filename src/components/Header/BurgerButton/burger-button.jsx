import React from "react";

import classes from "./burger-button.module.css"

const BurgerButton = props => {
    return <button onClick={props.onClick} className={classes.burger_button}/>;
}

export default BurgerButton;
