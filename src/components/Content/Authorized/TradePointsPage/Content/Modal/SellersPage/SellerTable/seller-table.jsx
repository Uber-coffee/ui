import React from "react";
import classes from "./seller-table.module.css";
import SellerRow from "./SellerRow/seller-row";

const SellerTable = ({sellers, deleteRowFunc}) => {
    console.log(sellers);
    return (
        <div className={classes.table_wrapper}>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th className={[classes.table_header, classes.name_col].join(" ")}>
                            NAME
                        </th>
                        <th className={[classes.table_header, classes.email_col].join(" ")}>
                            EMAIL
                        </th>
                        <th className={[classes.table_header, classes.reg_time_col].join(" ")}>
                            REGISTRATION TIME
                        </th>
                        <th className={[classes.table_header, classes.phone_col].join(" ")}>
                            PHONE NUMBER
                        </th>
                    </tr>
                </thead>
                {
                    sellers.map((elem, id) => <SellerRow key={id} seller={elem} deleteRowFunc={()=>deleteRowFunc(elem)}/>)
                }
            </table>
        </div>
    );
};

export default SellerTable;
