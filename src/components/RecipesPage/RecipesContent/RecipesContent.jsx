import React from 'react';
import classes from './RecipesContent.module.css';
import SearchPanel from "./SearchPanel/SearchPanel";
import RecipesTable from "./RecipesTable/RecipesTable";
import {NavLink} from "react-router-dom";

const RecipesContent = props => {
    return (
        <div className={classes.content}>
            <div className={classes.subtitle}>RECIPES</div>
            <div className={classes.buttons_area}>
                <NavLink to="/add-new-recipe">
                    <button className={classes.add_button}>+ ADD</button>
                </NavLink>
            </div>
            <SearchPanel/>
            <RecipesTable/>
        </div>
    );
};

export default RecipesContent;