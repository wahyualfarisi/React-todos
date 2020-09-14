import React, { Fragment } from 'react';
import classes from './Modal.module.css';
import Backdrop from './../Backdrop/Backdrop';
import Button from '../Button/Button';

const Modal = props => {

    return (
        <Fragment>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            {props.show ? (
                <div className={classes.Modal}>
                {props.children}

                <div className={classes.Modal_action}>
                    <Button clicked={props.modalClosed}>OKEY</Button>
                    
                </div>
            </div>
            ) : null}
           
            
        </Fragment>
    )
}

export default Modal;