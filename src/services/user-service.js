import Axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8000/api'

class UserService {
    getTodos(){
        return Axios.get(API_URL + '/todo', { headers: authHeader() });
    }

    deleteTodo(id){
        return Axios.delete(API_URL + '/todo/' + id , { headers: authHeader() })
    }

    newTodo(title){
        return Axios.post(API_URL + '/todo/', {
            title: title
        }, { headers: authHeader() })
    }

    checkedToggle(id){
        return Axios.get(API_URL + '/toggle_checked/' + id , { headers: authHeader() })
    }
}

export default new UserService();



