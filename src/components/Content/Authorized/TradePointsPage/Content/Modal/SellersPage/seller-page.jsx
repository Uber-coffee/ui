import React, {useState} from "react";
import classes from "./seller-page.module.css";
import SellerTable from "./SellerTable/seller-table";
import AddNewSeller from "../NewSeller/new-seller";
import Modal from "../../../../../../Modal/modal";

const SellerPage = ({PointName, closeFunc}) => {
    const [showAddSeller, setShowAddSeller] = useState(false);
    const [sellers, setSellers] = useState([
        {
            NAME: "VASYA TISSOV",
            EMAIL: "VASYA@MAIL.RU",
            PHONE: "+444555",
            TIME_REG: "21/12/2020 20:34",
        },
        {
            NAME: "PYETR TISSOV",
            EMAIL: "PYETR@GOOGLE.COM",
            PHONE: "+444567",
            TIME_REG: "21/12/2020 20:34",
        },
        {
            NAME: "ARTEM TISSOV",
            EMAIL: "ARTEM@YANDEX.RU",
            PHONE: "+444765",
            TIME_REG: "21/12/2020 20:34",
        }
    ]);
    const toggleShowSeller = () => {
            setShowAddSeller(!showAddSeller);
    };


    const deleteSeller = (elem) => {
        console.log(elem);
        let newSelles = [];
        sellers.forEach((element, arr_index) => {
            if (element.EMAIL !== elem.EMAIL) {
                newSelles.push(element);
            }
        });
        setSellers(newSelles);
    };

    const addNewSeller = (seller) => {
        sellers.push(seller
        )
        setSellers(sellers);
    };


    return (
        <div className={classes.wrapper}>
            <button className={classes.close_button} onClick={closeFunc}/>
            <div className={classes.title}>{PointName}: SELLERS</div>
            <div className={classes.buttons_area}>
                <button className={classes.add_button} onClick={toggleShowSeller}>+ ADD</button>
            </div>
            <SellerTable sellers={sellers} deleteRowFunc={deleteSeller}/>
            {
                showAddSeller &&
                    <Modal>
                        <AddNewSeller addNewSeller={addNewSeller} closeFunc={toggleShowSeller}/>
                    </Modal>
            }
        </div>
    );
};

export default SellerPage;
