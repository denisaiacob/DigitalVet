package com.digitalvet.backend.controller;

import com.digitalvet.backend.model.ServiceDto;
import com.digitalvet.backend.model.UserDto;
import com.digitalvet.backend.services.ServiceService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/digitalVet")
public class ServiceController {
    private final ServiceService serviceService;

    public ServiceController(ServiceService serviceService) {
        this.serviceService = serviceService;
    }

    @PostMapping(path = "/addService")
    public Long addService(@RequestBody ServiceDto serviceDto) {
        return serviceService.addService(serviceDto);
    }
}
