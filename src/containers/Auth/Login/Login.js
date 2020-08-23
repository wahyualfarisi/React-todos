import React , { Component } from 'react';
import classes from './Login.module.css';
import Button from '../../../components/UI/Button/Button';

class Login extends Component {

    render() {
        return (
            <div className={classes.Login}>
                <h2>Please Log in</h2>
                <form>
                        <label>Email</label>
                        <input type="text" />

                        <label>Password</label>
                        <input type="password" />

                        <label>
                            <input type="checkbox" /> Show Password
                        </label>

                        <div style={{ textAlign: 'right' }}>
                            <Button btnType="Primary" >SUBMIT</Button>
                        </div>
                        
                </form>
            </div>
        )
    }
}

export default Login;