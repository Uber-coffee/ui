import React from 'react';
import classes from './admin-page.module.css';
import Content from './MainPage/main-page';


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
