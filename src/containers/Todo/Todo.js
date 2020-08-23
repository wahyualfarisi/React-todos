import React , { Component } from 'react';
import UserService from './../../services/user-service';

class Todo extends Component {


    componentDidMount() {
        
        UserService.getTodos().then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
            
        });
    }

    render(){
        return (
            <div>
                <h1>TODO LIST</h1>
            </div>
        )
    }
}

export default Todo