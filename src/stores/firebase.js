import axios from 'axios';

const instance = axios.create({
    baseURL:'https://telemetryfp-default-rtdb.firebaseio.com'
});

export default instance;