import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-ef32b.firebaseio.com/'
});

export default instance