package com.digitalvet.backend.controller;
import com.digitalvet.backend.model.ServiceDto;
import com.digitalvet.backend.services.ServiceService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public List<ServiceDto> getServiceByVetId(@PathVariable String id) {
        return  serviceService.getServiceByVetId(Long.valueOf(id));
    }

    @GetMapping("/clinic/services/{id}")
    public List<ServiceDto> getServiceByClinicId(@PathVariable String id) {
        return  serviceService.getServiceByClinicId(Long.valueOf(id));
    }

    @PutMapping("/service/{id}")
    public ResponseEntity<ServiceDto> updateService(@PathVariable Long id,
                                            @RequestBody ServiceDto service) {
        service = serviceService.updateService(id, service);
        return ResponseEntity.ok(service);
    }
}
