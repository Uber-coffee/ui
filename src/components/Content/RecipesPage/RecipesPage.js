import React from 'react';
import './RecipesPage.css';
import RecipesContent from "./RecipesContent/RecipesContent";

function RecipesPage() {
    return (
        <div className="RecipePageWrapper">
            <div className="Conten">
                <RecipesContent/>
            </div>
        </div>
    );
}

export default RecipesPage;
