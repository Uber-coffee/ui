import React from "react";
import classes from './recipes-table-secondary-row.module.css';

const RecipesTableSecondaryRow = ({component}) => {
    return (
        <tr>
            <td className={classes.row_element}>{component.NAME}</td>
            <td className={classes.row_element}>{component.QUANTITY}</td>
            <td className={classes.row_element}>{component.MEASURE}</td>
        </tr>
    );
};

export default RecipesTableSecondaryRow;