import React from 'react';
import classes from './Controls.module.css';

const Controls = (props) => {

    return (
        <div className={classes.Controls}>
            <h2>My Day</h2>
            <div className="clearfix"></div>
            <p>Hallo, { JSON.parse(localStorage.getItem('user')).results.full_name }  </p>
            <form onSubmit={props.submited}>
                <input type="text" placeholder="Enter List" value={props.inputValue} onChange={props.changed} />
                <button type="submit">ADD</button>
                <div className="clearfix"></div>
            </form>
        </div>
    )
}

export default Controls;
