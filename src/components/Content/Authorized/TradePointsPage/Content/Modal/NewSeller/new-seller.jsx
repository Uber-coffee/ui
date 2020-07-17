import React, {useRef, useState} from "react";

import classes from "./new-seller.module.css";

import Modal from "../../../../../../Modal/modal";
import ConfirmNotFound from "../../Confirm/AddSeller/UserNotFound/confirm-not-found";
import ConfirmAddSeller from "../../Confirm/AddSeller/UserFound/confirm-add-seller";
import * as axios from "axios";

const AddNewSeller = ({closeFunc, addNewSeller, TradePointID}) => {
    const [email, setEmail] = useState("");
    const [displayConfirmNotFound, setDisplayConfirmNotFound] = useState(false);
    const [displayConfirmFound, setDisplayConfirmFound] = useState(false);
    const [newSellerInfo, setNewSellerInfo] = useState({
        ID: -1, NAME: "", EMAIL: "", PHONE: "", TIME_REG: ""
    });

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
        addNewSeller(newSellerInfo);
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
        let requestUrl = 'http://ecse005008ef.epam.com:8080/api/trade-point/w/user/trade-points/'
                         + TradePointID + '/valid?emailSeller=' + email;
        axios
            .get(requestUrl, {
                headers: {
                    authorization: localStorage.getItem('jwt-Token')
                }
            })
            .then(response => {
                if (response.data === null) {
                    toggleConfirmNotFound();
                } else {
                    const regDate = new Date(response.data.registrationDate);
                    const regDateStr = regDate.getDate() + '/' + regDate.getMonth() + '/' + regDate.getFullYear() +
                        " " + regDate.getHours() + ':' + regDate.getMinutes();
                    let sellerInfo = {
                        ID: response.data.id,
                        NAME: response.data.firstName + " " + response.data.lastName,
                        EMAIL: response.data.email,
                        PHONE: response.data.phoneNumber,
                        TIME_REG: regDateStr
                    }
                    setNewSellerInfo(sellerInfo);
                    toggleConfirmFound();
                }
            })
            .catch(error => {
                alert("checking seller error!");
                console.log(error);
            });
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
                        name={newSellerInfo.NAME}
                        email={newSellerInfo.EMAIL}
                        phone={newSellerInfo.PHONE}
                    />
                </Modal>
            }
        </div>
    );
}

export default AddNewSeller;
