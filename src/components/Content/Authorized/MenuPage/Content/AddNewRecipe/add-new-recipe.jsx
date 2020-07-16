import React, {useState} from "react";
import classes from "./add-new-recipe.module.css";
import AddComponentTable from "./AddComponentTable/add-component-table";

const AddRecipe = ({beverage, nextFunc, updateBeverage}) => {
    const [components, setComponents] = useState([
        {
            ID: -1,
            NAME: "",
            QUANTITY: -1,
            MEASURE: ""
        },
        {
            ID: -1,
            NAME: "",
            QUANTITY: -1,
            MEASURE: ""
        }
    ]);

    const addRow = () => {
        let newComponents = [];
        components.forEach(el=> newComponents.push(el))
        newComponents.push({
            NAME: "",
            QUANTITY: -1,
            MEASURE: ""
        });
        setComponents(newComponents);
    };

    const onNext = () => {
        if (isValidComponents()){
            updateBeverage({
                NAME: beverage.NAME,
                PRICE: beverage.PRICE,
                COMPONENTS: components
            });
            nextFunc();
        }
    };

    const isValidComponents = () => {
      return true;
    };

    const deleteRow = (id) => {
        let newComponents = [];
        components.forEach((el, arr_id) => {
            if (id !== arr_id){
                newComponents.push(el)
            }
        });
        setComponents(newComponents);
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.table_zone}>
                <AddComponentTable
                    name={beverage.NAME}
                    beverageComponents={components}
                    deleteRowFunc={deleteRow}
                    updateFunc={setComponents}
                    setComponents={setComponents}
                />
            </div>
            <div className={classes.buttons_zone}>
                <button className={classes.add_row} onClick={addRow}>+</button>
                <div className={classes.next_area}>
                    <button className={classes.next_button} onClick={onNext}>NEXT</button>
                </div>
            </div>
        </div>
    );
}

export default AddRecipe;
