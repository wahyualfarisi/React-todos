import axios from 'axios';
import AuthHeader from './auth-header';


const API_URL = "http://localhost:8000/api";

class AuthService {
    login(email, password){
        return axios
               .post(`${API_URL}/login`, {
                   email,
                   password
               })
               .then(res => {
                   if(res.data.status){
                       localStorage.setItem('user', JSON.stringify(res.data));
                       return res.data;
                   }else{
                       return undefined;
                   }
               })
               .catch(err => {
                   return {
                       message: 'User not defined',
                       status: false
                   }
               })
    }

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

    logout(){
        return axios
                .post(`${API_URL}/logout`, {}, { headers: AuthHeader() })
                .then(res => {
                    
                    if(res.data.status){
                        localStorage.removeItem('user');

                        return res.data;
                    }else{
                        return undefined;
                    }
                })
                .catch(err => {
                    
                    return  {
                        message: 'Failed logout',
                        status: false
                    }
                })
    }

}

export default new AuthService();