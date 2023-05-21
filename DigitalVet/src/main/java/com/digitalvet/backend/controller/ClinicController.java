package com.digitalvet.backend.controller;

import com.digitalvet.backend.model.ClinicDto;
import com.digitalvet.backend.services.ClinicService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/digitalVet")
public class ClinicController {
    private final ClinicService clinicService;

    public ClinicController(ClinicService clinicService) {
        this.clinicService = clinicService;
    }

    @PostMapping(path = "/addClinic")
    public Long addClinic(@RequestBody ClinicDto clinicDto) {
        return clinicService.addClinic(clinicDto);
    }

}


