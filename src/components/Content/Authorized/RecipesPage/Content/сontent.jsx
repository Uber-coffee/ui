import React, {useEffect, useState} from "react";

import classes from './content.module.css';

import SearchPanel from "./SearchPanel/search-panel";
import RecipesTable from "./RecipesTable/recipes-table";
import * as axios from "axios";

const Content = () => {
    const [dumbRecipes] = useState(
        [
            {
                NAME: "ESPRESSO", COMPONENTS: [
                    {NAME: "CUP", QUANTITY: 1, MEASURE: "PIECE"},
                    {NAME: "COFFEE", QUANTITY: 20, MEASURE: "GR"}
                ]
            },
            {
                NAME: "CAPPUCCINO", COMPONENTS: [
                    {NAME: "CUP", QUANTITY: 1, MEASURE: "PIECE"},
                    {NAME: "COFFEE", QUANTITY: 20, MEASURE: "GR"},
                    {NAME: "MILK", QUANTITY: 200, MEASURE: "ML"}
                ]
            }
        ]
    );
    const [realRecipes, setRealRecipes] = useState([]);

    //getting beverages & components from data base to create recipes table
    useEffect(() => {
        axios
            .get('http://ecse005008ef.epam.com:8080/api/menu-service/w/beverages', {
                headers: {
                    authorization: localStorage.getItem('jwt-Token')
                }
            })
            .then(response => {
                const recipesArray = []
                console.log(response);
                setRealRecipes(recipesArray);
            })
            .catch(error => {
                alert("getting classes error!");
                console.log(error);
            });
    }, []);

    return (
        <div className={classes.content}>
            <div className={classes.subtitle}>RECIPES</div>
            <SearchPanel/>
            <RecipesTable recipes={dumbRecipes}/>
        </div>
    );
};

export default Content;
