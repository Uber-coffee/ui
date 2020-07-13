import React, {useEffect, useState} from "react";

import classes from "./side-bar.module.css"
import {NavLink} from 'react-router-dom';

const SideBar = (props) => {
    const [root] = useState(document.createElement('div'));

    const pages = [
        {"name":"Control Panel", "url": "/"},
        {"name":"Trade Points", "url": "/"},
        {"name":"Menu", "url": "/"},
        {"name":"Recipes", "url": "/recipes"},
        {"name":"Users and Permissions", "url": "/users_and_permissions"},
        {"name":"Customers", "url": "/"},
        {"name":"Order History", "url": "/"},
        {"name":"Components", "url": "/components"},
    ];

    useEffect(() =>{
        document.body.appendChild(root);

        return () => {
            document.body.removeChild(root);
        }
    });

    const createMenuElem = (el, id) =>(<div className={classes.elem}>
        <NavLink to={el.url} key={id} onClick={props.onClick} className={classes.navlink}>{el.name}</NavLink>
    </div>);

    return (
        <div className={classes.sidebar_wrapper}>
            <div className={classes.sidebar}>
                <button
                    onClick={props.onClick}
                    className={classes.close_button}
                />
                <div className={classes.menu_wrapper}>
                    {
                        pages.map((el, id) => createMenuElem(el, id))
                    }
                </div>
            </div>
        </div>
    );
}

export default SideBar;
