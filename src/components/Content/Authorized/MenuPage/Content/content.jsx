import React, {useState} from "react";

import classes from "./content.module.css";

import SearchPanel from "./SearchPanel/search-panel";
import Modal from "../../../../Modal/modal";
import AddNewBeverage from "./AddNewBeverage/add-new-beverage";
import BeverageListElem from "./BeverageListElem/beverage-list-elem";
import ConfirmBeverage from "./ConfirmBeverage/confirm-beverage";
import AddRecipe from "./AddNewRecipe/add-new-recipe";

const Content = () => {
    const [addStage, setAddStage] = useState(0);
    const [newBeverage, setBeverage] = useState({
        NAME: "",
        PRICE: -1,
        COMPONENTS: [
            {
                NAME: "",
                QUANTITY: -1,
                MEASURE: ""
            },
            {
                NAME: "",
                QUANTITY: -1,
                MEASURE: ""
            }
        ]
    });
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

    const nextModal = () => {
        setAddStage(addStage + 1 > 2 ? 0 : addStage + 1);
    };


    const addNewBeverage = (newBeverage) => {
        const newBeverages = [];
        console.log(newBeverage);
        dumbBeverages.forEach((element) => {
            newBeverages.push(element);
        });
        newBeverages.push(newBeverage);
        setDumbBeverages(newBeverages);
        setAddStage(0);
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
            <div className={classes.subtitle}>MENU</div>
            <div className={classes.buttons_area}>
                <button className={classes.add_button} onClick={nextModal}>+ ADD</button>
            </div>
            <SearchPanel/>
            <div className={classes.beverages_list}>
                {
                    dumbBeverages.map((el, id) => createBeverageListElem(el, id))
                }
            </div>
            {
                addStage === 0 ?
                    null
                : addStage === 1 ?
                    <Modal>
                        <AddNewBeverage
                            closeFunc={() => setAddStage(0)}
                            nextStage={() => setAddStage(2)}
                            updateBeverage={setBeverage}/>
                    </Modal>
                : addStage === 2 ?
                    <Modal>
                        <AddRecipe
                            beverage={newBeverage}
                            nextFunc={()=>setAddStage(3)}
                            updateBeverage={setBeverage}
                        />
                    </Modal>
                : addStage === 3 ?

                    <Modal>
                        <ConfirmBeverage
                            onCancel={() => setAddStage(2)}
                            onConfirm={() => addNewBeverage(newBeverage)}/>
                    </Modal>
                : null

            }
        </div>
    );
};

export default Content;
