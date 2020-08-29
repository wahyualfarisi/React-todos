import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from './../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {
    let sideDrawerClasses = [classes.SideDrawer, classes.Close];

    if(props.open){
        sideDrawerClasses = [classes.SideDrawer, classes.Open]
    }

    return (
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={sideDrawerClasses.join(' ')}>
                <Logo />
                <nav style={{ marginTop: '20px' }}>
                    <NavigationItems isLogin={props.isLogin} />
                </nav>
            </div>
        </React.Fragment>
    )
}

export default SideDrawer
