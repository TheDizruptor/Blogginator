import axios from 'axios'

const USER = 'root';
const PASSWORD = 'password';
const API_URL = 'http://localhost:8080';
const GREETING_API_URL = `/greeting?name=`

class GreetingService {

    getGreeting(name) {
      return axios.get(`${API_URL}${GREETING_API_URL}${name}`, { headers: {authorization: 'Basic ' + window.btoa(USER + ":" + PASSWORD)}})
    }
}

export default new GreetingService()