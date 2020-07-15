import React from "react";

import classes from "./user-table.module.css";

import UserRow from "./UserRow/user-row";

const UserTable = ({users, deleteFunc}) =>{
    return (
        <div className={classes.table_wrapper}>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th className={[classes.table_header, classes.table_header_name].join(" ")}>NAME</th>
                        <th className={[classes.table_header, classes.table_header_email].join(" ")}>E-MAIL</th>
                        <th className={[classes.table_header, classes.table_header_phone].join(" ")}>PHONE</th>
                        <th className={[classes.table_header, classes.table_header_time_registration].join(" ")}>TIME REGISTRATION</th>
                        <th className={[classes.table_header, classes.table_header_position].join(" ")}>POSITION</th>
                        <th className={classes.invisible}> </th>
                    </tr>
                </thead>
                { users.map((user,id) => <UserRow key={id} user={user} setPosition={newValue => {user.POSITION = newValue;}}
                                                  deleteRowFunc={() => {deleteFunc(id)}}/>) }
            </table>
        </div>
    );
};

export default UserTable;
