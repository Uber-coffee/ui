import React from "react";
import classes from './add-components-table.module.css';

const AddComponentsTable = props => {
    return (
        <table className={classes.components_table}>
            <thead>
                <tr>
                    <th colSpan={2} className={classes.header}>CAPPUCINO</th>
                    <th className={classes.header}>COMPONENTS NUMBER: 3</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className={classes.subheader + ' ' + classes.first_row}>COMPONENT NAME</td>
                    <td className={classes.subheader + ' ' + classes.second_row}>QUANTITY</td>
                    <td className={classes.subheader + ' ' + classes.third_row}>MEASURE</td>
                </tr>
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
                </tr>
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
                </tr>
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
                </tr>
            </tbody>
        </table>
    );
};

export default AddComponentsTable;
