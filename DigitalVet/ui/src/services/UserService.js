import axios from "axios";

const USER_REGISTER_API_URL = "http://localhost:8070/api/v1/digitalVet/register"
const USER_LOGIN_API_URL = "http://localhost:8070/api/v1/digitalVet/login"

class UserService {
    register(user) {
        return axios.post(USER_REGISTER_API_URL, user);
    }

    login(user) {
        return axios.post(USER_LOGIN_API_URL, user)
    }
}

export default new UserService();