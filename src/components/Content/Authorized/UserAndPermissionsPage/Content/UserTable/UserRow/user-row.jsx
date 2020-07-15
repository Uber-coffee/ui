import React, {useState} from "react";

import classes from "./user-row.module.css";

import Modal from "../../../../../../Modal/modal";
import ConfirmDeletion from "../../ConfirmDeletion/confirm-deletion";

const UserRow = ({user, setPosition, deleteRowFunc}) => {
    const [displayMenu, setDisplayMenu] = useState(false);

    const [isDeleteConfirmOpen, setDeleteConfirmOpen] = useState(false);

    const RoleOptions = [
        "ADMIN",
        "SELLER",
        "MANAGER"
    ];

    const toggleDropdown = () => {
        setDisplayMenu(!displayMenu);
    };

    const toggleDeleteConfirm = () => {
        setDeleteConfirmOpen(!isDeleteConfirmOpen);
    };

    const selectPosition = (el) => {
        setDisplayMenu(!displayMenu);

        setPosition(el);
    }

    const createElem = (el, id) => {
        return user.POSITION !== el &&
            <div className={classes.elem} key={id} onClick={() => selectPosition(el)}>{el}</div>;
    };

    const onConfirm = () => {
        deleteRowFunc();
        toggleDeleteConfirm();
    };

    return (
        <tr>
            <td className={classes.row_element}>
                {user.NAME}
            </td>
            <td className={classes.row_element}>
                {user.EMAIL}
            </td>
            <td className={classes.row_element}>
                {user.PHONE}
            </td>
            <td className={classes.row_element}>
                {user.TIME_REG}
            </td>
            <td className={[classes.row_element, classes.position_col].join(" ")}>
                <div className={classes.dropdown}>
                    <div
                        className={displayMenu ? classes.buttonOpened : classes.buttonClosed}
                        onClick={() => toggleDropdown(this)}
                    >
                        {user.POSITION}
                    </div>
                    {
                        displayMenu &&
                        <div className={classes.listWrapper}>
                            {RoleOptions.map((el, id) => createElem(el, id))}
                        </div>
                    }
                </div>
            </td>
            <td className={classes.delete_row} onClick={toggleDeleteConfirm}>
                {
                    isDeleteConfirmOpen &&
                    <Modal>
                        <ConfirmDeletion onConfirm={onConfirm} onCancel={toggleDeleteConfirm}/>
                    </Modal>
                }
            </td>
        </tr>
    );
};

export default UserRow;
