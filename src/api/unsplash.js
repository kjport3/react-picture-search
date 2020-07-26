import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/search/photos',
    headers: {
        Authorization: 'Client-ID YsIs_vx4_67RMaRCujx9-14JVERJvWkcYlpmIZYcykc'
    }
});