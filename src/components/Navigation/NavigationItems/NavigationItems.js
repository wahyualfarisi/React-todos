import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => {
    return (
       <ul className={classes.NavigationItems}>
            <NavigationItem link="/"> Login </NavigationItem>
            <NavigationItem link="/register"> Register </NavigationItem>
       </ul>
    )
}

export default NavigationItems
