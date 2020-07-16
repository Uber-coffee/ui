import React, {useEffect, useState} from "react";

import classes from "./content.module.css";

import SearchPanel from "./SearchPanel/search-panel";
import TradePointsTable from "./TradePointsTable/trade-points-table";
import NewTradePoint from "./Modal/NewTradePoint/new-trade-point";
import Modal from "../../../../Modal/modal";
import * as axios from "axios";

/*
* Trade points format for front:
* [
*     {ID: "1", NAME: "UBER-COFFEE 1", ADDRESS: "TISOVAYA 2", LONGITUDE: "13.5", LATITUDE: "13.0"},
*     ...
* ]
* */

const Content = () => {
    const [dumbPoints, setDumbPoints] = useState([
        {
            ID: "1", NAME: "UBER-COFFEE 1", ADDRESS: "TISOVAYA 2", LONGITUDE: "13.5", LATITUDE: "13.0"
        },
        {
            ID: "2", NAME: "UBER-COFFEE 2", ADDRESS: "COFFEINAYA 3 ", LONGITUDE: "60.0", LATITUDE: "30.0"
        },
        {
            ID: "3", NAME: "UBER-COFFEE 3", ADDRESS: "ISPYTATELEY 39а", LONGITUDE: "59.0", LATITUDE: "31.0"
        },
    ]);
    const [realPoints, setRealPoints] = useState([]);

    //getting trade points
    useEffect(() => {
        axios
            .get('ecse005008ef.epam.com:8080/api/trade-point/w/user/trade-points', {
                headers: {
                    authorization: localStorage.getItem('jwt-Token')
                }
            })
            .then(response => {
                const startArray = [];
                response.data.map(element => {
                    let newElem = {
                        ID: element.id,
                        NAME: element.name,
                        ADDRESS: element.address,
                        LONGITUDE: element.longitude,
                        LATITUDE: element.latitude
                    }
                    startArray.push(newElem);
                });
                setRealPoints(startArray);
                console.log(realPoints);
            })
            .catch(error => {
                alert("getting trade points error!");
                console.log(error);
            });
    }, []);

    const deleteTradePoints = (index) => {
        const newPoints = [];
        dumbPoints.forEach((element, arr_index) => {
            if (element.ID !== index) {
                newPoints.push(element);
            }
        });
        setDumbPoints(newPoints);
    };

    const addTradePoints = (tradePoint) => {
        if (tradePoint['ADDRESS'].replace(/\s+/g, '') === "" ||
            isNaN(parseFloat(tradePoint['LATITUDE'])) ||
            isNaN(parseFloat(tradePoint['LONGITUDE']))
        ){
            return;
        }
        else{
            dumbPoints.push({
                ID: (dumbPoints.length+1).toString(),
                NAME: tradePoint["NAME"],
                ADDRESS: tradePoint["ADDRESS"],
                LONGITUDE: tradePoint["LONGITUDE"],
                LATITUDE: tradePoint["LATITUDE"],
            });
        }
        setDumbPoints(dumbPoints);
    };

    const [showNewTradePointModal, setShowNewTradePointModal] = useState(false);

    const toggleAddTradePoint = () => {
        setShowNewTradePointModal(!showNewTradePointModal);
    };

    return (
        <div className={classes.content}>
            <div className={classes.subtitle}>TRADE POINTS</div>
            <div className={classes.buttons_area}>
                <button className={classes.add_button} onClick={toggleAddTradePoint}>+ ADD</button>
            </div>
            <SearchPanel/>
            <TradePointsTable tradePoints={dumbPoints} deleteRowFunc={deleteTradePoints}/>
            {
                showNewTradePointModal &&
                <Modal>
                    <NewTradePoint addFunc={addTradePoints} closeFunc={toggleAddTradePoint}/>
                </Modal>
            }
        </div>
    );
}

export default Content;
