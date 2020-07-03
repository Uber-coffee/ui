import React from 'react';
import './RecipesPage.css';
import Header from "./Header/Header";
import RecipesContent from "./RecipesContent/RecipesContent";
import Footer from "./Footer/Footer";
import {Route} from 'react-router-dom';
import AddNewRecipe from "./AddNewRecipe/AddNewRecipe";
import AddNewComponent from "./AddComponents/AddComponents";
import ConfirmWindow from './ConfirmWindow/ConfirmWindow';

function RecipesPage() {
    return (
        <div className="RecipePageWrapper">
            <Route path="/confirm-recipe" render={() => <ConfirmWindow />} />
            <Route path="/add-new-recipe" render={() => <AddNewRecipe />} />
            <Route path="/add-components" render={() => <AddNewComponent />} />
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
