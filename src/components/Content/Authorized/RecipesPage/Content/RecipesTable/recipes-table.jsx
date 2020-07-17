import React from "react";

import classes from './recipes-tabel.module.css';

import RecipesTableMainRow from "./RecipesTableMainRow/recipes-table-main-row";
import RecipesTableSecondaryRow from "./RecipesTableSecondaryRow/recipes-table-secondary-row";

const RecipesTable = ({recipes}) => {
    const createTableBody = () => {
        const elements = [];
        for (let i = 0; i < recipes.length; i++) {
            elements.push(<RecipesTableMainRow
                key={i * 100}
                id={recipes[i].ID}
                recipesCount={recipes[i].COMPONENTS.length}
                beverageName={recipes[i].NAME}
                component={recipes[i].COMPONENTS[0]} />);
            for (let j = 1; j < recipes[i].COMPONENTS.length; j++) {
                elements.push(<RecipesTableSecondaryRow key={i * 100 + j} component={recipes[i].COMPONENTS[j]}/>);
            }
        }
        return elements
    };
    return (
        <div className={classes.table_container}>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th className={classes.table_header}>BEVERAGE NAME</th>
                        <th className={classes.table_header}>COMPONENT NAME</th>
                        <th className={classes.table_header}>QUANTITY</th>
                        <th className={classes.table_header}>MEASURE</th>
                    </tr>
                </thead>
                <tbody>
                {
                    createTableBody()
                }
                </tbody>
            </table>
        </div>
    );
};

export default RecipesTable;
