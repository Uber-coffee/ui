import React, {useState} from "react";

import classes from "./add-new-beverage.module.css";

import ConfirmBeverage from "../ConfirmBeverage/confirm-beverage";
import Modal from "../../../../../Modal/modal";

const AddNewBeverage = ({closeFunc, addNewBeverage}) => {
    const recipes = [
        "COFFEE #1",
        "COFFEE #2",
        "COFFEE #3"
    ];
    const [beverage] = useState({
        NAME: "",
        PRICE: -1
    });
    const [displayDropdown, setDisplayDropdown] = useState(false)
    const [displayConfirm, setDisplayConfirm] = useState(false);
    const toggleDropdown = () => {
        setDisplayDropdown(!displayDropdown);
    };
    const toggleConfirm = () => {
        setDisplayConfirm(!displayConfirm);
    };
    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        switch (name) {
            case "name":
                beverage.NAME = value;
                break;
            case "price":
                if (isNaN(value) || value === "" || parseInt(value) <= 1) {
                    beverage.PRICE = -1;
                } else {
                    beverage.PRICE = parseInt(value);
                }
                break;
            default:
        }
    };
    const handleSelect = (el) => {
        beverage.NAME = el;
        toggleDropdown();
    };
    const isValidBeverage = () => {
        return beverage.NAME !== "" && beverage.PRICE !== -1;
    };
    const onAdd = () => {
        if (isValidBeverage()) {
            toggleConfirm();
        }
    };
    const onConfirm = () => {
        addNewBeverage(beverage);
        toggleConfirm();
        closeFunc();
    };
    const createListElem = (el, id) => {
        return beverage.NAME !== el &&
            <div
                className={classes.elem}
                key={id}
                onClick={() => handleSelect(el)}
            >
                {el}
            </div>;
    };
    return (
        <div className={classes.wrapper}>
            <button className={classes.close_button} onClick={closeFunc}/>
            <div className={classes.title}>INFORMATION ABOUT NEW BEVERAGE</div>
            <div className={classes.input_box}>
                <div className={classes.field_wrapper}>
                    <div className={classes.dropdown}>
                        <div
                            className={displayDropdown ? classes.buttonOpened : classes.buttonClosed}
                            onClick={() => toggleDropdown(this)}
                            style={{color: (beverage.NAME === "") ? "#959595" : "#000000"}}
                        >
                            {beverage.NAME === "" ? "Recipe For Beverage" : beverage.NAME}
                        </div>
                        {
                            displayDropdown &&
                            <div className={classes.listWrapper}>
                                {recipes.map((el, id) => createListElem(el, id))}
                            </div>
                        }
                    </div>
                </div>
                <div className={classes.field_wrapper}>
                    <input
                        className={classes.user_perm_param}
                        placeholder={"Price"}
                        name={"price"}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className={classes.buttons_area}>
                <button className={classes.continue_button} onClick={() => onAdd()}>ADD</button>
            </div>
            {
                displayConfirm &&
                <Modal>
                    <ConfirmBeverage onCancel={toggleConfirm} onConfirm={onConfirm}/>
                </Modal>
            }
        </div>
    );
};

export default AddNewBeverage;