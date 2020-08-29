import React, { Component } from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

class NavigationItems extends Component {
   

    render(){
        let navigations = null;

        if(this.props.isLogin){
            navigations = (
                <ul className={classes.NavigationItems}>
                    <NavigationItem link="/"> Todo </NavigationItem>
                    <NavigationItem link="/profile"> Profile </NavigationItem>
                    <NavigationItem link="/logout"> Logout </NavigationItem>
                </ul>
            )
        }else{
            navigations = (
                <ul className={classes.NavigationItems}>
                    <NavigationItem link="/"> Login </NavigationItem>
                    <NavigationItem link="/register"> Register </NavigationItem>
                </ul>
            )
        }

        return navigations;
    }
    
}

export default NavigationItems
