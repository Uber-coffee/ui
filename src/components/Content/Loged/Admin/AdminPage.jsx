import React from 'react';
import classes from './AdminPage.module.css';
import Content from './MainPage/MainPage';


function AdminPage() {
    return (
        <div className={classes.AdminPageWrapper}>
            <div className={classes.Content}>
                <Content />
            </div>
        </div>
    );
}

export default AdminPage;
