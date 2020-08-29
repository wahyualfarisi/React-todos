import React , { Component } from 'react';
import classes from './Todo.module.css';
import UserService from './../../services/user-service';

class Todo extends Component {

    componentDidMount() {
        UserService.getTodos().then(res => {
            console.log(res)
        })
        .catch(err => {
            window.location.reload()
        });
    }

    render(){
        return (
            <div className={classes.Todo}>
                <h1>My Day</h1>
            </div>
        )
    }
}

export default Todo