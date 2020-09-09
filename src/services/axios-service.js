import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'http://localhost:8000/api'
});

export default instance;