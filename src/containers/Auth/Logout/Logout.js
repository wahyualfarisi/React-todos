import React, { Component } from 'react';
import classes from './Logout.module.css';
import { withRouter  } from 'react-router-dom'
import Login from '../Login/Login';
import Spinner from '../../../components/UI/Spinner/Spinner';
import { connect } from 'react-redux';
import * as actions from './../../../store/actions/index';
import ErrorMessage from '../../../components/UI/ErrorMessage/ErrorMessage';

class Logout extends Component {
    componentDidMount(){
        this.props.logout()
    }

    render(){
        
        let logout = (
            <div>
                <ErrorMessage messageType="success">You've successfully logged out of Todo's App. Come back soon! </ErrorMessage>
                <Login />
            </div>
        );

        if(this.props.loading){
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
        loading: state.auth.loading
    }
}

const dispatchStateToPropd = dispatch => {
    return {
        logout: () => dispatch( actions.logout() )
    }
}

export default connect(mapStateToProps, dispatchStateToPropd)(withRouter(Logout))  ;