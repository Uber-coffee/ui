import React from 'react';

import classes from './footer.module.css';

const Footer = () => {
    return (
        <div className={classes.footer}>
            <span className={classes.cop}>
                © Все права защищены "UBER COFFEE" 2020
            </span>
        </div>
    );
};

export default Footer;
