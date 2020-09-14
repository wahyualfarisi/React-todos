import * as actionTypes from './types';
import userService from './../../services/user-service';

export const todo_fetch_start = () => {
    return {
        type: actionTypes.TODO_FETCH_START
    }
}

export const todo_fetch_success = ( data ) => {
    return {
        type: actionTypes.TODO_FETCH_SUCCESS,
        data: data
    }
}

export const todo_fetch_fail = (error) => {
    return {
        type: actionTypes.TODO_FETCH_FAIL,
        error: error
    }
}

export const todo_delete_start = () => {
    return {
        type: actionTypes.TODO_DELETE_START
    }
}

export const todo_delete_success = (id) => {
    return {
        type: actionTypes.TODO_DELETE_SUCCESS,
        id: id 
    }
}

export const todo_delete_fail = (error) => {
    return {
        type: actionTypes.TODO_DELETE_FAIL,
        error: error
    }
}

//add
export const todo_add_start = () => {
    return {
        type: actionTypes.TODO_ADD_START
    }
}

export const todo_add_success = (data) => {
    return {
        type: actionTypes.TODO_ADD_SUCCESS,
        data: data 
    }
}

export const todo_add_fail = (error) => {
    return {
        type: actionTypes.TODO_ADD_FAIL,
        error: error
    }
}
//


//Checked
export const todo_checked_start = () => {
    return {
        type: actionTypes.TODO_CHECKED_START
    }
}

export const todo_checked_success = ( id ) => {
    return {
        type: actionTypes.TODO_CHECKED_SUCCESS,
        id: id
    }
}

export const todo_checked_fail = ( error ) => {
    return {
        type: actionTypes.TODO_CHECKED_FAIL,
        error: error
    }
}

//error
export const todo_clear_error = () => {
    return {
        type: actionTypes.TODO_CLEAR_ERROR
    }
}

export const todo_fetch = () => {
    return dispatch => {
        dispatch( todo_fetch_start() );
        userService.getTodos()
                    .then(res => {
                        dispatch( todo_fetch_success(res.data.results) )
                    })
                    .catch(err => {
                        dispatch( todo_fetch_fail(err) )
                    })
    }
}

export const todo_delete = (id) => {
    return dispatch => {
        dispatch( todo_delete_start() );
        userService.deleteTodo(id)
                   .then(res => {
                       dispatch( todo_delete_success(id));
                   })
                   .catch(err => {
                       dispatch( todo_delete_fail(err) )
                   });
    }
}

export const todo_add = ( title ) => {
    return dispatch => {
        dispatch( todo_add_start() )
        userService.newTodo(title)
                   .then(res => {
                       dispatch( todo_add_success(res.data.results) )
                   })
                   .catch(err => {
                       dispatch( todo_add_fail(err))
                   })
    }
}

export const todo_checked = ( id ) => {
    
    return dispatch => {
        dispatch( todo_checked_start() )
        userService.checkedToggle(id)
                   .then(res => {
                        dispatch( todo_checked_success(id) )
                   })
                   .catch(err => {
                       dispatch( todo_checked_fail(err) )
                   })
    }
}