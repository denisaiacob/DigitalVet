import axios from "axios";

const CLINIC_API_URL = "http://localhost:8070/api/v1/digitalVet/clinic"
const REVIEW_API_URL = "http://localhost:8070/api/v1/digitalVet/review"
const PROGRAM_API_URL = "http://localhost:8070/api/v1/digitalVet/program"
const CLINIC_PROGRAM_API_URL = "http://localhost:8070/api/v1/digitalVet/clinic/program"
const VET_API_URL = "http://localhost:8070/api/v1/digitalVet/vet"
const VETS_API_URL = "http://localhost:8070/api/v1/digitalVet/vets"
const SERVICE_API_URL = "http://localhost:8070/api/v1/digitalVet/service"
const SERVICES_API_URL = "http://localhost:8070/api/v1/digitalVet/services"
const CLINIC_SERVICES_API_URL = "http://localhost:8070/api/v1/digitalVet/cservices"

class ClinicService {
    addClinic(clinic) {
        return axios.post(CLINIC_API_URL, clinic);
    }
    addReview(review) {
        return axios.post(REVIEW_API_URL, review);
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
    getAllReviews(){
        return axios.get(REVIEW_API_URL);
    }
    getAllVets(){
        return axios.get(VET_API_URL);
    }
    getAllServices(){
        return axios.get(SERVICE_API_URL);
    }
    getClinicById(id) {
        return axios.get(CLINIC_API_URL + "/" + id);
    }

    getServiceById(id) {
        return axios.get(SERVICE_API_URL + "/" + id);
    }

    getVetById(id) {
        return axios.get(VET_API_URL + "/" + id);
    }

    getReviewByVetId(id) {
        return axios.get(REVIEW_API_URL + "/" + id);
    }

    deleteClinic(id) {
        return axios.delete(CLINIC_API_URL + "/" + id);
    }

    updateClinic(clinic, id) {
        return axios.put(CLINIC_API_URL + "/" + id, clinic);
    }

    updateVet(vet, vetId) {
        return axios.put(VET_API_URL + "/" + vetId, vet);
    }

    getVetsByClinicId(clinicId){
        return axios.get(VETS_API_URL + "/" + clinicId);
    }

    getProgramByClinicId(clinicId){
        return axios.get(CLINIC_PROGRAM_API_URL + "/" + clinicId);
    }

    updateService(service, serviceId) {
        return axios.put(SERVICE_API_URL + "/" + serviceId, service);
    }

    getServicesByVetId(vetId){
        return axios.get(SERVICES_API_URL + "/" + vetId);
    }

    getServicesByClinicId(clinicId){
        return axios.get(CLINIC_SERVICES_API_URL + "/" + clinicId);
    }
}

export default new ClinicService();