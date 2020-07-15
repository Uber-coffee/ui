import React, {useState} from "react";

import classes from "./content.module.css";

import SearchPanel from "./SearchPanel/search-panel";
import Modal from "../../../../Modal/modal";
import AddNewBeverage from "./AddNewBeverage/add-new-beverage";
import BeverageListElem from "./BeverageListElem/beverage-list-elem";

const Content = () => {
    const [isAddModalOpen, setAddModalOpen] = useState(false);
    const [dumbBeverages, setDumbBeverages] = useState([
        {
            NAME: "ESPRESSO",
            PRICE: 100
        },
        {
            NAME: "CAPPUCCINO",
            PRICE: 200
        },
        {
            NAME: "CAFFÉ LATTE",
            PRICE: 250
        }
    ]);
    const toggleAddModal = () => {
        setAddModalOpen(!isAddModalOpen);
    };
    const addNewBeverage = (newBeverage) => {
        const newBeverages = [];
        dumbBeverages.forEach((element) => {
            newBeverages.push(element);
        });
        newBeverages.push(newBeverage);
        setDumbBeverages(newBeverages);
    };
    const deleteBeverage = (index) => {
        const newBeverages = [];
        dumbBeverages.forEach((element, arr_index) => {
            if (arr_index !== index) {
                newBeverages.push(element);
            }
        });
        setDumbBeverages(newBeverages);
    };
    const createBeverageListElem = (element, id) => {
        return <BeverageListElem beverage={element} key={id}
                                 deleteBeverageFunc={() => {deleteBeverage(id)}} />;
    };
    return (
        <div className={classes.content}>
            <div className={classes.subtitle}>USERS AND PERMISSIONS</div>
            <div className={classes.buttons_area}>
                <button className={classes.add_button} onClick={toggleAddModal}>+ ADD</button>
            </div>
            <SearchPanel/>
            {
                isAddModalOpen &&
                <Modal>
                    <AddNewBeverage closeFunc={toggleAddModal} addNewBeverage={addNewBeverage}/>
                </Modal>
            }
            <div className={classes.beverages_list}>
                {
                    dumbBeverages.map((el, id) => createBeverageListElem(el, id))
                }
            </div>
        </div>
    );
};

export default Content;