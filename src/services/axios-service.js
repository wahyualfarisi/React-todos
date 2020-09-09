import Axios from 'axios';

const instance = Axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api' : 'https://resource-api.alfarisilab.com/api'
});

export default instance;