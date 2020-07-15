import React from "react";

import classes from "./trade-points-table.module.css";

import TradePointRow from "./TradePointsRow/trade-points-row";

const TradePointsTable = ({tradePoints, deleteRowFunc}) =>{

    return (
        <div className={classes.table_wrapper}>
            <table className={classes.table}>
                <thead>
                <tr>
                    <th className={[classes.table_header, classes.id_col].join(" ")}>
                        NAME
                    </th>
                    <th className={[classes.table_header, classes.address_col].join(" ")}>
                        ADDRESS
                    </th>
                    <th className={[classes.table_header, classes.longitude_col].join(" ")}>
                        LONGITUDE
                    </th>
                    <th className={[classes.table_header, classes.latitude_col].join(" ")}>
                        LATITUDE
                    </th>
                </tr>
                </thead>
                {
                    tradePoints.map((point, id) =>
                        <TradePointRow key={id} point={point} deleteRowFunc={() => deleteRowFunc(point.ID)}/>)
                }
            </table>
        </div>
    );
};

export default TradePointsTable;
