import React, {useEffect, useState} from "react";

import classes from "./content.module.css";

import SearchPanel from "./SearchPanel/search-panel";
import Modal from "../../../../Modal/modal";
import AddNewBeverage from "./AddNewBeverage/add-new-beverage";
import BeverageListElem from "./BeverageListElem/beverage-list-elem";
import ConfirmBeverage from "./ConfirmBeverage/confirm-beverage";
import AddRecipe from "./AddNewRecipe/add-new-recipe";
import * as axios from "axios";

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
    const [beverages, setBeverages] = useState([
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

    useEffect(() => {
        axios
            .get('http://ecse005008ef.epam.com:8080/api/menu-service/w/beverages', {
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
                        PRICE: element.price,
                    }
                    startArray.push(newElem);
                });
                setBeverages(startArray);
            })
            .catch(error => {
                alert("getting components error!");
                console.log(error);
            });
    }, []);

    const addNewBeverage = (newBeverage) => {
        let newBeverageJson = {
            name: newBeverage.NAME,
            price: newBeverage.PRICE,
            recipe: [
                newBeverage.COMPONENTS.map(el => {
                    return {
                        componentId: el.ID,
                        quantity: el.QUANTITY
                    };
                })
            ]
        };
        axios
            .post('http://ecse005008ef.epam.com:8080/api/menu-service/w/beverages', newBeverageJson, {
                headers: {
                    authorization: localStorage.getItem('jwt-Token')
                }
            })
            .then(response => {
                const updArray = [];
                beverages.forEach(el => updArray.push(el));
                updArray.push({
                    ID: response.data.id,
                    NAME: response.data.name,
                    PRICE: response.data.price,
                });
                setBeverages(updArray);
            })
            .catch(error => {
                alert("getting components error!");
                console.log(error);
            });
        setAddStage(0);
    };

    const deleteBeverage = (index) => {
        axios
            .delete("http://ecse005008ef.epam.com:8080/api/menu-service/w/beverages/" + index, {
                headers: {
                    authorization: localStorage.getItem('jwt-Token')
                }
            })
            .then(() => {
                const newBeverages = [];
                beverages.forEach((element, arr_index) => {
                    if (arr_index !== index) {
                        newBeverages.push(element);
                    }
                });
                setBeverages(newBeverages);
            })
            .catch(err => {
                alert("deletion component error!");
                console.log(err);
            })
    };

    const createBeverageListElem = (element, id) => {
        return <BeverageListElem beverage={element} key={id} deleteBeverageFunc={() => {deleteBeverage(id)}} />;
    };

    return (
        <div className={classes.content}>
            <div className={classes.subtitle}>MENU</div>
            <div className={classes.buttons_area}>
                <button className={classes.add_button} onClick={() => setAddStage(1)}>+ ADD</button>
            </div>
            <SearchPanel/>
            <div className={classes.beverages_list}>
                {
                    beverages.map((el, id) => createBeverageListElem(el, id))
                }
            </div>
            {
                addStage === 0 ? null
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
