import axios from "axios";

const ADD_CLINIC_API_URL = "http://localhost:8070/api/v1/digitalVet/addClinic"
const ADD_PROGRAM_API_URL = "http://localhost:8070/api/v1/digitalVet/addProgram"
const ADD_VET_API_URL = "http://localhost:8070/api/v1/digitalVet/addVet"
const ADD_SERVICE_API_URL = "http://localhost:8070/api/v1/digitalVet/addService"

class AddClinicService {
    addClinic(clinic) {
        return axios.post(ADD_CLINIC_API_URL, clinic);
    }
    addProgram(program) {
        return axios.post(ADD_PROGRAM_API_URL, program);
    }
    addService(service) {
        return axios.post(ADD_SERVICE_API_URL, service);
    }
    addVet(vet) {
        return axios.post(ADD_VET_API_URL, vet);
    }
}

export default new AddClinicService();