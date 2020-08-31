import React from 'react';
import classes from './Items.module.css';

const Items = (props) => {
    let itemClasses = null;

    if(props.checked){
        itemClasses = classes.Checked
    }

    return (
        <li className={itemClasses}>
            <div onClick={props.clicked}>{props.title}</div> 
            <span onClick={props.deleted}>x</span> 
        </li>
    )
}

export default Items
