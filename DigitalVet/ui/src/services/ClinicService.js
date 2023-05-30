import axios from "axios";

const CLINIC_API_URL = "http://localhost:8070/api/v1/digitalVet/clinic"
const PROGRAM_API_URL = "http://localhost:8070/api/v1/digitalVet/program"
const VET_API_URL = "http://localhost:8070/api/v1/digitalVet/vet"
const VETS_API_URL = "http://localhost:8070/api/v1/digitalVet/vets"
const SERVICE_API_URL = "http://localhost:8070/api/v1/digitalVet/service"

class ClinicService {
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
    getClinicById(id) {
        return axios.get(CLINIC_API_URL + "/" + id);
    }

    deleteClinic(id) {
        return axios.delete(CLINIC_API_URL + "/" + id);
    }

    updateClinic(clinic, id) {
        return axios.put(CLINIC_API_URL + "/" + id, clinic);
    }

    updateVet(vet, clinicId) {
        return axios.put(VET_API_URL + "/" + clinicId, vet);
    }

    getVetsByClinicId(clinicId){
        return axios.get(VETS_API_URL + "/" + clinicId);
    }
}

export default new ClinicService();