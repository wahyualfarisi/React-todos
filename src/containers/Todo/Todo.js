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
            <div>
                <div className={classes.Todo_header}>

                    <h2>My Day</h2>
                    <h5>29 August 2020</h5>
                    <div className={classes.ClearFix}></div>

                    <input type="text" placeholder="Enter List"  />
                    <button>ADD</button>
                    <div className={classes.ClearFix}></div>
                    
                </div>

                <ul className={classes.Lists}>
                    <li>Hit the gym Hit the gym <span>x</span> </li>
                    <li className={classes.Checked}>Pay bills <span>x</span></li>
                    <li>Meet George <span>x</span></li>
                    <li>Buy eggs <span>x</span></li>
                    <li className={classes.Checked}>Read a book <span>x</span></li>
                    <li>Organize office <span>x</span></li>
                    <li>Meet George <span>x</span></li>
                    <li>Buy eggs <span>x</span></li>
                    <li>Meet George <span>x</span></li>
                    <li>Buy eggs <span>x</span></li>
                    <li>Meet George <span>x</span></li>
                    <li>Buy eggs <span>x</span></li>
                    <li>Meet George <span>x</span></li>
                    <li>Buy eggs <span>x</span></li>
                    <li>Meet George <span>x</span></li>
                    <li>Buy eggs <span>x</span></li>
                </ul>
            </div>
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