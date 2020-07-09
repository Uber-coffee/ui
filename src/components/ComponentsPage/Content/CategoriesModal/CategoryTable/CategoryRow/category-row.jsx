import React from "react";

import classes from "./category-row.module.css";

const CategoryRow = ({category}) => {
    return (
        <tr>
            <td className={classes.row_element}>
                {category.NAME}
            </td>
            <td className={classes.row_element}>
                {(category.IS_SINGLE) ? "YES" : "NO"}
            </td>
            <td className={classes.row_element}>
                {(category.IS_REQUIRED) ? "YES" : "NO"}
            </td>
        </tr>
    );
};

export default CategoryRow;