import React, {useEffect, useState} from "react";
import * as axios from 'axios';

import classes from "./content.module.css";

import SearchPanel from "./SearchPanel/search-panel";
import ComponentTable from "./ComponentTable/component-table";
import Modal from "../../../../Modal/modal";
import AddNewComponent from "./AddNewComponent/add-new-component";
import CategoriesModal from "./CategoriesModal/categories-modal";

const Content = () => {
    const [isAddModalOpen, setAddModalOpen] = useState(false);
    const [isCategoryModalOpen, setCategoryModalOpen] = useState(false);
    const [dumbComponents, setDumbComponents] = useState(
        [
            {NAME: "LAVAZZA", MEASURE: "MG", CLASS_NAME: "COFFEE"},
            {NAME: "CUP/0,2", MEASURE: "PIECE", CLASS_NAME: "CUP"},
            {NAME: "MILK", MEASURE: "ML", CLASS_NAME: "MILK"}
        ]
    );
    const [dumbComponentClasses, setDumbComponentClasses] = useState(
        [
            {NAME: "COFFEE", IS_SINGLE: false, IS_REQUIRED: true},
            {NAME: "CUP", IS_SINGLE: true, IS_REQUIRED: true},
            {NAME: "MILK", IS_SINGLE: false, IS_REQUIRED: false}
        ]
    );
    const [realComponents, setRealComponents] = useState([]);
    const [realComponentClasses, setRealComponentClasses] = useState([]);

    useEffect(() => {
        alert(localStorage.getItem('jwt-Token'));
        axios
            .get('http://ecse005008ef.epam.com:8080/api/menu-service/w/components', {
                headers: {
                    authorization: localStorage.getItem('jwt-Token')
                }
            })
            .then(response => {
                const startArray = [];
                response.data.map(element => {
                    let newElem = {
                        ID: element.id,
                        NAME: element.name,
                        MEASURE: element.measure,
                        CLASS_NAME: element.category.name
                    }
                    startArray.push(newElem);
                });
                setRealComponents(startArray);
            })
            .catch(error => {
                alert("getting components error!");
                console.log(error);
            });
    }, []);

    useEffect(() => {
        alert(localStorage.getItem('jwt-Token'));
        axios
            .get('http://ecse005008ef.epam.com:8080/api/menu-service/w/classes', {
                headers: {
                    authorization: localStorage.getItem('jwt-Token')
                }
            })
            .then(response => {
                const startArray = [];
                response.data.map(element => {
                    let newElem = {
                        ID: element.id,
                        NAME: element.name,
                        IS_SINGLE: element.isSingle,
                        IS_REQUIRED: element.isRequired
                    }
                    startArray.push(newElem);
                });
                setRealComponentClasses(startArray);
            })
            .catch(error => {
                alert("getting classes error!");
                console.log(error);
            });
    }, [])

    const toggleAddModal = () => {
        setAddModalOpen(!isAddModalOpen)
    };
    const toggleCategoryModal = () => {
        setCategoryModalOpen(!isCategoryModalOpen);
    }
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
    const deleteComponent = (index) => {
        const newArray = []
        dumbComponents.forEach((element, arr_index) => {
            if (index !== arr_index) {
                newArray.push(element);
            }
        });
        setDumbComponents(newArray);
    }
    const deleteComponentClass = (index) => {
        const newClassesArray = []
        dumbComponents.forEach((element, arr_index) => {
            if (index !== arr_index) {
                newClassesArray.push(element);
            }
        });
        setDumbComponentClasses(newClassesArray);
    }
    return (
        <div className={classes.content}>
            <div className={classes.subtitle}>COMPONENTS</div>
            <div className={classes.buttons_area}>
                <button className={classes.add_button} onClick={toggleAddModal}>+ ADD</button>
                <button className={classes.category_button} onClick={toggleCategoryModal}>
                    CATEGORIES
                </button>
            </div>
            <SearchPanel/>
            {
                isAddModalOpen &&
                    <Modal>
                        <AddNewComponent closeFunc={toggleAddModal} addNewComponent={addNewComponent}
                                         classesList={createClassesList()} />
                    </Modal>
            }
            {
                isCategoryModalOpen &&
                    <Modal>
                        <CategoriesModal closeFunc={toggleCategoryModal} deleteFunc={deleteComponentClass}
                            addNewComponentClass={addNewComponentClass} componentClassesData={realComponentClasses} />
                    </Modal>
            }
            <ComponentTable components={realComponents} deleteFunc={deleteComponent}/>
        </div>
    );
}

export default Content;
