import React, {useState} from "react";

import classes from './add-new-recipe.module.css';

import Modal from "../../../../../Modal/modal";
import AddComponents from "../AddComponents/add-components";

const AddNewRecipe = ({closeFunc, addNewRecipe}) => {
    const [recipeBaseInfo] = useState({
        BEVERAGE_NAME: "",
        COMPONENTS_NUMBER: -1,
    });
    const [isAddComponentsOpen, setAddComponentsOpen] = useState(false);
    const toggleAddComponents = () => {
        setAddComponentsOpen(!isAddComponentsOpen);
    };
    const handleChange = (event) =>{
        const target = event.target;
        const value = target.value;
        const name = target.name;
        switch (name) {
            case "name":
                recipeBaseInfo.BEVERAGE_NAME = value;
                break;
            case "count":
                if (isNaN(value) || value === "" || parseInt(value) <= 1) {
                    recipeBaseInfo.COMPONENTS_NUMBER = -1;
                } else {
                    recipeBaseInfo.COMPONENTS_NUMBER = parseInt(value);
                }
                break;
            default:
        }
    };
    const isValidRecipeBaseInfo = () => {
        return recipeBaseInfo.BEVERAGE_NAME !== "" && recipeBaseInfo.COMPONENTS_NUMBER !== -1;
    };
    const onAdd = () => {
        if (isValidRecipeBaseInfo()) {
            toggleAddComponents();
        }
    };
    return (
        <div className={classes.wrapper}>
            <button className={classes.close_button} onClick={closeFunc}/>
            <div className={classes.title}>INFORMATION ABOUT NEW COMPONENT</div>
            <div className={classes.input_box}>
                <div className={classes.field_wrapper}>
                    <input className={classes.add_input}
                        placeholder={"Beverage Name"}
                        name={"name"}
                        onChange={handleChange}
                    />
                </div>
                <div className={classes.field_wrapper}>
                    <input className={classes.add_input}
                        placeholder={"Number Of Components"}
                        name={"count"}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className={classes.buttons_area}>
                <button className={classes.continue_button} onClick={onAdd}>ADD</button>
            </div>
            {
                isAddComponentsOpen &&
                    <Modal>
                        <AddComponents closeFunc={toggleAddComponents} toThePage={closeFunc}
                                       addNewRecipe={addNewRecipe} recipeBaseInfo={recipeBaseInfo} />
                    </Modal>
            }
        </div>
    );
};

export default AddNewRecipe;
