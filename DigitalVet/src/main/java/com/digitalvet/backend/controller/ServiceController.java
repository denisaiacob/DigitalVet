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

    @PostMapping(path = "/service")
    public Long addService(@RequestBody ServiceDto serviceDto) {
        return serviceService.addService(serviceDto);
    }

    @GetMapping("/service")
    public List<ServiceDto> getAllServices() {
        return  serviceService.getAllServices();
    }

    @GetMapping("/service/{id}")
    public ResponseEntity<ServiceDto> getServiceById(@PathVariable Long id) {
        ServiceDto service = null;
        service = serviceService.getServiceById(id);
        return ResponseEntity.ok(service);
    }

    @GetMapping("/services/{id}")
    public List<ServiceDto> getServiceByVetId(@PathVariable Long id) {
        return  serviceService.getServiceByVetId(id);
    }

    @GetMapping("/clinic/services/{id}")
    public List<ServiceDto> getServiceByClinicId(@PathVariable Long id) {
        return  serviceService.getServiceByClinicId(id);
    }

    @PutMapping("/service/{id}")
    public ResponseEntity<ServiceDto> updateService(@PathVariable Long id,
                                            @RequestBody ServiceDto service) {
        service = serviceService.updateService(id, service);
        return ResponseEntity.ok(service);
    }

    @DeleteMapping("/service/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteService(@PathVariable Long id) {
        boolean deleted = false;
        deleted = serviceService.deleteService(id);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }
}
