import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
      <h3>My Todo List</h3>
      <h3>React</h3>
    </div>
  );
};

export default Header;
