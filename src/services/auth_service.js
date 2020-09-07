import axios from 'axios';
import AuthHeader from './auth-header';


const API_URL = "http://localhost:8000/api";

class AuthService {
    
    register({ full_name, email, password }) {
        return axios
                .post(`${API_URL}/register`, {
                    full_name,
                    email,
                    password
                })
                .then(res => {
                    return res
                })
                .catch(err => {
                    console.log(err)
                })
    }

    getCurrentUser() {
        return JSON.parse( localStorage.getItem('user') )
    }

}

export default new AuthService();