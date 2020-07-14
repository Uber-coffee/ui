import React, {useState} from "react";

import classes from "./category-row.module.css";
import Modal from "../../../../../../../Modal/modal";
import ConfirmDeletion from "../../ConfirmDeletion/confirm-deletion";

const CategoryRow = ({category, deleteRowFunc}) => {
    const [isDeleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const toggleDeleteConfirm = () => {
        setDeleteConfirmOpen(!isDeleteConfirmOpen);
    }
    const onConfirm = () => {
        deleteRowFunc();
        toggleDeleteConfirm();
    }
    return (
        <tr>
            <td className={classes.row_element}>
                {category.NAME}
            </td>
            <td className={classes.row_element}>
                {(category.IS_SINGLE) ? "YES" : "NO"}
            </td>
            <td className={classes.row_element}>
                {(category.IS_REQUIRED) ? "YES" : "NO"}
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

export default CategoryRow;