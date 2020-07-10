import React from "react";
import classes from './AddNewRecipe.module.css';

const AddNewRecipe = props => {
    return (
        <div className={classes.back}>
            <div className={classes.wrapper}>
                <button className={classes.close_button} onClick={props.closeFunc}/>
                <div className={classes.title}>INFORMATION ABOUT NEW RECIPE</div>
                <div className={classes.input_box}>
                    <input placeholder={"Beverage Name"} className={classes.input}/>
                    <input placeholder={"Number of Components"} className={classes.input}/>
                </div>
                <div className={classes.buttons_area}>
                    <button className={classes.continue_button} onClick={props.nextFunc}>CONTINUE</button>
                </div>
            </div>
        </div>
    );
};

export default AddNewRecipe;
