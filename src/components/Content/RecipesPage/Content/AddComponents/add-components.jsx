import React, {useState} from "react";

import classes from './add-components.module.css';

import AddComponentsTable from "./AddComponentsTable/add-components-table";
import Modal from "../../../../Modal/modal";
import ConfirmRecipe from "../ConfirmRecipe/confirm-recipe";
import ConfirmComponent from "../../../ComponentsPage/Content/ConfirmComponent/confirm-component";

const AddComponents = ({closeFunc, toThePage, addNewRecipe, recipeBaseInfo}) => {
    const [displayConfirm, setDisplayConfirm] = useState(false);
    const toggleConfirm = () => {
        setDisplayConfirm(!displayConfirm);
    };
    const onConfirm = () => {
        addNewRecipe({});
        toggleConfirm();
        closeFunc();
        toThePage();
    };
    return (
        <div className={classes.wrapper}>
            <button className={classes.close_button} onClick={closeFunc}/>
            <div className={classes.table_zone}>
                <AddComponentsTable/>
                <div className={classes.delete_buttons_area}>
                    <button className={classes.delete_row}>-</button>
                </div>
            </div>
            <div className={classes.buttons_zone}>
                <button className={classes.add_row}>+</button>
                <div className={classes.next_area}>
                    <button className={classes.next_button} onClick={toggleConfirm}>NEXT</button>
                </div>
            </div>
            {
                displayConfirm &&
                    <Modal>
                        <ConfirmRecipe onCancel={toggleConfirm} onConfirm={onConfirm} />
                    </Modal>
            }
        </div>
    );
};

export default AddComponents;