import React from "react";
import classes from './AddComponents.module.css';
import {NavLink} from "react-router-dom";
import ComponentsTable from "./ComponentsTable/ComponentsTable";

const AddNewComponent = props => {
    return (
        <div className={classes.back}>
            <div className={classes.wrapper}>
                <div className={classes.table_zone}>
                    <ComponentsTable />
                    <div className={classes.delete_buttons_area}>
                        <button className={classes.delete_row}>-</button>
                    </div>
                </div>
                <div className={classes.buttons_zone}>
                    <button className={classes.add_row}>+</button>
                    <div className={classes.next_area}>
                        <NavLink to="/confirm-recipe">
                            <button className={classes.next_button}>NEXT</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewComponent;