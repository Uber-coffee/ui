import React from 'react';
import classes from './AdminPage.module.css';
import Header from "../Header/Header";
import Content from './MainPage/MainPage';
import {Route} from 'react-router-dom';
import ConfirmLogOut from '../Header/ConfirmLogOut/ConfirmLogOut';
import Footer from '../Footer/Footer'

function AdminPage() {
    return (
        <div className={classes.AdminPageWrapper}>
            <Route path="/confirm_logout" render={() => <ConfirmLogOut />} />
            <div className={classes.Header}>
                <Header />
            </div>
            
            <div className={classes.Content}>
                <Content />
            </div>
            
            <div className="Footer">
                <Footer />
            </div>
        </div>
    );
}

export default AdminPage;