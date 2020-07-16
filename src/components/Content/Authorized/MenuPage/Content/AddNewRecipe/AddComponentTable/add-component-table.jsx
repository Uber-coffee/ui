import React, {useState} from "react";
import classes from './add-component-table.module.css';
import ComponentRow from "./ComponentRow/component-row";
import AdditionalComponentRow from "./AdditionalComponentRow/addtional-component-row";

const AddComponentTable = ({name, beverageComponents, deleteRowFunc, setComponents}) => {

    const updateComponentList = (element, id) => {
        let newComponentList = [];
        beverageComponents.forEach((elem, ind)=>{
            if (ind !== id){
                newComponentList.push(elem);
            }
            else {
                newComponentList.push(element);
            }
        });
        setComponents(newComponentList);

    };

    const createAdditionalRow = (el, id) => {
        return (
            <tr>
                <td className={classes.table_element + ' ' + classes.first_row}>
                    <select></select>
                </td>
                <td className={classes.table_element + ' ' + classes.second_row}>
                    <input className={classes.input_add_components}/>
                </td>
                <td className={classes.table_element + ' ' + classes.third_row}>
                    <select></select>
                </td>
                <td className={classes.table_element + ' ' + classes.delete_col}>
                    <div className={classes.delete_buttons_area}>
                        <button className={classes.delete_row} onClick={()=>deleteRowFunc(id)}>-</button>
                    </div>
                </td>
            </tr>

        );
    }

    const existingComponents = [
        {NAME: "CUP/0.2", MEASURE: "PIECE"},
        {NAME: "MILK", MEASURE: "ML"},
        {NAME: "LAVAZZA", MEASURE: "MG"},
    ]

    return (
        <table className={classes.components_table}>
            <thead>
            <tr>
                <th colSpan={2} className={classes.header}>{name}</th>
                <th className={classes.header}>COMPONENTS NUMBER: {beverageComponents.length}</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className={classes.subheader + ' ' + classes.first_row}>COMPONENT NAME</td>
                <td className={classes.subheader + ' ' + classes.second_row}>QUANTITY</td>
                <td className={classes.subheader + ' ' + classes.third_row}>MEASURE</td>
            </tr>
            {
                beverageComponents.map((el, id) => {
                    return id < 2 ?
                        <ComponentRow
                            components={existingComponents}
                            component={el}
                            setComponent={(element, ind=id)=>{updateComponentList(element, ind)}}
                        />
                        // : createAdditionalRow(el, id)
                        : <AdditionalComponentRow
                            components={existingComponents}
                            component={el}
                            setComponent={(element, ind=id)=>{updateComponentList(element, ind)}}
                            deleteRowFunc={()=>deleteRowFunc(id)}
                            />
                })
            }
            </tbody>
        </table>
    );
};

export default AddComponentTable;
