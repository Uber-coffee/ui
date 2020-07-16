import React, {useState} from "react";

import classes from "./component-row.module.css";

const ComponentRow = ({components, component, setComponent}) => {
    const [nameDropDown, setNameDropDown] = useState(false);

    const toggleNameDropDown = () => {
      setNameDropDown(!nameDropDown);
    };

    const selectPosition = (el) => {
        toggleNameDropDown();

        setComponent({
            NAME: el.NAME,
            MEASURE: el.MEASURE,
            QUANTITY: component.QUANTITY
        });
    }

    const createElem = (el, id) => {
        return component.NAME !== el.NAME &&
            <div className={classes.elem} key={id} onClick={() => selectPosition(el)}>{el.NAME}</div>;
    };

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        switch (name) {
            case "quantity":
                setComponent({
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
            <td className={classes.table_element + ' ' + classes.delete_col}/>
        </tr>
    );
};

export default ComponentRow;
