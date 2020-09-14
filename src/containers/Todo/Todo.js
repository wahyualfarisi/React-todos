import React , { Component } from 'react';
import classes from './Todo.module.css';
import { connect } from 'react-redux'
import Controls from '../../components/Todo/Controls/Controls';
import Lists from '../../components/Todo/Lists/Lists';
import * as actions from './../../store/actions/index';
import Empty from '../../components/UI/Icons/Empty';
import Modal from './../../components/UI/Modal/Modal';


class Todo extends Component {
    
    state = {
        value: ''
    }

    componentDidMount() {
        this.props.onFetchTodo()
       
    }

    onChecklistHandler = (id) => {
        this.props.onCheckedToggle( id )
    }

    onDeleteHandler = ( id ) => {
        this.props.onDeleteTodo(id);
    }

    onSaveTodoHandler = (event) => {
        event.preventDefault();
        let inputValue = this.state.value.trim();
        
        if(inputValue !== "") {
            this.props.onCreateTodo(inputValue)
            this.setState({
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
        let listTodo = null;

        if(this.props.todos.length > 0) {
            listTodo = (
                <Lists 
                    todos={this.props.todos} 
                    onChecklist={this.onChecklistHandler} 
                    onDeletedTodo={this.onDeleteHandler} />
            );
        }else {
            listTodo = <Empty text="Today List Empty" />
        }


        return (
            <div className={classes.Todo}>
                
                {
                    this.props.error ? 
                        <Modal 
                            show={this.props.error} 
                            modalClosed={this.props.onTodoClearError} > 
                                {this.props.error.message} 
                        </Modal> : null
                }

                <Controls 
                    submited={this.onSaveTodoHandler} 
                    inputValue={this.state.value}
                    changed={this.onChangeHandler} />
                <div>
                     {listTodo}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        auth: state.auth,
        todos: state.todo.todos,
        loading: state.todo.loading,
        error: state.todo.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchTodo: () => dispatch( actions.todo_fetch( ) ) ,
        onDeleteTodo: ( id ) => dispatch( actions.todo_delete( id ) ),
        onCreateTodo: (title) => dispatch( actions.todo_add(title) ),
        onCheckedToggle: (id) => dispatch( actions.todo_checked(id)),
        onTodoClearError: () => dispatch( actions.todo_clear_error() ) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)( Todo ) 