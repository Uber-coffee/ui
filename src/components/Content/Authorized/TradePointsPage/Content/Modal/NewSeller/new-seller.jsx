import React, {useRef, useState} from "react";

import classes from "./new-seller.module.css";

import Modal from "../../../../../../Modal/modal";
import ConfirmNotFound from "../../Confirm/AddSeller/UserNotFound/confirm-not-found";
import ConfirmAddSeller from "../../Confirm/AddSeller/UserFound/confirm-add-seller";

const AddNewSeller = ({closeFunc, addNewSeller}) => {
    const [email, setEmail] = useState("");
    const passwordRef = useRef(null);
    const [displayConfirmNotFound, setDisplayConfirmNotFound] = useState(false);
    const [displayConfirmFound, setDisplayConfirmFound] = useState(false);

    const handleChange = (event) =>{
        const target = event.target;
        const value = target.value;
        const name = target.name;

        switch (name) {
            case "email":
                setEmail(value);
                break;
        }
    };

    const toggleConfirmNotFound = () => {
        setDisplayConfirmNotFound(!displayConfirmNotFound);
    };

    const toggleConfirmFound = () => {
        setDisplayConfirmFound(!displayConfirmFound);
    };

    const onConfirmFound = () => {
        addNewSeller({
            NAME: "IVAN",
            EMAIL: "VASYA@MAIL.RU",
            PHONE: "+880055",
            TIME_REG: "21/12/2021 20:34",
        })
        toggleConfirmFound();
        closeFunc();
    };

    const onCancelFound = () => {
        toggleConfirmFound();
        closeFunc();
    };

    const onConfirmNotFound = () => {
        toggleConfirmFound();
        closeFunc();
    };

    const onCancelNotFound = () => {
        toggleConfirmNotFound();
    };




    const onAdd = () => {
        if (email === "VASYA@MAIL.RU"){
            toggleConfirmFound();
        }
        else {
            toggleConfirmNotFound();
        }
    }

    return (
        <div className={classes.wrapper}>
            <button className={classes.close_button} onClick={closeFunc}/>
            <div className={classes.title}>INFORMATION ABOUT NEW EMPLOYEE</div>
            <div className={classes.input_box}>
                <div className={classes.field_wrapper}>
                    <input
                        className={classes.input_field}
                        placeholder={"Seller's email"}
                        name={"email"}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className={classes.buttons_area}>
                <button className={classes.continue_button} onClick={() => onAdd()}>ADD</button>
            </div>
            {
                displayConfirmNotFound &&
                <Modal>
                    <ConfirmNotFound onCancel={onCancelNotFound} onConfirm={onConfirmNotFound}/>
                </Modal>
            }
            {
                displayConfirmFound &&
                <Modal>
                    <ConfirmAddSeller
                        onCancel={onCancelFound}
                        onConfirm={onConfirmFound}
                        name={"IVAN"}
                        email={"VASYA@MAIL.RU"}
                        phone={"+880055"}
                    />
                </Modal>
            }
        </div>
    );
}

export default AddNewSeller;
