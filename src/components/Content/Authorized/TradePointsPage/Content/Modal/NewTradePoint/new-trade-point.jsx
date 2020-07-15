import React, {useState} from "react";
import classes from "./new-trade-point.module.css";
import ConfirmAddition from "../../Confirm/AddTradePoint/confirm-add-trade-point";
import Modal from "../../../../../../Modal/modal";

const NewTradePoint = ({addFunc, closeFunc}) => {
    const [showConfirm, setShowConfirm] = useState(false);
    const [tradePoint] = useState({
        NAME: "",
        ADDRESS: "",
        LONGITUDE: "",
        LATITUDE: ""
    });

    const handleChange = (event) =>{
        const target = event.target;
        const value = target.value;
        const name = target.name;

        switch (name) {
            case "name":
                tradePoint.NAME = value;
                break;
            case "address":
                tradePoint.ADDRESS = value;
                break;
            case "longitude":
                tradePoint.LONGITUDE = value;
                break;
            case "latitude":
                tradePoint.LATITUDE = value;
                break;
            default:
                break;
        }
    };

    const onAdd = () => {
        addFunc(tradePoint);
        closeFunc();
    };

    const toggleConfirm = () => {
        setShowConfirm(!showConfirm);
    }

    return (
        <div className={classes.wrapper}>
            <button className={classes.close_button} onClick={closeFunc}/>
            <div className={classes.title}>
                information about new trade point
            </div>
            <div className={classes.input_box}>
                <div className={classes.field_wrapper}>
                    <input
                        className={classes.input_field}
                        placeholder={"Trade Point Name"}
                        name={"name"}
                        onChange={handleChange}
                    />
                </div>
                <div className={classes.field_wrapper}>
                    <input
                        className={classes.input_field}
                        placeholder={"Address"}
                        name={"address"}
                        onChange={handleChange}
                    />
                </div>
                <div className={classes.field_wrapper}>
                    <input
                        className={classes.input_field}
                        placeholder={"Longitude (Format 00.00)"}
                        name={"longitude"}
                        onChange={handleChange}
                    />
                </div>
                <div className={classes.field_wrapper}>
                    <input
                        className={classes.input_field}
                        placeholder={"Latitude (Format 00.00)"}
                        name={"latitude"}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className={classes.buttons_area}>
                <button className={classes.continue_button} onClick={toggleConfirm}>ADD</button>
            </div>
            {
                showConfirm &&
                <Modal>
                    <ConfirmAddition onCancel={toggleConfirm} onConfirm={onAdd}/>
                </Modal>
            }
        </div>
    );
};

export default NewTradePoint;
