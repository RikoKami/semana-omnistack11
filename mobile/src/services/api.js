import axios from 'axios';
import { IP } from 'react-native-dotenv';

const api = axios.create({
    baseURL: IP
});

export default api;