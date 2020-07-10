import React, {useState} from "react";

import classes from "./add-new-category.module.css";

import ConfirmCategory from "../ConfirmCategory/confirm-category";
import Modal from "../../../../../Modal/modal";

const AddNewCategory = ({closeFunc, addNewComponentClass}) => {
    const [componentClass] = useState({
        NAME: "",
        IS_SINGLE: false,
        IS_REQUIRED: false,
    });
    const [displayConfirm, setDisplayConfirm] = useState(false);
    const toggleConfirm = () => {
        setDisplayConfirm(!displayConfirm);
    };
    const handleChange = (event) =>{
        const target = event.target;
        const name = target.name;
        switch (name) {
            case "name":
                let value = target.value;
                componentClass.NAME = value;
                break;
            case "is_single":
                let single_check = target.checked;
                componentClass.IS_SINGLE = single_check;
                break;
            case "is_required":
                let required_check = target.checked;
                componentClass.IS_REQUIRED = required_check;
                break;
            default:
        }
    };
    const isValidComponentClass = () => {
        return componentClass.NAME !== "" &&
               componentClass.IS_SINGLE !== undefined &&
               componentClass.IS_REQUIRED !== undefined;
    };
    const onAdd = () => {
        if (isValidComponentClass()) {
            toggleConfirm();
        }
    };
    const onConfirm = () => {
        addNewComponentClass(componentClass);
        toggleConfirm();
        closeFunc();
    };
    return (
        <div className={classes.wrapper}>
            <button className={classes.close_button} onClick={closeFunc}/>
            <div className={classes.title}>INFORMATION ABOUT NEW COMPONENT</div>
            <div className={classes.input_box}>
                <div className={classes.field_wrapper}>
                    <input
                        className={classes.input_new_category}
                        placeholder={"Category Name"}
                        name={"name"}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className={classes.checkboxes_area}>
                <div className={classes.checkbox_area}>
                    <div className={classes.checkbox_label}>Is Single</div>
                    <input type={"checkbox"} name={"is_single"} onClick={handleChange} className={classes.checkbox} />
                </div>
                <div className={classes.checkbox_area}>
                    <div className={classes.checkbox_label}>Is Required</div>
                    <input type={"checkbox"} name={"is_required"} onClick={handleChange} className={classes.checkbox} />
                </div>
            </div>
            <div className={classes.buttons_area}>
                <button className={classes.continue_button} onClick={() => onAdd()}>
                    ADD
                </button>
            </div>
            {
                displayConfirm &&
                <Modal>
                    <ConfirmCategory onCancel={toggleConfirm} onConfirm={onConfirm}/>
                </Modal>
            }
        </div>
    );
};

export default AddNewCategory;
