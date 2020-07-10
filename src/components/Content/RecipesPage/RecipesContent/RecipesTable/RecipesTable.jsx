import React from "react";
import classes from './RecipesTable.module.css';
import RecipesTableMainRow from "./RecipesTableMainRow/RecipesTableMainRow";
import RecipesTableSecondaryRow from "./RecipesTableSecondaryRow/RecipesTableSecondaryRow";

const RecipesTable = props => {
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
                    <RecipesTableMainRow recipesCount={2} beverageName={"ESPRESSO"}
                                         component={"CUP"} quantity={1} measure={"PIECE"} />
                    <RecipesTableSecondaryRow component={"COFFEE"} quantity={20} measure={"GR"} />
                    <RecipesTableMainRow recipesCount={3} beverageName={"CAPPUCINO"}
                                         component={"CUP"} quantity={1} measure={"PIECE"} />
                    <RecipesTableSecondaryRow component={"COFFEE"} quantity={20} measure={"GR"} />
                    <RecipesTableSecondaryRow component={"MILK"} quantity={200} measure={"ML"} />
                </tbody>
            </table>
        </div>
    );
};

export default RecipesTable;