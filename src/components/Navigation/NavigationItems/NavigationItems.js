import React, { Component } from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import AuthService from './../../../services/auth_service';
import Spinner from './../../UI/Spinner/Spinner'
import Button from '../../UI/Button/Button';

class NavigationItems extends Component {
   
    state = {
        currentUser: undefined,
        isLoading: true
    }

    componentDidMount(){
        const user = AuthService.getCurrentUser();

        if(user){
            this.setState({
                currentUser: user,
                isLoading: false 
            })
        }else{
            this.setState({
                currentUser: null,
                isLoading: false
            })
        }

    }

    render(){
        let navigations = null;

        if(this.state.isLoading){
            navigations = <Spinner />
        }else {
            if(this.state.currentUser){
                navigations = (
                    <ul className={classes.NavigationItems}>
                        <NavigationItem link="/todo"> Todo </NavigationItem>
                        <NavigationItem link="/profile"> Profile </NavigationItem>
                        <NavigationItem link="/logout"> Logout </NavigationItem>
                    </ul>
                )
            }else{
                navigations = (
                    <ul className={classes.NavigationItems}>
                        <NavigationItem link="/login"> Login </NavigationItem>
                        <NavigationItem link="/register"> Register </NavigationItem>
                    </ul>
                )
            }
        }

        return navigations;
    }
    
}

export default NavigationItems
