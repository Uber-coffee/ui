import React from "react";
import classes from './AddNewComponent.module.css';
import {NavLink} from "react-router-dom";

const AddNewComponent = props => {
    return (
        <div className={classes.back}>
            <div className={classes.wrapper}>
                <NavLink to="/">
                    <button className={classes.close_button}/>
                </NavLink>
                <div className={classes.title}>INFORMATION ABOUT COMPONENT 1</div>
                <div className={classes.input_box}>
                    <input placeholder={"Component Name"}/>
                    <input placeholder={"Quantity"}/>
                    <input placeholder={"Measure"}/>
                </div>
                <div className={classes.buttons_area}>
                    <NavLink to="/">
                        <button className={classes.continue_button}>ADD</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default AddNewComponent;