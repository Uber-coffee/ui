import React from "react";
import classes from './RecipesTableMainRow.module.css';

const RecipesTableMainRow = props => {
    return (
        <tr>
            <td rowSpan={props.recipesCount} className={classes.beverage_element}>{props.beverageName}</td>
            <td className={classes.row_element}>{props.component}</td>
            <td className={classes.row_element}>{props.quantity}</td>
            <td className={classes.row_element}>{props.measure}</td>
        </tr>
    );
}

export default RecipesTableMainRow;