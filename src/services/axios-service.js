import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https://resource-api.alfarisilab.com/api'
});

export default instance;