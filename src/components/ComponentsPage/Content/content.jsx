 
import React, {useState} from "react";

import classes from "./content.module.css";

import SearchPanel from "./SearchPanel/search-panel";
import ComponentTable from "./ComponentTable/component-table";
import Modal from "./Modal/modal";
import AddNewComponent from "./AddNewComponent/add-new-component";

const Content = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [dumbComponents] = useState(
        [
            {
                NAME: "LAVAZZA",
                MEASURE: "MG",
                CLASS_NAME: "COFFEE"
            },
            {
                NAME: "CUP/0,2",
                MEASURE: "PIECE",
                CLASS_NAME: "CUP"
            },
            {
                NAME: "MILK",
                MEASURE: "ML",
                CLASS_NAME: "MILK"
            }
        ]
    );
    const [dumbComponentClasses] = useState(
        [
            {
                NAME: "COFFEE",
                IS_SINGLE: false,
                IS_REQUIRED: true
            },
            {
                NAME: "CUP",
                IS_SINGLE: true,
                IS_REQUIRED: true
            },
            {
                NAME: "MILK",
                IS_SINGLE: false,
                IS_REQUIRED: false
            }
        ]
    );
    const toggleModal = () => {
        setModalOpen(!isModalOpen)
    };
    const createClassesList = () => {
        let list = [];
        dumbComponentClasses.forEach(element => {
            list.push(element.NAME);
        });
        return list;
    }
    const addNewComponent = (newComponent) => {
        let component = {
            NAME: newComponent.NAME,
            MEASURE: newComponent.MEASURE,
            CLASS_NAME: newComponent.CLASS_NAME
        };
        dumbComponents.push(component);
    };
    const addNewComponentClass = (newComponentClass) => {
        let componentClass = {
            NAME: newComponentClass.NAME,
            IS_SINGLE: newComponentClass.IS_SINGLE,
            IS_REQUIRED: newComponentClass.IS_REQUIRED
        };
        dumbComponentClasses.push(componentClass);
    }
    return (
        <div className={classes.content}>
            <div className={classes.subtitle}>COMPONENTS</div>
            <div className={classes.buttons_area}>
                <button className={classes.add_button} onClick={toggleModal}>+ ADD</button>
                <button className={classes.category_button}>CATEGORIES</button>
            </div>
            <SearchPanel/>
            {
                isModalOpen &&
                    <Modal>
                        <AddNewComponent closeFunc={toggleModal} addNewComponent={addNewComponent} 
                                         classesList={createClassesList()} />
                    </Modal>
            }
            <ComponentTable components={dumbComponents} />
        </div>
    );
}

export default Content;