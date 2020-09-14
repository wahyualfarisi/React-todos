import React from 'react';
import classes from './Items.module.css';

const Items = (props) => {
    let itemClasses = [classes.Items];

    if(props.checked){
        itemClasses.push(classes.Checked)
    }

    return (
        <li className={itemClasses.join(' ')}>
            <div onClick={props.clicked}>{props.title}</div> 
            <span onClick={props.deleted}>x</span> 
        </li>
    )
}

export default Items
