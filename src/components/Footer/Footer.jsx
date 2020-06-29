import React from 'react';
import classes from './Footer.module.css';
const Footer = props => {
  return (
    <div className={classes.footer}>
      <span className={classes.cop}>
        © Все права защищены "UBER COFFEE" 2020
      </span>
    </div>
  );
};

export default Footer;
