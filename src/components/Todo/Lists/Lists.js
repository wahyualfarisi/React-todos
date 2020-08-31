import React from 'react';
import classes from './Lists.module.css';
import Items from './Items/Items';

const Lists = (props) => {

    return (
        <ul className={classes.Lists}>
            {
                props.todos.length > 0 ? props.todos.map(todo => (
                    <Items 
                        key={todo.id}
                        title={todo.title} 
                        checked={todo.checked} 
                        clicked={() => props.onChecklist(todo.id)} 
                        deleted={() => props.onDeletedTodo(todo.id)} />
                )) : null
            }
        </ul>
    )
}

export default Lists
