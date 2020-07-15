import React, {useState} from "react";

import classes from "./trade-points-row.module.css";
import Modal from "../../../../../../Modal/modal";
import ConfirmDeletion from "../../Confirm/DeleteTradePoint/confirm-delete-trade-point";
import SellerPage from "../../Modal/SellersPage/seller-page";

const TradePointRow = ({point, deleteRowFunc}) => {

    const [isDeleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const [isSellerPage, setSellerPage] = useState(0);

    const toggleDeleteConfirm = () => {
        setDeleteConfirmOpen(!isDeleteConfirmOpen);
    };

    const toggleSellerPage = (id) => {
        setSellerPage(parseInt(id));
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
            <td className={[classes.row_element, classes.id_col].join(" ")} onClick={()=>toggleSellerPage(point.ID)}>
                {point.NAME}
            </td>
            <td className={[classes.row_element, classes.address_col].join(" ")} onClick={()=>toggleSellerPage(point.ID)}>
                {point.ADDRESS}
            </td>
            <td className={[classes.row_element, classes.longitude_col].join(" ")} onClick={()=>toggleSellerPage(point.ID)}>
                {point.LONGITUDE}
            </td>
            <td className={[classes.row_element, classes.latitude_col].join(" ")} onClick={()=>toggleSellerPage(point.ID)}>
                {point.LATITUDE}
            </td>
            <td className={[classes.row_element, classes.delete_row].join(" ")} onClick={toggleDeleteConfirm}>
            </td>
            {
                isDeleteConfirmOpen &&
                <Modal>
                    <ConfirmDeletion onConfirm={onconfirm} onCancel={oncancel}/>
                </Modal>
            }
            {
                !(isSellerPage === 0) &&
                    <Modal>
                        <SellerPage
                            closeFunc={()=>toggleSellerPage(0)}
                            PointName={point.NAME}
                        />
                    </Modal>
            }
        </tr>
    );
};

export default TradePointRow;
