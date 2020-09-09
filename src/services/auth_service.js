import Axios from './axios-service';
import authHeader from './auth-header';

class AuthService {

    login(email, password){
        return Axios.post('/login', { email, password });
    }

    logout(){
        return Axios.post(`/logout`, {}, { headers: authHeader() })
    }
    
    register({ full_name, email, password }) {
        return Axios
                .post(`/register`, {
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