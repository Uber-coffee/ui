import React from "react";

import classes from "./component-table.module.css";

import ComponentRow from "./ComponentRow/component-row";

const ComponentTable = ({components, deleteFunc}) =>{
    return (
        <div className={classes.table_wrapper}>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th className={classes.table_header}>NAME</th>
                        <th className={classes.table_header}>UNITS</th>
                        <th className={classes.table_header}>CATEGORY</th>
                        <th className={classes.invisible}> </th>
                    </tr>
                </thead>
                { components.map((component, id) => <ComponentRow key={id} component={component}
                                                                  deleteRowFunc={() => {deleteFunc(id, component.ID)}}/>) }
            </table>
        </div>
    );
};

export default ComponentTable;
