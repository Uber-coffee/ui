import React, {useEffect, useState} from "react";
import * as axios from "axios";

import classes from "./seller-page.module.css";

import SellerTable from "./SellerTable/seller-table";
import AddNewSeller from "../NewSeller/new-seller";
import Modal from "../../../../../../Modal/modal";

/*
* Trade point sellers format for front
* [
*     {ID: 123, NAME: "VASYA TISSOV", EMAIL: "VASYA@MAIL.RU", PHONE: "+444555", TIME_REG: "21/12/2020 20:34"},
*     ...
* ]
* */

const SellerPage = ({PointName, closeFunc, TradePointID}) => {
    const [showAddSeller, setShowAddSeller] = useState(false);
    const [sellers, setSellers] = useState([
        {
            NAME: "VASYA TISSOV", EMAIL: "VASYA@MAIL.RU", PHONE: "+444555", TIME_REG: "21/12/2020 20:34",
        },
        {
            NAME: "PYETR TISSOV", EMAIL: "PYETR@GOOGLE.COM", PHONE: "+444567", TIME_REG: "21/12/2020 20:34",
        },
        {
            NAME: "ARTEM TISSOV", EMAIL: "ARTEM@YANDEX.RU", PHONE: "+444765", TIME_REG: "21/12/2020 20:34",
        }
    ]);
    const [realSellers, setRealSellers] = useState([]);

    useEffect(() => {
        const requestUrl = 'http://ecse005008ef.epam.com:8080/api/trade-point/w/user/trade-points/' + TradePointID;
        axios
            .get(requestUrl, {
                headers: {
                    authorization: localStorage.getItem('jwt-Token')
                }
            })
            .then(response => {
                const startArray = [];
                response.data.map(element => {
                    const regDate = new Date(element.registrationDate);
                    const minutes = (regDate.getMinutes() < 10) ? "0" + regDate.getMinutes() : regDate.getMinutes();
                    const regDateStr = regDate.getDate() + '/' + regDate.getMonth() + '/' + regDate.getFullYear() +
                        " " + regDate.getHours() + ':' + minutes;
                    let newElem = {
                        ID: element.id,
                        NAME: element.firstName + " " + element.lastName,
                        EMAIL: element.email,
                        PHONE: element.phoneNumber,
                        TIME_REG: regDateStr
                    }
                    startArray.push(newElem);
                });
                setRealSellers(startArray);
            })
            .catch(error => {
                alert("getting trade point sellers error!");
                console.log(error);
            });
    }, []);

    const toggleShowSeller = () => {
        setShowAddSeller(!showAddSeller);
    };

    const deleteSeller = (elem) => {
        const requestUrl = 'http://ecse005008ef.epam.com:8080/api/trade-point/w/user/trade-points/del/'
                           + TradePointID + '?id=' + elem.ID;
        axios
            .post(requestUrl, {}, {
                headers: {
                    authorization: localStorage.getItem('jwt-Token')
                }
            })
            .then(response => {
                if (response.data !== -1) {
                    let newSellers = [];
                    realSellers.forEach((element) => {
                        if (element.EMAIL !== elem.EMAIL) {
                            newSellers.push(element);
                        }
                    });
                    setRealSellers(newSellers);
                }
            })
            .catch(error => {
                alert("deleting seller from trade point error!");
                console.log(error);
            });
    };

    const addNewSeller = (seller) => {
        const requestUrl = `http://ecse005008ef.epam.com:8080/api/trade-point/w/user/trade-points/`
                           + TradePointID + `/add?idSeller=` + seller.ID
        axios
            .post(requestUrl, {}, {
                headers: {
                    authorization: localStorage.getItem('jwt-Token')
                }
            })
            .then(response => {
                if (response.data !== -1) {
                    const newSellers = [];
                    realSellers.forEach(element => {
                        newSellers.push(element);
                    });
                    newSellers.push(seller);
                    setRealSellers(newSellers);
                }
            })
            .catch(error => {
                alert("adding seller to trade point error!");
                console.log(error);
            });
    };

    return (
        <div className={classes.wrapper}>
            <button className={classes.close_button} onClick={closeFunc}/>
            <div className={classes.title}>{PointName}: SELLERS</div>
            <div className={classes.buttons_area}>
                <button className={classes.add_button} onClick={toggleShowSeller}>+ ADD</button>
            </div>
            <SellerTable sellers={realSellers} deleteRowFunc={deleteSeller}/>
            {
                showAddSeller &&
                    <Modal>
                        <AddNewSeller addNewSeller={addNewSeller} closeFunc={toggleShowSeller}
                                      TradePointID={TradePointID}/>
                    </Modal>
            }
        </div>
    );
};

export default SellerPage;
