import React, { Component } from 'react';
import classes from './Logout.module.css';
import AuthService from './../../../services/auth_service';
import { withRouter  } from 'react-router-dom'
import Login from '../Login/Login';
import Spinner from '../../../components/UI/Spinner/Spinner';

class Logout extends Component {
    state = {
        loading: true
    }

    componentDidMount(){
       const user = AuthService.getCurrentUser();

       if(user){
                AuthService.logout().then(res => {
                    if(res.status){
                        setTimeout(() => {
                            this.setState({
                                loading: false
                            });
                            
                        }, 1000)
                        
                    }else{
                        this.setState({
                            loading: false
                        });
                    }
            })
            .catch(err => {
                console.log(err, 'ss')
                    this.setState({
                        loading: false
                });
            });
       }else{
        this.setState({
            loading: false
        });
       }

       
    }

    render(){
        let logout = (
            <div>
                <h4>Success logout</h4>
                <Login />
            </div>
        );

        if(this.state.loading){
            logout = (
                <div className={classes.Logout}>
                    <Spinner />
                </div>
            )
        }


        return  logout;
    }
}

export default withRouter(Logout) ;