import axios from "axios";

const CLINICS_API_URL = "http://localhost:8070/api/v1/digitalVet/clinics"
const USERS_API_URL = "http://localhost:8070/api/v1/digitalVet/users"
const CLINICS_ADMINS_API_URL = "http://localhost:8070/api/v1/digitalVet/admins"
const REVIEWS_API_URL = "http://localhost:8070/api/v1/digitalVet/reviews"
const REVIEWS_VET_API_URL = "http://localhost:8070/api/v1/digitalVet/reviews/vet"
const PROGRAMS_API_URL = "http://localhost:8070/api/v1/digitalVet/programs"
const CLINICS_PROGRAM_API_URL = "http://localhost:8070/api/v1/digitalVet/programs/clinic"
const VETS_API_URL = "http://localhost:8070/api/v1/digitalVet/vets"
const VETS_CLINIC_API_URL = "http://localhost:8070/api/v1/digitalVet/vets/clinic"
const SERVICES_API_URL = "http://localhost:8070/api/v1/digitalVet/services"
const SERVICES_CLINIC_API_URL = "http://localhost:8070/api/v1/digitalVet/services/clinic"
const SERVICES_VET_API_URL = "http://localhost:8070/api/v1/digitalVet/services/vet"
const FAVORITES_USER_API_URL = "http://localhost:8070/api/v1/digitalVet/user"
const FAVORITES_API_URL = "http://localhost:8070/api/v1/digitalVet/favorites"
const APPOINTMENTS_API_URL = "http://localhost:8070/api/v1/digitalVet/appointments"
const APPOINTMENTS_USER_API_URL = "http://localhost:8070/api/v1/digitalVet/appointments/user"

class ClinicService {
    addClinic(clinic) {
        return axios.post(CLINICS_API_URL, clinic);
    }

    addReview(review, vetId) {
        return axios.post(REVIEWS_API_URL + "/" + vetId, review);
    }

    addProgram(program) {
        return axios.post(PROGRAMS_API_URL, program);
    }

    addService(service) {
        return axios.post(SERVICES_API_URL, service);
    }

    addVet(vet) {
        return axios.post(VETS_API_URL, vet);
    }

    addAppointment(appointment,userId) {
        return axios.post(USERS_API_URL+ "/" + userId + "/appointments", appointment);
    }

    addAdmin(admin) {
        return axios.post(CLINICS_ADMINS_API_URL, admin);
    }

    addFavorites(userId, clinic) {
        return axios.post(FAVORITES_USER_API_URL + "/" + userId + "/favorites", clinic)
    }

    getAllClinics() {
        return axios.get(CLINICS_API_URL);
    }

    getAllVets() {
        return axios.get(VETS_API_URL);
    }

    getAllServices() {
        return axios.get(SERVICES_API_URL);
    }

    getClinicById(id) {
        return axios.get(CLINICS_API_URL + "/" + id);
    }

    getAllFavoriteByUser(userId) {
        return axios.get(FAVORITES_USER_API_URL + "/" + userId + "/favorites")
    }

    getServiceById(id) {
        return axios.get(SERVICES_API_URL + "/" + id);
    }

    getVetById(id) {
        return axios.get(VETS_API_URL + "/" + id);
    }

    getAdmin(id) {
        return axios.get(CLINICS_ADMINS_API_URL + "/" + id);
    }

    getReviewByVetId(id) {
        return axios.get(REVIEWS_VET_API_URL + "/" + id);
    }

    deleteClinic(id) {
        return axios.delete(CLINICS_API_URL + "/" + id);
    }

    deleteVet(id) {
        return axios.delete(VETS_API_URL + "/" + id);
    }

    deleteFavorites(id) {
        return axios.delete(FAVORITES_API_URL + "/" + id)
    }

    deleteService(id) {
        return axios.delete(SERVICES_API_URL + "/" + id);
    }

    updateClinic(clinic, id) {
        return axios.put(CLINICS_API_URL + "/" + id, clinic);
    }

    updateVet(vet, vetId) {
        return axios.put(VETS_API_URL + "/" + vetId, vet);
    }

    updateProgram(program, id) {
        return axios.put(PROGRAMS_API_URL + "/" + id, program);
    }

    getVetsByClinicId(clinicId) {
        return axios.get(VETS_CLINIC_API_URL + "/" + clinicId);
    }

    getProgramByClinicId(clinicId) {
        return axios.get(CLINICS_PROGRAM_API_URL + "/" + clinicId);
    }

    getAppointmentByServiceId(serviceId) {
        return axios.get(APPOINTMENTS_API_URL + "/" + serviceId);
    }

    getAppointmentByUserId(userId) {
        return axios.get(APPOINTMENTS_USER_API_URL + "/" + userId);
    }

    updateService(service, serviceId) {
        return axios.put(SERVICES_API_URL + "/" + serviceId, service);
    }

    getServicesByVetId(vetId) {
        return axios.get(SERVICES_VET_API_URL + "/" + vetId);
    }

    getServicesByClinicId(clinicId) {
        return axios.get(SERVICES_CLINIC_API_URL + "/" + clinicId);
    }
}

export default new ClinicService();