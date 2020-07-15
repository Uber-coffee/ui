import React, {useState} from "react";

import classes from "./content.module.css";

import SearchPanel from "./SearchPanel/search-panel";
import UserTable from "./UserTable/user-table";
import Modal from "../../../../Modal/modal"

import AddNewUser from "./AddNewUser/add-new-user";

const Content = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [dumbUsers, setDumbUsers] = useState(
        [
            {
                NAME: "BENEDICT",
                EMAIL: "ADMIN@UBERCOFFEE.COM",
                PHONE: "+444555",
                TIME_REG: "10/10/2020 10:10",
                POSITION: "ADMIN"
            },
            {
                NAME: "VASYA",
                EMAIL: "SELLER1@UBERCOFFEE.COM",
                PHONE: "+444678",
                TIME_REG: "12/10/2020 12:12",
                POSITION: "SELLER"
            },
            {
                NAME: "IVAN",
                EMAIL: "mail@UBERCOFFEE.COM",
                PHONE: "+79111199911",
                TIME_REG: "29/08/1999 10:28",
                POSITION: "MANAGER"
            }
        ]
    )

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
            <UserTable users={dumbUsers} deleteFunc={deleteEmployer}/>
        </div>
    );
};

export default Content;
