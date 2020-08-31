import React , { Component } from 'react';
import classes from './Todo.module.css';
import UserService from './../../services/user-service';
import { connect } from 'react-redux'
import Controls from '../../components/Todo/Controls/Controls';
import Lists from '../../components/Todo/Lists/Lists';

class Todo extends Component {

    state = {
        todos: [
            {
                id: 1,
                title: 'Create UI & UX',
                checked: false
            },
            {
                id: 2,
                title: 'Design System Requirement',
                checked: true
            },
            {
                id: 3,
                title: 'Create DATABASE',
                checked: false
            },
            {
                id: 4,
                title: 'Analyz Folder Structure',
                checked: false
            }
        ],
        value: ''
    }

    componentDidMount() {
        if(this.props.auth.isLogin){
            UserService.getTodos().then(res => {
                console.log(res)
            })
            .catch(err => {
                
            });
        }
       
    }

    onChecklistHandler = (id) => {
       //find element index
       const elementIndex = this.state.todos.findIndex(el => el.id === id);
       //create copy on array state
       let newArray = [...this.state.todos];

       //mutate todo with elementIndex
       newArray[elementIndex] = {
           ...newArray[elementIndex],
           checked: !newArray[elementIndex].checked
       };

       //updated the state
       this.setState({
           todos: newArray
       });
    }

    onDeleteHandler = ( id ) => {
       const todos       = [...this.state.todos];
       const newTodo     = todos.filter(todo => todo.id !== id);
       this.setState({
           todos: newTodo
       });
    }

    onSaveTodoHandler = (event) => {
        event.preventDefault();
        let inputValue = this.state.value.trim();
        let newTodo       = [...this.state.todos, { id: new Date().getTime(), title: inputValue, checked: false }]

        if(inputValue !== "") {
            this.setState({
                todos: newTodo,
                value: ''
            })
        }

        return false;
    }

    onChangeHandler = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    render(){
        return (
            <div className={classes.Todo}>
                <Controls 
                    submited={this.onSaveTodoHandler} 
                    inputValue={this.state.value}
                    changed={this.onChangeHandler} />
                <Lists 
                    todos={this.state.todos} 
                    onChecklist={this.onChecklistHandler} 
                    onDeletedTodo={this.onDeleteHandler} />
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