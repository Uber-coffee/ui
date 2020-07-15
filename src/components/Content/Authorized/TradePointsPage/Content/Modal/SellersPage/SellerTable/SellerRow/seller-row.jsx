import React, {useState} from "react";

import classes from "./seller-row.module.css";
import Modal from "../../../../../../../../Modal/modal";
import ConfirmDeletionSeller from "../../../../Confirm/DeleteSeller/confirm-delete-seller";

const SellerRow = ({seller, deleteRowFunc}) => {
    const [isDeleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const [isSellerPage, setSellerPage] = useState(false);

    const toggleDeleteConfirm = () => {
        setDeleteConfirmOpen(!isDeleteConfirmOpen);
    };

    const toggleSellerPage = () => {
        setSellerPage(!isSellerPage);
    }

    const onconfirm = () => {
        deleteRowFunc();
        toggleDeleteConfirm();
    };

    const oncancel = () => {
        toggleDeleteConfirm();
    };

    return (
        <tr>
            <td className={[classes.row_element, classes.name_col].join(" ")} onClick={toggleSellerPage}>
                {seller.NAME}
            </td>
            <td className={[classes.row_element, classes.email_col].join(" ")} onClick={toggleSellerPage}>
                {seller.EMAIL}
            </td>
            <td className={[classes.row_element, classes.reg_time_col].join(" ")} onClick={toggleSellerPage}>
                {seller.TIME_REG}
            </td>
            <td className={[classes.row_element, classes.phone_col].join(" ")} onClick={toggleSellerPage}>
                {seller.PHONE}
            </td>
            <td className={[classes.row_element, classes.delete_row].join(" ")} onClick={toggleDeleteConfirm}>
            </td>
            {
                isDeleteConfirmOpen &&
                <Modal>
                    <ConfirmDeletionSeller onConfirm={onconfirm} onCancel={oncancel}/>
                </Modal>
            }
        </tr>
    );
};

export default SellerRow;
