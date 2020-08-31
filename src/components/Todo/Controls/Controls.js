import React from 'react';
import classes from './Controls.module.css';

const Controls = (props) => {
    return (
        <div className={classes.Controls}>
            <h2>My Day</h2>
            <h5>29 August 2020</h5>
            <div className="clearfix"></div>
            <form onSubmit={props.submited}>
                <input type="text" placeholder="Enter List" value={props.inputValue} onChange={props.changed} />
                <button type="submit">ADD</button>
                <div className="clearfix"></div>
            </form>
        </div>
    )
}

export default Controls;
