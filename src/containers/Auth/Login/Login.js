import React , { Component } from 'react';
import classes from './Login.module.css';
import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';
import AuthService from './../../../services/auth_service';
import Spinner from './../../../components/UI/Spinner/Spinner';
import { withRouter } from 'react-router-dom'
import ErrorMessage from '../../../components/UI/ErrorMessage/ErrorMessage';

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

        if(rules.isEmail){
            const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            isValid = regex.test(String(value).toLowerCase()) && isValid
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
        this.setState({ loading: true, errorMessage: '' })
        const formData = {};

        for(let valueInput in this.state.form_data){
            formData[valueInput] = this.state.form_data[valueInput].value;
        }

        AuthService.login(formData.email, formData.password)
            .then( (res) => {
                if(res.status){
                    setTimeout(() => {
                        this.props.history.push('/')
                        window.location.reload()
                        this.setState({ loading: false })
                    }, 1000);
                    
                }else{
                    this.setState({ loading: false })
                    this.setState({
                        errorMessage: 'There is no user record corresponding to this identifier. The user may have been deleted'
                    })
                }
        }) 
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
                           this.state.loading ? (
                               <div> <Spinner /> </div>
                           ) : (
                            <Button disabled={!this.state.formIsValid} btnType="Primary" >SUBMIT</Button>
                           )
                        } 
                    </div>
            </form>
        );

        if(this.state.errorMessage.trim() !== "") {
            errorMessage = <ErrorMessage messageType="error"> {this.state.errorMessage} </ErrorMessage>
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

export default withRouter(Login) ;