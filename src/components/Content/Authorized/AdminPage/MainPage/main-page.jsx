import React from 'react';
import classes from './main-page.module.css';
import {NavLink} from "react-router-dom";

const Admin = props => {
    return (
        <div className={classes.content}>
            <div className={classes.button_area}>
                <span className={classes.control_panel}> Control Panel </span>
                <button className={classes.user_permission_btn }>
                    <NavLink className={classes.navlink} to="/users_and_permissions" >User and Permissions</NavLink>
                </button>
                <button className={classes.trade_points_btn }>
                    <NavLink className={classes.navlink} to="/trade_points" >Trade Points</NavLink>
                </button>
                <button className={classes.customers_btn }>
                    <NavLink className={classes.navlink} to="/" >Customers</NavLink>
                </button>
                <button className={classes.order_history_btn}>
                    <NavLink className={classes.navlink} to="/" >Order History </NavLink>
                </button>
                <button className={classes.menu_btn }>
                    <NavLink className={classes.navlink} to="/users_and_permissions" >Menu</NavLink>
                </button>
                <button className={classes.components_btn }>
                    <NavLink className={classes.navlink} to="/components" >Components</NavLink>
                </button>
                <button className={classes.recipes_btn }>
                    <NavLink className={classes.navlink} to="/recipes" >Recipes</NavLink>
                </button>
            </div>
            <div className={classes.admin_information}>
                <div className={classes.admin_face}></div>
                <div className={classes.admin_name}>Name: Benedict</div>
                <div className={classes.admin_position}>Position: Administrator</div>
                <div className={classes.admin_responsibility}>Responsible for: All Points</div>
            </div>
        </div>
    );
};

export default Admin;
