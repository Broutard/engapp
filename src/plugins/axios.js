import axios from 'axios';
import app from '../main'; // import app instance

const instance = axios.create({
    baseURL: (process.env.VUE_APP_API_URL || '') + '/api',
    // timeout: 10000,
});

instance.interceptors.request.use(config => {
    app.$Progress.start(); // for every request start the progress
    return config;
});

instance.interceptors.response.use(response => {
    app.$Progress.finish(); // finish when a response is received
    return response;
});

export default instance; // export axios instance to be imported in your app
