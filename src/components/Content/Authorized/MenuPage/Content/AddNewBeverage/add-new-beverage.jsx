import React, {useState} from "react";

import classes from "./add-new-beverage.module.css";

const AddNewBeverage = ({closeFunc, nextStage, updateBeverage}) => {
    const [beverage] = useState({
        NAME: "",
        PRICE: -1
    });

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

    const onAdd = () => {
        if (isValidBeverage()){
            updateBeverage({
                NAME: beverage.NAME,
                PRICE: beverage.PRICE
            })
            nextStage();
        }
    }

    const isValidBeverage = () => {
        return beverage.NAME !== "" && beverage.PRICE !== -1;
    };

    return (
        <div className={classes.wrapper}>
            <button className={classes.close_button} onClick={closeFunc}/>
            <div className={classes.title}>INFORMATION ABOUT NEW BEVERAGE</div>
            <div className={classes.input_box}>
                <div className={classes.field_wrapper}>
                    <input
                        className={classes.user_perm_param}
                        placeholder={"Beverage Name"}
                        name={"name"}
                        onChange={handleChange}
                    />
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
                <button className={classes.continue_button} onClick={onAdd}>ADD</button>
            </div>

        </div>
    );
};

export default AddNewBeverage;
