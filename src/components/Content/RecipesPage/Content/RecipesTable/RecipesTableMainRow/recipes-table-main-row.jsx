import React from "react";
import classes from './recipes-table-main-row.module.css';

const RecipesTableMainRow = ({recipesCount, beverageName, component}) => {
    return (
        <tr>
            <td rowSpan={recipesCount} className={classes.beverage_element}>{beverageName}</td>
            <td className={classes.row_element}>{component.NAME}</td>
            <td className={classes.row_element}>{component.QUANTITY}</td>
            <td className={classes.row_element}>{component.MEASURE}</td>
        </tr>
    );
}

export default RecipesTableMainRow;