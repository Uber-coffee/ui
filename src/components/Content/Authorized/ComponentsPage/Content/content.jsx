import React, {useEffect, useState} from "react";
import * as axios from 'axios';

import classes from "./content.module.css";

import SearchPanel from "./SearchPanel/search-panel";
import ComponentTable from "./ComponentTable/component-table";
import Modal from "../../../../Modal/modal";
import AddNewComponent from "./AddNewComponent/add-new-component";
import CategoriesModal from "./CategoriesModal/categories-modal";

/*
* Components format for front:
* [
*     {ID: 123, NAME: "LAVAZZA", MEASURE: "MG", CLASS_NAME: "COFFEE"},
*     ...
* ]
*
* Categories (component classes) format for front:
* [
*     {ID: 123, NAME: "COFFEE", IS_SINGLE: false, IS_REQUIRED: true},
*     ...
* ]
* */

const Content = () => {
    const [isAddModalOpen, setAddModalOpen] = useState(false);
    const [isCategoryModalOpen, setCategoryModalOpen] = useState(false);
    const [realComponents, setRealComponents] = useState([]);
    const [realComponentClasses, setRealComponentClasses] = useState([]);

    //getting components from data base
    useEffect(() => {
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

    //getting categories from data base
    useEffect(() => {
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
    }, []);

    const toggleAddModal = () => {
        setAddModalOpen(!isAddModalOpen)
    };
    const toggleCategoryModal = () => {
        setCategoryModalOpen(!isCategoryModalOpen);
    }
    const createNamesList = (list) => {
        let namesList = [];
        realComponentClasses.forEach(element => {
            namesList.push({
                NAME: element.NAME,
                ID: element.ID
            });
        });
        return namesList;
    }

    //addition functionality
    const addNewComponent = (newComponent) => {
        let newComp = {
            name: newComponent.NAME,
            measure: newComponent.MEASURE,
            categoryId: newComponent.CLASS_ID
        };
        axios
            .post('http://ecse005008ef.epam.com:8080/api/menu-service/w/components', newComp, {
                headers: {
                    authorization: localStorage.getItem('jwt-Token')
                }
            })
            .then(response => {
                const newItem = {
                    ID: response.data.id,
                    NAME: response.data.name,
                    MEASURE: response.data.measure,
                    CLASS_NAME: response.data.category.name
                }
                const newArray = [];
                realComponents.forEach(element => {
                    newArray.push(element);
                });
                newArray.push(newItem);
                setRealComponents(newArray);
            })
            .catch(error => {
                alert("adding component error!");
                console.log(error);
            });
    };
    const addNewComponentClass = (newComponentClass) => {
        let newClass = {
            name: newComponentClass.NAME,
            isRequired: newComponentClass.IS_REQUIRED,
            isSingle: newComponentClass.IS_SINGLE
        };
        axios
            .post('http://ecse005008ef.epam.com:8080/api/menu-service/w/classes', newClass, {
                headers: {
                    authorization: localStorage.getItem('jwt-Token')
                }
            })
            .then(response => {
                const newItem = {
                    ID: response.data.id,
                    NAME: response.data.name,
                    IS_SINGLE: response.data.isSingle,
                    IS_REQUIRED: response.data.isRequired
                }
                const newArray = [];
                realComponentClasses.forEach(element => {
                    newArray.push(element);
                });
                newArray.push(newItem);
                setRealComponentClasses(newArray);
            })
            .catch(error => {
                alert("adding component error!");
                console.log(error);
            });
    };

    //deletion functionality
    const deleteComponent = (deleteID) => {
        axios
            .delete('http://ecse005008ef.epam.com:8080/api/menu-service/w/components/' + deleteID, {
                headers: {
                    authorization: localStorage.getItem('jwt-Token')
                }
            })
            .then(() => {
                const newArray = [];
                realComponents.forEach((element, arr_index) => {
                    if (element.ID !== deleteID) {
                        newArray.push(element);
                    }
                });
                setRealComponents(newArray);
            })
            .catch(error => {
                alert("deletion component error!");
                console.log(error);
            });

    };
    const deleteComponentClass = (deleteID) => {
        axios
            .delete('http://ecse005008ef.epam.com:8080/api/menu-service/w/classes/' + deleteID, {
                headers: {
                    authorization: localStorage.getItem('jwt-Token')
                }
            })
            .then(() => {
                const newArray = [];
                realComponentClasses.forEach((element) => {
                    if (element.ID !== deleteID) {
                        newArray.push(element);
                    }
                });
                setRealComponentClasses(newArray);
            })
            .catch(error => {
                alert("deletion component error!");
                console.log(error);
            });
    };

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
                                         classesList={createNamesList(realComponentClasses)}
                                         componentsList={createNamesList(realComponents)} />
                    </Modal>
            }
            {
                isCategoryModalOpen &&
                    <Modal>
                        <CategoriesModal closeFunc={toggleCategoryModal} deleteFunc={deleteComponentClass}
                                         addNewComponentClass={addNewComponentClass}
                                         componentClassesData={realComponentClasses}
                                         classesList={createNamesList(realComponentClasses)} />
                    </Modal>
            }
            <ComponentTable components={realComponents} deleteFunc={deleteComponent}/>
        </div>
    );
}

export default Content;
