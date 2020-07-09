import React from "react";
import classes from './RecipesTableSecondaryRow.module.css';

const RecipesTableSecondaryRow = props => {
    return (
        <tr>
            <td className={classes.row_element}>{props.component}</td>
            <td className={classes.row_element}>{props.quantity}</td>
            <td className={classes.row_element}>{props.measure}</td>
        </tr>
    );
};

export default RecipesTableSecondaryRow;