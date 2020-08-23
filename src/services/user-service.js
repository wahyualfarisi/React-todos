import Axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8000/api'

class UserService {
    getTodos(){
        return Axios.get(API_URL + '/todo', { headers: authHeader() });
    }
}

export default new UserService();



