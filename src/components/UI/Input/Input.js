import React from 'react';
import classes from './Input.module.css';

const Input = ( props ) => {
    let inputElement = null, error_message = null;
    
    let inputClasses = [classes.InputElement];

    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(classes.Invalid)
    }

    switch(props.elementType){

        case ('input') :
            inputElement = (
                <input {...props.elementConfig}
                    value={props.value}
                    className={inputClasses.join(' ')} 
                    onChange={props.changed}/>
            )
        break;

        default :
         inputElement = ( <input {...props.elementConfig}
            value={props.value}
            className={inputClasses.join(' ')} 
            onChange={props.changed}/> )


    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
            <div style={{textAlign: 'right'}}>
                <span style={{color: 'red'}} >{error_message}</span>
            </div>
            
        </div>
    )
}

export default Input
