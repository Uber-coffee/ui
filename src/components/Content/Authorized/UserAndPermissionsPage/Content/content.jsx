import React, {useEffect, useState} from "react";
import * as axios from 'axios';

import classes from "./content.module.css";

import SearchPanel from "./SearchPanel/search-panel";
import UserTable from "./UserTable/user-table";
import Modal from "../../../../Modal/modal"

import AddNewUser from "./AddNewUser/add-new-user";

/*
* Users format for front
* [
*     {ID: 123, NAME: "BENEDICT CUMBER", EMAIL: "ADMIN@UBERCOFFEE.COM",
       TIME_REG: "10/10/2020 10:10", POSITION: "ADMIN"},
*     ...
* ]
* */

const Content = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [dumbUsers, setDumbUsers] = useState(
        [
            {
                NAME: "BENEDICT", EMAIL: "ADMIN@UBERCOFFEE.COM", PHONE: "+444555",
                TIME_REG: "10/10/2020 10:10", POSITION: "ADMIN"
            },
            {
                NAME: "VASYA", EMAIL: "SELLER1@UBERCOFFEE.COM", PHONE: "+444678",
                TIME_REG: "12/10/2020 12:12", POSITION: "SELLER"
            },
            {
                NAME: "IVAN", EMAIL: "mail@UBERCOFFEE.COM", PHONE: "+79111199911",
                TIME_REG: "29/08/1999 10:28", POSITION: "MANAGER"
            }
        ]
    );
    const [realUsers, setRealUsers] = useState([]);

    useEffect(() => {
        let roles = {
            roles: [
                "ROLE_ADMIN", "ROLE_MANAGER", "ROLE_SELLER"
            ]
        };
        axios
            .post('http://ecse005008ef.epam.com:8080/api/auth/w/user/getUsers', roles, {
                headers: {
                    authorization: localStorage.getItem('jwt-Token')
                }
            })
            .then(response => {
                const startArray = [];
                response.data.map(element => {
                    const regDate = new Date(element.registrationDate);
                    const regDateStr = regDate.getDate() + '/' + regDate.getMonth() + '/' + regDate.getFullYear() +
                        " " + regDate.getHours() + ':' + regDate.getMinutes();
                    let newElem = {
                        ID: element.id,
                        NAME: element.firstName + " " + element.lastName,
                        EMAIL: element.email,
                        TIME_REG: regDateStr,
                        POSITION: element.roles[0].split("_")[1]
                    }
                    startArray.push(newElem);
                });
                setRealUsers(startArray);
            })
            .catch(error => {
                alert("getting users error!");
                console.log(error);
            });
    }, []);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    const addNewEmployer = (employer) => {
        let now = new Date();
        let emp = {
            NAME: employer.NAME,
            EMAIL: employer.EMAIL,
            PHONE: employer.PHONE,
            TIME_REG: now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear() + " "
                + now.getHours() + ":" + now.getMinutes(),
            POSITION: employer.POSITION
        }
        dumbUsers.push(emp);
    }

    const deleteEmployer = (index) => {
        const newUsers = [];
        dumbUsers.forEach((element, arr_index) => {
            if (index !== arr_index) {
                newUsers.push(element);
            }
        });
        setDumbUsers(newUsers);
    };

    return (
        <div className={classes.content}>
            <div className={classes.subtitle}>USERS AND PERMISSIONS</div>

            <div className={classes.buttons_area}>
                <button className={classes.add_button} onClick={toggleModal}>+ ADD</button>
            </div>

            <SearchPanel/>
            {
                isModalOpen &&
                    <Modal>
                        <AddNewUser closeFunc={toggleModal} addNewEmployer={addNewEmployer}/>
                    </Modal>
            }
            <UserTable users={realUsers} deleteFunc={deleteEmployer}/>
        </div>
    );
};

export default Content;
