package com.digitalvet.backend.controller;
import com.digitalvet.backend.model.ServiceDto;
import com.digitalvet.backend.services.ServiceService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/service/{id}")
    public ResponseEntity<ServiceDto> getServiceById(@PathVariable Long id) {
        ServiceDto service = null;
        service = serviceService.getServiceById(id);
        return ResponseEntity.ok(service);
    }
}
