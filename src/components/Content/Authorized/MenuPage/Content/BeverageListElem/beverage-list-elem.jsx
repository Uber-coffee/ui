import React, {useState} from "react";

import classes from './beverage-list-elem.module.css';

import Modal from "../../../../../Modal/modal";
import ConfirmDeletion from "../ConfirmDeletion/confirm-deletion";
import {NavLink} from "react-router-dom";

const BeverageListElem = ({beverage, deleteBeverageFunc}) => {
    const [isDeleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const toggleDeleteConfirm = () => {
        setDeleteConfirmOpen(!isDeleteConfirmOpen);
    };
    const onConfirm = () => {
        deleteBeverageFunc();
        toggleDeleteConfirm();
    };
    return (
        <div className={classes.wrapper}>
            <div className={classes.image_logo}> </div>
            <div className={classes.name_label}>
                <NavLink className={classes.navlink} to={"/recipes/#"+beverage.ID} >{beverage.NAME}</NavLink>
            </div>
            <div className={classes.price_label}>
                {"PRICE: " + beverage.PRICE}
            </div>
            <div className={classes.delete_button} onClick={toggleDeleteConfirm}>
                DELETE
                {
                    isDeleteConfirmOpen &&
                    <Modal>
                        <ConfirmDeletion onConfirm={onConfirm} onCancel={toggleDeleteConfirm}/>
                    </Modal>
                }
            </div>
        </div>
    );
};

export default BeverageListElem;
