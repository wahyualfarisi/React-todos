import React from 'react';
import classes from './ErrorMessage.module.css';

const ErrorMessage = (props) => {
    let messageClasses = null;

    if(props.messageType === 'error'){
        messageClasses = classes.Error
    }

    if(props.messageType === 'success'){
        messageClasses = classes.Success;
    }


    return (
        <div className={classes.Messaage} >
            <span className={messageClasses}> {props.children} </span>
        </div>
    )
}

export default ErrorMessage
