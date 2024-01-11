import axios from 'axios';
import authHeader from '../auth-service/auth-header';
const API_URL = 'http://localhost:8080/';

class PatientService {
    getPatients(query) {
        return axios.get(API_URL + 'patients?q=' + query, { headers: authHeader() });
    }

    getPatient(id) {
        return axios.get(API_URL + `patients/${id}`, { headers: authHeader() });
    }
    createPatient(data) {
        return axios.post(API_URL + `patients`, data, { headers: authHeader() });
    }
}

export default new PatientService();