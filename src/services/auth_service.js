import axios from 'axios';


const API_URL = "http://localhost:8000/api";

class AuthService {
    login(email, password){
        return axios
               .post(`${API_URL}/login`, {
                   email,
                   password
               })
               .then(res => {
                   console.log(res)
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

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'))
    }

}

export default new AuthService();