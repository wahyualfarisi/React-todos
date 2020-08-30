import React , { Component } from 'react';
import classes from './Register.module.css';
import Input from '../../../components/UI/Input/Input';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Button from '../../../components/UI/Button/Button';
import ErrorMessage from '../../../components/UI/ErrorMessage/ErrorMessage';

class Register extends Component {

    state = {
        form_data: {
            full_name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Fullname',
                    autoFocus: true 
                },
                label: 'Fullname',
                value: '',
                validation: {
                    required: true,
                    
                    maxLength: 20
                },
                valid: false,
                touched: false 
            },
            email: {
                elementType: 'email',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Enter Email'
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
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Enter Password',
                    minLength: 5,
                    maxLength: 5
                },
                label: 'Password',
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false 
            },
            confirm_password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Confirm Password',
                    minLength: 5,
                    maxLength: 5
                },
                label: 'Confirm Password',
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false 
            }
        },
        loading: false,
        formIsValid: false
    }

    onCheckValidity = (value, validation) => {
        let isValid = true;

        if(validation.required){
            isValid = value.trim() !== "" && isValid;
        }

        if(validation.minLength){
            isValid = value.length >= validation.minLength && isValid;
        }

        if(validation.maxLength){
            isValid = value.length <= validation.maxLength && isValid;
        }

        return isValid;
    }

    onChangeHandler = (event, inputIdentifier) => {
        const updatedFormData = {
            ...this.state.form_data
        }

        const inputElement = updatedFormData[inputIdentifier];
        inputElement.value = event.target.value;
        inputElement.valid = this.onCheckValidity(event.target.value, inputElement.validation)
        inputElement.touched = true;

        updatedFormData[inputIdentifier] = inputElement;

        let formIsValid = true;
        for(let key in updatedFormData){
            formIsValid = updatedFormData[key].valid && formIsValid
        }

        this.setState({
            form_data: updatedFormData,
            formIsValid: formIsValid
        })
    }

    onSubmit = (e) => {
        e.preventDefault();



    }

    render(){
        let formElementArr = [];

        for(let key in this.state.form_data) {
            formElementArr.push({
                id: key,
                config: this.state.form_data[key]
            })
        }

        let form = (
            <form onSubmit={this.onSubmit}>
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
                            changed={(event) => this.onChangeHandler(event, item.id)}
                        />
                    ))
                }
                <div style={{ textAlign: 'right' }}>
                    {
                        this.state.loading ? (
                            <div><Spinner /> </div>
                        ) : (
                            <Button disabled={!this.state.formIsValid} btnType="Primary">SUBMIT</Button>
                        )
                    }
                </div>
            </form>
        )


        return(
            <div className={classes.Register}>
                <h2>Register</h2>
                {form}
            </div>
        )
    }
}

export default Register;