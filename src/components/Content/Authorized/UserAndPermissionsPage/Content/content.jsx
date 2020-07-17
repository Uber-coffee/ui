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
*     {ID: 123, NAME: "BENEDICT CUMBER", EMAIL: "ADMIN@UBERCOFFEE.COM", PHONE: "+444555",
       TIME_REG: "10/10/2020 10:10", POSITION: "ADMIN"},
*     ...
* ]
* */

const Content = () => {
    const [isModalOpen, setModalOpen] = useState(false);
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
                    const minutes = (regDate.getMinutes() < 10) ? "0" + regDate.getMinutes() : regDate.getMinutes();
                    const regDateStr = regDate.getDate() + '/' + regDate.getMonth() + '/' + regDate.getFullYear() +
                        " " + regDate.getHours() + ':' + minutes;
                    let newElem = {
                        ID: element.id,
                        NAME: element.firstName,
                        SURNAME: element.lastName,
                        EMAIL: element.email,
                        PHONE: element.phoneNumber,
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
            firstName: employer.NAME,
            lastName: employer.SURNAME,
            email: employer.EMAIL,
            phoneNumber: employer.PHONE,
        }
        if (employer.POSITION === "MANAGER") {
            axios
                .post(
                    'http://auth-web:8100/w/user/manager',
                    emp,
                    {
                        headers: {
                            authorization: localStorage.getItem('jwt-Token')
                        }
                    }
                )
                .then(response => {
                    let newEpl = {
                        EMAIL: response.data.email,
                        NAME: response.data.firstName,
                        SURNAME: response.data.lastName,
                        PHONE: response.data.phoneNumber,
                        POSITION: "MANAGER",
                        TIME_REG: now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear() + " "
                            + now.getHours() + ":" + now.getMinutes()
                    };
                    realUsers.push(newEpl);
                    setRealUsers(realUsers);
                })
                .catch(err => {
                    alert("getting users error!");
                    console.log(err);
                });
        }
        else if (employer.POSITION === "SELLER") {
            axios
                .post(
                    'http://auth-web:8100/w/user/seller',
                    emp,
                    {
                        headers: {
                            authorization: localStorage.getItem('jwt-Token')
                        }
                    }
                )
                .then(response => {
                    let newEpl = {
                        EMAIL: response.data.email,
                        NAME: response.data.firstName,
                        SURNAME: response.data.lastName,
                        PHONE: response.data.phoneNumber,
                        POSITION: "SELLER",
                        TIME_REG: now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear() + " "
                            + now.getHours() + ":" + now.getMinutes()
                    };
                    realUsers.push(newEpl);
                    setRealUsers(realUsers);
                })
                .catch(err => {
                    alert("getting users error!");
                    console.log(err);
                });
        }
    }

    const deleteEmployer = (user) => {
        const newUsers = [];
        axios
            .delete(
                'http://auth-web:8100/w/user/deleteUser?email='+ user.EMAIL.replace("@", "%40"),
                {
                    headers: {
                        authorization: localStorage.getItem('jwt-Token')
                    }
                }
            )
            .then( ()=> {
                    realUsers.forEach((element) => {
                        if (user !== element) {
                            newUsers.push(element);
                        }
                    });
                    setRealUsers(newUsers);
                }
            )
            .catch(err => {
                alert("getting users error!");
                console.log(err);
            });
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
