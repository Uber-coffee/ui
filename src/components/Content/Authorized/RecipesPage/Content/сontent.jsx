import React, {useState} from "react";

import classes from './content.module.css';

import SearchPanel from "./SearchPanel/search-panel";
import RecipesTable from "./RecipesTable/recipes-table";

const Content = () => {
    const [dumbRecipes, setDumbRecipes] = useState(
        [
            {
                NAME: "ESPRESSO",
                COMPONENTS: [
                    {
                        NAME: "CUP",
                        QUANTITY: 1,
                        MEASURE: "PIECE"
                    },
                    {
                        NAME: "COFFEE",
                        QUANTITY: 20,
                        MEASURE: "GR"
                    }
                ]
            },
            {
                NAME: "CAPPUCCINO",
                COMPONENTS: [
                    {
                        NAME: "CUP",
                        QUANTITY: 1,
                        MEASURE: "PIECE"
                    },
                    {
                        NAME: "COFFEE",
                        QUANTITY: 20,
                        MEASURE: "GR"
                    },
                    {
                        NAME: "MILK",
                        QUANTITY: 200,
                        MEASURE: "ML"
                    }
                ]
            }
        ]
    );
    return (
        <div className={classes.content}>
            <div className={classes.subtitle}>RECIPES</div>
            <SearchPanel/>
            <RecipesTable recipes={dumbRecipes} />
        </div>
    );
};

export default Content;
