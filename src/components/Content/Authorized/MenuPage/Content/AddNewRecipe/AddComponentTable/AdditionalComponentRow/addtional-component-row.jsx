import React, {useState} from "react";

import classes from "./additional-companent-row.module.css";

const AdditionalComponentRow = ({components, component, setComponent, deleteRowFunc}) => {
    const [nameDropDown, setNameDropDown] = useState(false);

    const toggleNameDropDown = () => {
        setNameDropDown(!nameDropDown);
    };

    const selectPosition = el => {
        toggleNameDropDown();

        setComponent({
            ID: el.ID,
            NAME: el.NAME,
            MEASURE: el.MEASURE,
            QUANTITY: component.QUANTITY
        });
    }

    const createElem = (el, id) => {
        return component.NAME !== el.NAME &&
            <div className={classes.elem} key={id} onClick={() => selectPosition(el)}>{el.NAME}</div>;
    };

    const handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        switch (name) {
            case "quantity":
                setComponent({
                    ID: component.ID,
                    NAME: component.NAME,
                    QUANTITY: value,
                    MEASURE: component.MEASURE
                });
                break;
            default:
                break;
        }
    };


    return (
        <tr>
            <td className={classes.table_element + ' ' + classes.first_row}>
                <div className={classes.dropdown}>
                    <div
                        className={nameDropDown ? classes.buttonOpened : classes.buttonClosed}
                        onClick={() => toggleNameDropDown()}
                    >
                        {component.NAME}
                    </div>
                    {
                        nameDropDown &&
                        <div className={classes.listWrapper}>
                            {components.map((el, id) => createElem(el, id))}
                        </div>
                    }
                </div>
            </td>
            <td className={classes.table_element + ' ' + classes.second_row}>
                <input
                    className={classes.input_add_components}
                    name={"quantity"}
                    onChange={handleChange}
                />
            </td>
            <td className={classes.table_element + ' ' + classes.third_row}>
                {component.MEASURE}
            </td>
            <td className={classes.table_element + ' ' + classes.delete_col}>
                <div className={classes.delete_buttons_area}>
                    <button className={classes.delete_row} onClick={deleteRowFunc}>-</button>
                </div>
            </td>
        </tr>
    );
};

export default AdditionalComponentRow;
