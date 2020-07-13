import React, {useState} from "react";

import classes from './content.module.css';

import SearchPanel from "./SearchPanel/search-panel";
import RecipesTable from "./RecipesTable/recipes-table";
import Modal from "../../../../Modal/modal";
import AddNewRecipe from "./AddNewRecipe/add-new-recipe";

const Content = () => {
    const [isAddModalOpen, setAddModalOpen] = useState(false);
    const [dumbRecipes] = useState(
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
    const toggleAddModal = () => {
        setAddModalOpen(!isAddModalOpen)
    };
    const addNewRecipe = (newRecipe) => {
    };
    return (
        <div className={classes.content}>
            <div className={classes.subtitle}>RECIPES</div>
            <div className={classes.buttons_area}>
                <button className={classes.add_button} onClick={toggleAddModal}>+ ADD</button>
            </div>
            <SearchPanel/>
            {
                isAddModalOpen &&
                    <Modal>
                        <AddNewRecipe closeFunc={toggleAddModal} addNewRecipe={addNewRecipe} />
                    </Modal>
            }
            <RecipesTable recipes={dumbRecipes}/>
        </div>
    );
};

export default Content;
