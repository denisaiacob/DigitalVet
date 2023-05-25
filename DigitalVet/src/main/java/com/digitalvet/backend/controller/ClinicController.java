package com.digitalvet.backend.controller;

import com.digitalvet.backend.model.ClinicDto;
import com.digitalvet.backend.services.ClinicService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/digitalVet")
public class ClinicController {
    private final ClinicService clinicService;

    public ClinicController(ClinicService clinicService) {
        this.clinicService = clinicService;
    }

    @PostMapping(path = "/clinic")
    public Long addClinic(@RequestBody ClinicDto clinicDto) {
        return clinicService.addClinic(clinicDto);
    }

    @GetMapping("/clinic")
    public List<ClinicDto> getAllClinics() {
        return  clinicService.getAllClinics();
    }

    @GetMapping("/clinic/{id}")
    public ResponseEntity<ClinicDto> getClinicById(@PathVariable Long id) {
        ClinicDto clinic;
        clinic = clinicService.getClinicById(id);
        return ResponseEntity.ok(clinic);
    }
}


