import React, {useEffect, useState} from "react";

import classes from './content.module.css';

import SearchPanel from "./SearchPanel/search-panel";
import RecipesTable from "./RecipesTable/recipes-table";
import * as axios from "axios";

const Content = () => {
    const [realRecipes, setRealRecipes] = useState([]);

    //getting beverages & components from data base to create recipes table
    useEffect(() => {
        axios
            .get('http://ecse005008ef.epam.com:8080/api/menu-service/w/beverages', {
                headers: {
                    authorization: localStorage.getItem('jwt-Token')
                }
            })
            .then(beverageResponse => {
                console.log(beverageResponse);
                createRecipesData(beverageResponse);
            })
            .catch(error => {
                alert("getting beverages error!");
                console.log(error);
            });
    }, []);

    const createRecipesData = (beverageResponse) => {
        const recipesArray = [];
        beverageResponse.data.map(element => {
            let newElem = {
                NAME: element.beverageName,
                COMPONENTS: element.recipe.map(component => {
                    return {
                        // NAME: component.component.name,
                        // MEASURE: component.component.measure,
                        // QUANTITY: component.quantity
                        NAME: "",
                        MEASURE: "",
                        QUANTITY: ""
                    };
                })
            };
            recipesArray.push(newElem);
        });
        setRealRecipes(recipesArray);
    };

    return (
        <div className={classes.content}>
            <div className={classes.subtitle}>RECIPES</div>
            <SearchPanel/>
            <RecipesTable recipes={realRecipes}/>
        </div>
    );
};

export default Content;
