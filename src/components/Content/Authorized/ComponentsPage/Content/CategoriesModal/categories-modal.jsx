import React, {useState} from "react";

import classes from "./categories-modal.module.css";

import Modal from "../../../../../Modal/modal";
import SearchPanel from "./SearchPanel/search-panel";
import CategoryTable from "./CategoryTable/category-table";
import AddNewCategory from "./AddNewCategory/add-new-category";

const CategoriesModal = ({componentClassesData, classesList, addNewComponentClass, closeFunc, deleteFunc}) => {
    const [isAddModalOpen, setAddModalOpen] = useState(false);
    const toggleAddModal = () => {
        setAddModalOpen(!isAddModalOpen)
    };
    return (
        <div className={classes.wrapper}>
            <button className={classes.close_button} onClick={closeFunc}/>
            <div className={classes.title}>CATEGORIES</div>
            <div className={classes.buttons_area}>
                <button className={classes.add_button} onClick={toggleAddModal}>+ ADD</button>
            </div>
            <SearchPanel />
            {
                isAddModalOpen &&
                    <Modal>
                        <AddNewCategory closeFunc={toggleAddModal}
                                        addNewComponentClass={addNewComponentClass}
                                        classesList={classesList} />
                    </Modal>
            }
            <CategoryTable categories={componentClassesData} deleteFunc={deleteFunc}/>
        </div>
    );
};

export default CategoriesModal;
