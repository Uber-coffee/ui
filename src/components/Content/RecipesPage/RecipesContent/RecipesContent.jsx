import React, {useState} from 'react';
import classes from './RecipesContent.module.css';
import SearchPanel from "./SearchPanel/SearchPanel";
import RecipesTable from "./RecipesTable/RecipesTable";
import Modal from "../../../Modal/modal";
import AddNewRecipe from "../AddNewRecipe/AddNewRecipe";
import AddNewComponent from "../AddComponents/AddComponents";
import ConfirmWindow from "../ConfirmWindow/ConfirmWindow";

const RecipesContent = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [dialogStage, setDialogStage] =useState(0)

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    const dialogStageIncr = () => {
        console.log(dialogStage)
        let newState = dialogStage + 1;
        if (newState > 2){
            setDialogStage(0);
            setModalOpen(false);
        }
        else{
            setDialogStage(newState);
        }
    }

    return (
        <div className={classes.content}>
            <div className={classes.subtitle}>RECIPES</div>
            <div className={classes.buttons_area}>
                <button className={classes.add_button} onClick={toggleModal}>+ ADD</button>
            </div>
            <SearchPanel/>
            {
                isModalOpen &&
                <Modal>
                    {
                        dialogStage === 0 ?
                            <AddNewRecipe closeFunc={toggleModal} nextFunc={dialogStageIncr}/> :
                            dialogStage === 1 ?
                                <AddNewComponent nextFunc={dialogStageIncr}/>:
                                dialogStage === 2 &&
                                    <ConfirmWindow closeFunc={dialogStageIncr}/>
                    }
                </Modal>
            }
            <RecipesTable/>
        </div>
    );
};

export default RecipesContent;
