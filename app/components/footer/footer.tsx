import React from 'react';
import classes from './footer.module.css';

const Footer = () => {
  return (
    <div className="container">
      <footer className={classes.footer}>
        <p className={classes.text}>&copy;&nbsp;2025, Велиж</p>
      </footer>
    </div>
  );
};

export default Footer;
