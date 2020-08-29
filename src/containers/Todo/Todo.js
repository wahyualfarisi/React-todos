import React , { Component } from 'react';
import classes from './Todo.module.css';
import UserService from './../../services/user-service';
import { connect } from 'react-redux'

class Todo extends Component {

    componentDidMount() {
        
        UserService.getTodos().then(res => {
            console.log(res)
        })
        .catch(err => {
            
        });
    }

    render(){
        let todo = (
            <h1>My Day</h1>
        )
        if(!this.props.auth.isLogin) {
            todo = <h1>Unauthorized 401 </h1>
        }
        return (
            <div className={classes.Todo}>
                {todo}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Todo) 