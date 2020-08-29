import React from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from './../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = (props) => {
   
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.toggleHandler} />
            {!props.isShowSideDrawer ? <Logo /> : null } 
            <nav className={classes.DesktopOnly}>
               <NavigationItems isLogin={props.isLogin} />
            </nav>
        </header>
    )
}

export default Toolbar;