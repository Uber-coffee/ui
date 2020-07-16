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
            .then(beverageResponse => {
                axios
                    .get('http://ecse005008ef.epam.com:8080/api/menu-service/w/components', {
                        headers: {
                            authorization: localStorage.getItem('jwt-Token')
                        }
                    })
                    .then(componentsResponse => {
                        createRecipesData(beverageResponse, componentsResponse);
                    })
                    .catch(error => {
                        alert("getting components error!");
                        console.log(error);
                    });
            })
            .catch(error => {
                alert("getting beverages error!");
                console.log(error);
            });
    }, []);

    const createRecipesData = (beverageResponse, componentsResponse) => {
        const recipesArray = []
        beverageResponse.data.map(element => {
            let newElem = {
                NAME: element.name,
                COMPONENTS: []
            };
            element.recipe.map(recipeEl => {
                componentsResponse.data.map(compEl => {
                    if (recipeEl.componentId === compEl.id) {
                        let newCompEl = {
                            NAME: compEl.name,
                            QUANTITY: recipeEl.quantity,
                            MEASURE: compEl.measure
                        };
                        newElem.COMPONENTS.push(newCompEl);
                    }
                });
            });
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
