import axios from "axios";

const USER_API_URL="http://localhost:8070/api/v1/digitalVet/user"
class UserService{

    register(user){
        return axios.post(USER_API_URL,user);
    }
}
export default new UserService();