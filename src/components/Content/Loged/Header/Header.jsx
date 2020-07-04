import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import { Dropdown } from 'react-bootstrap';

const Header = props => {
    return ( 
        
        <div className = { classes.header }>
            <div className = { classes.title }> UBER COFFEE </div> 
            <Dropdown>
                <Dropdown.Toggle className={ classes.admin_btn }>ADMIN</Dropdown.Toggle>
                <Dropdown.Menu>
                
                    <NavLink to="/confirm_logout">
                        <Dropdown.Item className={ classes.logout_btn } href="/logout">LOG OUT</Dropdown.Item>
                    </NavLink>
               
                </Dropdown.Menu>
            </Dropdown>
        </div> 
    );
};

export default Header;