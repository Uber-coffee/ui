import React from "react";

import classes from "./component-row.module.css";

const ComponentRow = ({component}) => {
    return (
        <tr>
            <td className={classes.row_element}>
                {component.NAME}
            </td>
            <td className={classes.row_element}>
                {component.MEASURE}
            </td>
            <td className={classes.row_element}>
                {component.CLASS_NAME}
            </td>
        </tr>
    );
};

export default ComponentRow;