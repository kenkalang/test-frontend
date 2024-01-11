import axios from 'axios';
import authHeader from '../auth-service/auth-header';
const API_URL = 'http://localhost:8080/';

class TtvRecordService {
    getTtvRecord(id) {
        return axios.get(API_URL + `ttv/${id}`, { headers: authHeader() });
    }
    createTtvRecord(data) {
        return axios.post(API_URL + `ttv`, data, { headers: authHeader() });
    }
}

export default new TtvRecordService();