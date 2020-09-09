import React from 'react';
import classes from './Controls.module.css';
import { connect } from 'react-redux';

const Controls = (props) => {
    let completed = props.todos.filter(item => item.checked);

    return (
        <div className={classes.Controls}>
            
            <h2>My Day</h2>
            
            <h5>{completed.length} / {props.todos.length} <br/>Lists </h5>
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

const mapStateToProps = state => {
    return {
        todos: state.todo.todos 
    }
}

export default connect(mapStateToProps)(Controls);
