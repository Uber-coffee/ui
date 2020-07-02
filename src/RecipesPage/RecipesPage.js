import React from 'react';
import './RecipesPage.css';
import Header from "./Header/Header";
import RecipesContent from "./RecipesContent/RecipesContent";
import Footer from "./Footer/Footer";
import {Route} from 'react-router-dom';
import AddNewRecipe from "./AddNewRecipe/AddNewRecipe";
import AddNewComponent from "./AddNewComponent/AddNewComponent";

function RecipesPage() {
    return (
        <div className="RecipePageWrapper">
            <Route path="/add-new-recipe" render={() => <AddNewRecipe />} />
            <Route path="/add-new-component" render={() => <AddNewComponent />} />
            <div className="Header">
                <Header/>
            </div>
            <div className="Conten">
                <RecipesContent/>
            </div>
            <div className="Footer">
                <Footer/>
            </div>
        </div>
    );
}

export default RecipesPage;
