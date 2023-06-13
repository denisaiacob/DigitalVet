package com.digitalvet.backend.controller;

import com.digitalvet.backend.model.ServiceDto;
import com.digitalvet.backend.services.ServiceService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/digitalVet")
public class ServiceController {
    private final ServiceService serviceService;

    public ServiceController(ServiceService serviceService) {
        this.serviceService = serviceService;
    }

    @PostMapping(path = "/services")
    public Long addService(@RequestBody ServiceDto serviceDto) {
        return serviceService.addService(serviceDto);
    }

    @GetMapping("/services")
    public List<ServiceDto> getAllServices() {
        return serviceService.getAllServices();
    }

    @GetMapping("/services/{serviceId}")
    public ResponseEntity<ServiceDto> getServiceById(@PathVariable Long serviceId) {
        ServiceDto service = serviceService.getServiceById(serviceId);
        return ResponseEntity.ok(service);
    }

    @GetMapping("/services/vet/{vetId}")
    public List<ServiceDto> getServiceByVetId(@PathVariable Long vetId) {
        return serviceService.getServiceByVetId(vetId);
    }

    @GetMapping("/services/clinic/{clinicId}")
    public List<ServiceDto> getServiceByClinicId(@PathVariable Long clinicId) {
        return serviceService.getServiceByClinicId(clinicId);
    }

    @PutMapping("/services/{id}")
    public ResponseEntity<ServiceDto> updateService(@PathVariable Long id,
                                                    @RequestBody ServiceDto service) {
        service = serviceService.updateService(id, service);
        return ResponseEntity.ok(service);
    }

    @DeleteMapping("/services/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteService(@PathVariable Long id) {
        boolean deleted = serviceService.deleteService(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }
}
