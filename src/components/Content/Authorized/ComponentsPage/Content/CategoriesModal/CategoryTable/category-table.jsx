import React from "react";

import classes from "./category-table.module.css";

import CategoryRow from "./CategoryRow/category-row";

const CategoryTable = ({categories, deleteFunc}) =>{
    return (
        <div className={classes.table_wrapper}>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th className={classes.table_header}>NAME</th>
                        <th className={classes.table_header}>IS SINGLE</th>
                        <th className={classes.table_header}>IS REQUIRED</th>
                        <th className={classes.invisible}> </th>
                    </tr>
                </thead>
                { categories.map((category, id) => <CategoryRow key={id} category={category}
                                                                deleteRowFunc={() => {deleteFunc(category.ID)}}/>) }
            </table>
        </div>
    );
};

export default CategoryTable;