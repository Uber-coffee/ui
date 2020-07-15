import React, {useState} from "react";

import classes from './recipes-table-main-row.module.css';

const RecipesTableMainRow = ({recipesCount, beverageName, component, deleteRowFunc}) => {
    const [isDeleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const toggleDeleteConfirm = () => {
        setDeleteConfirmOpen(!isDeleteConfirmOpen);
    };
    const onConfirm = () => {
        deleteRowFunc();
        toggleDeleteConfirm();
    };
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