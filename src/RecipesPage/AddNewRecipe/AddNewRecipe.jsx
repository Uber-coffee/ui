import React from "react";
import classes from './AddNewRecipe.module.css';
import {NavLink} from "react-router-dom";

const AddNewRecipe = props => {
    return (
        <div className={classes.back}>
            <div className={classes.wrapper}>
                <NavLink to="/">
                    <button className={classes.close_button}/>
                </NavLink>
                <div className={classes.title}>INFORMATION ABOUT NEW RECIPE</div>
                <div className={classes.input_box}>
                    <input placeholder={"Beverage Name"}/>
                    <input placeholder={"Number of Components"}/>
                </div>
                <div className={classes.buttons_area}>
                    <NavLink to="/add-new-component">
                        <button className={classes.continue_button}>CONTINUE</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default AddNewRecipe;