import React, {useState} from "react";

import classes from "./user-button.module.css"
import Modal from "../../Modal/modal";
import ConfirmLogout from "./ConfirmLogout/confirm-logout";

const UserButton = ({name, onLogout}) => {
    const [showConfirm, setConfirm] = useState(false);
    const [showLogout, setLogout] = useState(false);

    const toggleModal = () => {
        setConfirm(!showConfirm);
    };

    const onConfirm = () => {
        onLogout();
        setConfirm(!showConfirm);
    };

    const toggleLogout = () => {
        setLogout(!showLogout);
    }


    return (
        <div className={!showLogout ? classes.user_button_wrapper : classes.user_button_wrapper_opened}>
            {
                !showLogout ?
                    <div onClick={toggleLogout} className={classes.user_button}>
                        {name}
                    </div>
                :
                    <div>
                        <div onClick={toggleLogout} className={classes.user_button_opened}>
                            {name}
                        </div>
                        <div  onClick={toggleModal} className={classes.logout}>
                            LOGOUT
                        </div>
                    </div>

            }
            {
                showConfirm &&
                <Modal>
                    <ConfirmLogout onConfirm={onConfirm} onCancel={toggleModal}/>
                </Modal>
            }
        </div>
    );
};

export default UserButton;
