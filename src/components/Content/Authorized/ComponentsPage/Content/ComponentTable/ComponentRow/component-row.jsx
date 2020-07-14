import React, {useState} from "react";

import classes from "./component-row.module.css";

import ConfirmDeletion from "../../ConfirmDeletion/confirm-deletion";
import Modal from "../../../../../../Modal/modal";

const ComponentRow = ({component, deleteRowFunc}) => {
    const [isDeleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const toggleDeleteConfirm = () => {
        setDeleteConfirmOpen(!isDeleteConfirmOpen);
    };
    const onConfirm = () => {
        deleteRowFunc();
        toggleDeleteConfirm();
    };
    return (
        <tr>
            <td className={classes.row_element}>
                {component.NAME}
            </td>
            <td className={classes.row_element}>
                {component.MEASURE}
            </td>
            <td className={classes.row_element}>
                {component.CLASS_NAME}
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

export default ComponentRow;