import axios from "axios";

const CLINIC_API_URL = "http://localhost:8070/api/v1/digitalVet/clinic"
const PROGRAM_API_URL = "http://localhost:8070/api/v1/digitalVet/program"
const VET_API_URL = "http://localhost:8070/api/v1/digitalVet/vet"
const SERVICE_API_URL = "http://localhost:8070/api/v1/digitalVet/service"

class AddClinicService {
    addClinic(clinic) {
        return axios.post(CLINIC_API_URL, clinic);
    }
    addProgram(program) {
        return axios.post(PROGRAM_API_URL, program);
    }
    addService(service) {
        return axios.post(SERVICE_API_URL, service);
    }
    addVet(vet) {
        return axios.post(VET_API_URL, vet);
    }

    getAllClinics(){
        return axios.get(CLINIC_API_URL);
    }
}

export default new AddClinicService();