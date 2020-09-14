import * as actionTypes from './../actions/types';

const initialState = {
    todos: [],
    loading: null,
    error: null 
}

const reducer = ( state = initialState, action ) => {
    switch(action.type)
    {
        case actionTypes.TODO_FETCH_START:
            return {
                ...state,
                loading: true,
                error: null 
            }

        case actionTypes.TODO_FETCH_SUCCESS:
            const data = action.data.map(item => {
                return {
                    ...item,
                    checked: item.checked === 'yes' ? true : false
                }
            })
            return {
                ...state,
                loading: false,
                error: null,
                todos: data
            }
        
        case actionTypes.TODO_FETCH_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        
        case actionTypes.TODO_DELETE_START:
            return {
                ...state,
                error: null
            }
        
        case actionTypes.TODO_DELETE_SUCCESS:
            const updatedTodo = [...state.todos];
            const filter    = updatedTodo.filter(el => el.id !== action.id );
            
            return {
                ...state,
                loading: false,
                error: null,
                todos: filter
            }
        
        case actionTypes.TODO_DELETE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        
        case actionTypes.TODO_ADD_START:
            return {
                ...state,
                loading: true,
                error: null 
            }
        
        case actionTypes.TODO_ADD_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: [
                    ...state.todos, 
                    {...action.data, checked: false }
                ] 
            }

        case actionTypes.TODO_ADD_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        
        case actionTypes.TODO_CHECKED_START:
            return {...state}

        case actionTypes.TODO_CHECKED_SUCCESS: 
            const todoIndex = state.todos.findIndex(el => el.id === action.id);
            let copyTodos   = [...state.todos];
            
            copyTodos[todoIndex] = {
                ...copyTodos[todoIndex],
                checked: !copyTodos[todoIndex].checked
            }

            return {
                ...state,
                loading: false,
                todos: copyTodos
            }
        
        case actionTypes.TODO_CHECKED_FAIL:
            return {
                ...state,
                error: action.error
            }
        
        case actionTypes.TODO_CLEAR_ERROR:
            return {
                ...state,
                loading: false,
                error: null
            }

        default:
            return state;
    }
}

export default reducer;