import React, {useEffect, useState} from "react";
import classes from './add-component-table.module.css';
import ComponentRow from "./ComponentRow/component-row";
import AdditionalComponentRow from "./AdditionalComponentRow/addtional-component-row";
import * as axios from "axios";

const AddComponentTable = ({name, beverageComponents, deleteRowFunc, setComponents}) => {
    const [existingComponents, setExistingComponents] = useState([
        {NAME: "CUP/0.2", MEASURE: "PIECE"},
        {NAME: "MILK", MEASURE: "ML"},
        {NAME: "LAVAZZA", MEASURE: "MG"}
    ]);

    useEffect(() => {
        axios
            .get('http://ecse005008ef.epam.com:8080/api/menu-service/w/components', {
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
                        MEASURE: element.measure,
                        CLASS_NAME: element.category.name
                    }
                    startArray.push(newElem);
                });
                setExistingComponents(startArray);
            })
            .catch(error => {
                alert("getting components error!");
                console.log(error);
            });
    }, []);

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
