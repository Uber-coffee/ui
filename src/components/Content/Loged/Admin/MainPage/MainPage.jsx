import React from 'react';
import classes from './MainPage.module.css';

const Admin = props => {
    return ( 
        <div className={classes.content}> 
            <div className={classes.button_area}>
                <span className={classes.control_panel}> Control Panel </span>
                <button className={classes.user_permission_btn }> Users And Permissions </button> 
                <button className={classes.trade_points_btn }> Trade Points </button>  
                <button className={classes.customers_btn }> Customers </button>
                <button className={classes.order_history_btn}> Order History </button> 
                <button className={classes.menu_btn }> Menu </button> 
                <button className={classes.components_btn }> Components </button> 
                <button className={classes.recipes_btn }> Recipes </button> 
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