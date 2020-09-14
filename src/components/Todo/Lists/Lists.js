import React from 'react';
import classes from './Lists.module.css';
import Items from './Items/Items';
import CSSTransition from 'react-transition-group/CSSTransition';
import TransitionGroup from 'react-transition-group/TransitionGroup';

const Lists = (props) => {

    return (
        <TransitionGroup component="ul" className={classes.Lists}>
            {
                props.todos.length > 0 ? props.todos.map(todo => (
                    <CSSTransition 
                        key={todo.id}
                        classNames="fade"
                        timeout={300}
                        >
                        <Items 
                            title={todo.title} 
                            checked={todo.checked} 
                            clicked={() => props.onChecklist(todo.id)} 
                            deleted={() => props.onDeletedTodo(todo.id)} />
                    </CSSTransition>
                )) : null
            }
        </TransitionGroup>
    )
}

export default Lists
