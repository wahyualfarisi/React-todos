import Axios from './axios-service';
import authHeader from './auth-header';

class UserService {
    getTodos(){
        return Axios.get('/todo', { headers: authHeader() });
    }

    deleteTodo(id){
        return Axios.delete('/todo/' + id , { headers: authHeader() })
    }

    newTodo(title){
        return Axios.post('/todo/', {
            title: title
        }, { headers: authHeader() })
    }

    checkedToggle(id){
        return Axios.get('/toggle_checked/' + id , { headers: authHeader() })
    }
}

export default new UserService();



