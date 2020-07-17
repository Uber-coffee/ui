import React, {useState} from "react";

import classes from "./add-new-user.module.css";

import Confirm from "../Confirm/confirm";
import Modal from "../../../../../Modal/modal";

const AddNewUser = ({closeFunc, addNewEmployer}) => {
    const [employer] = useState({
        NAME: "",
        SURNAME: "",
        EMAIL: "",
        PHONE: "",
        PASSWORD: "",
        POSITION: ""
    })
    const [displayMenu, setDisplayMenu] = useState(false)
    const [displayConfirm, setDisplayConfirm] = useState(false);

    const RoleOptions = [
        "ADMIN",
        "SELLER",
        "MANAGER"
    ];

    const toggleDropdown = () => {
        setDisplayMenu(!displayMenu);
    };

    const handleChange = (event) =>{
        const target = event.target;
        const value = target.value;
        const name = target.name;

        switch (name) {
            case "firstName":
                employer.NAME = value;
                break;
            case "secondName":
                employer.SURNAME = value;
                break;
            case "email":
                employer.EMAIL = value;
                break;
            case "phone":
                employer.PHONE = value;
                break;
            case "position":
                employer.POSITION = value;
                break;
        }
    };

    const isValidEmployer = () => {
        return employer.NAME !== "" &&
            employer.SURNAME !== "" &&
            employer.EMAIL !== "" &&
            employer.PHONE !== "" &&
            employer.POSITION !== "";
    };

    const onAdd = () => {
        if (isValidEmployer()) {
            toggleConfirm();
        }
    };

    const handleSelect = (el) => {
        employer.POSITION = el;
        toggleDropdown();
    };

    const createListElem = (el, id) => {
        return employer.POSITION !== el &&
            <div
                className={classes.elem}
                key={id}
                onClick={() => handleSelect(el)}
            >
                {el}
            </div>;
    };

    const toggleConfirm = () => {
        setDisplayConfirm(!displayConfirm);
    };

    const onConfirm = () => {
        addNewEmployer(employer);
        toggleConfirm();
        closeFunc();
    };

    return (
        <div className={classes.wrapper}>
            <button className={classes.close_button} onClick={closeFunc}/>
            <div className={classes.title}>INFORMATION ABOUT NEW EMPLOYEE</div>
            <div className={classes.input_box}>
                <div className={classes.field_wrapper}>
                    <input
                        className={classes.user_perm_param}
                        placeholder={"First name"}
                        name={"firstName"}
                        onChange={handleChange}
                    />
                </div>
                <div className={classes.field_wrapper}>
                    <input
                        className={classes.user_perm_param}
                        placeholder={"Second name"}
                        name={"secondName"}
                        onChange={handleChange}
                    />
                </div>
                <div className={classes.field_wrapper}>
                    <input
                        className={classes.user_perm_param}
                        placeholder={"E-Mail Address"}
                        name={"email"}
                        onChange={handleChange}
                    />
                </div>
                <div className={classes.field_wrapper}>
                    <input
                        className={classes.user_perm_param}
                        placeholder={"Phone Number"}
                        name={"phone"}
                        onChange={handleChange}
                    />
                </div>
                <div className={classes.field_wrapper}>
                    <div  className={classes.dropdown}>
                        <div
                            className={displayMenu ? classes.buttonOpened : classes.buttonClosed}
                            onClick={()=>toggleDropdown(this)}
                        >
                            {employer.POSITION === "" ? "Position" : employer.POSITION}
                        </div>
                        {
                            displayMenu &&
                            <div className={classes.listWrapper}>
                                {RoleOptions.map((el, id) => createListElem(el, id))}
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className={classes.buttons_area}>
                <button className={classes.continue_button} onClick={() => onAdd()}>ADD</button>
            </div>
            {
                displayConfirm &&
                <Modal>
                    <Confirm onCancel={toggleConfirm} onConfirm={onConfirm}/>
                </Modal>
            }
        </div>
    );
}

export default AddNewUser;
