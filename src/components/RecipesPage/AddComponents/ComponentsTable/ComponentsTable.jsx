import React from "react";
import classes from './ComponentsTable.module.css';

const ComponentsTable = props => {
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
                        <input />
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
                        <input />
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
                        <input />
                    </td>
                    <td className={classes.table_element + ' ' + classes.third_row}>
                        <select></select>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default ComponentsTable;