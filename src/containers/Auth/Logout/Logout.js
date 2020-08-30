import React, { Component } from 'react';
import classes from './Logout.module.css';
import AuthService from './../../../services/auth_service';
import { withRouter  } from 'react-router-dom'
import Login from '../Login/Login';
import Spinner from '../../../components/UI/Spinner/Spinner';
import { connect } from 'react-redux';
import * as actiontypes from './../../../store/actions';
import ErrorMessage from '../../../components/UI/ErrorMessage/ErrorMessage';

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
                            this.props.logout();
                        }, 1000)
                    }else{
                        this.setState({
                            loading: false
                        });
                        this.props.logout();
                    }
            })
            .catch(err => {
                    this.setState({
                        loading: false
                });
                this.props.logout();
            });
       }else{
        this.setState({
            loading: false
        });
        this.props.logout();
       }
    }

    render(){
        
        let logout = (
            <div>
                <Login />
                <ErrorMessage messageType="success">You've successfully logged out of Todo's App. Come back soon! </ErrorMessage>
            </div>
        );

        if(this.state.loading){
            logout = (
                <div className={classes.Logout}>
                    <Spinner />
                </div>
            )
        }


        return logout;
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const dispatchStateToPropd = dispatch => {
    return {
        logout: () => dispatch({ type: actiontypes.LOGOUT })
    }
}

export default connect(mapStateToProps, dispatchStateToPropd)(withRouter(Logout))  ;