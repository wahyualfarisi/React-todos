import React , { Component } from 'react';
import classes from './Login.module.css';
import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';
import Spinner from './../../../components/UI/Spinner/Spinner';
import { withRouter } from 'react-router-dom'
import ErrorMessage from '../../../components/UI/ErrorMessage/ErrorMessage';
import { connect } from 'react-redux';
import * as actions from './../../../store/actions/index';

class Login extends Component {

    state = {
        form_data: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Enter email',
                    autoFocus: true
                },
                label: 'Email',
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password:{
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Enter password'
                },
                label: 'Password',
                value: '',
                validation: {
                    required: true 
                },
                valid: false,
                touched: false
            }           
        },
        formIsValid: false,
        loading: false,
        errorMessage: ''
    }

    onCheckValidity = (value, rules) => {
        let isValid = true;

        if(rules.required) {
            isValid = value.trim() !== '' && isValid
        }

        return isValid;
    }

    onChangeHandler = (event, inputIdentifier) => {
        const updatedFormData = {
            ...this.state.form_data
        };

        const selectedFormElement = {
            ...updatedFormData[inputIdentifier]
        }
        selectedFormElement.value = event.target.value;
        selectedFormElement.valid = this.onCheckValidity(event.target.value, selectedFormElement.validation);
        selectedFormElement.touched = true;
        updatedFormData[inputIdentifier] = selectedFormElement;
        
        //
        let formIsValid = true;
        for(let key in updatedFormData){
            formIsValid = updatedFormData[key].valid && formIsValid
        }
        
        this.setState({
            form_data: updatedFormData,
            formIsValid: formIsValid
        });
    }

    onSubmitHandler = ( event ) => {
        event.preventDefault();
        const formData = {};

        for(let valueInput in this.state.form_data){
            formData[valueInput] = this.state.form_data[valueInput].value;
        }

        this.props.onAuthentication(formData.email, formData.password); 
    }


    render() {
        let formElementArr = [], errorMessage = null;

        for(let key in this.state.form_data){
            formElementArr.push({
                id: key,
                config: this.state.form_data[key]
            })
        }

        let form = (
            <form onSubmit={this.onSubmitHandler}>
                    {
                        formElementArr.map(item => (
                            <Input 
                                key={item.id}
                                label={item.config.label}
                                elementType={item.config.elementType}
                                elementConfig={item.config.elementConfig}
                                value={item.config.value}
                                invalid={!item.config.valid}
                                shouldValidate={item.config.validation}
                                touched={item.config.touched}
                                changed={(event) => this.onChangeHandler(event, item.id) }
                            />
                        ))
                    }
                    <div style={{ textAlign: 'right' }}>
                       { 
                           this.props.loading ? (
                               <div> <Spinner /> </div>
                           ) : (
                            <Button disabled={!this.state.formIsValid} btnType="Primary" >SUBMIT</Button>
                           )
                        } 
                    </div>
            </form>
        );

        if(this.props.error){
            errorMessage = (
                <ErrorMessage messageType="Error"> {this.props.error.message} </ErrorMessage>
            )
        }

        return (
            <div className={classes.Login}>
                <h2>Log in</h2>
                {form}
                {errorMessage}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuthentication: (email, password) => dispatch( actions.auth(email, password) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)( withRouter(Login) )  ;