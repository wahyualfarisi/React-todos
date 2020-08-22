import React from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from './../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle />
            <Logo />
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default Toolbar;