package com.digitalvet.backend.controller;

import com.digitalvet.backend.model.ClinicDto;
import com.digitalvet.backend.services.ClinicService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    @DeleteMapping("/clinic/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteClinic(@PathVariable Long id) {
        boolean deleted = false;
        deleted = clinicService.deleteClinic(id);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/clinic/{id}")
    public ResponseEntity<ClinicDto> updateClinic(@PathVariable Long id,
                                                   @RequestBody ClinicDto clinic) {
        clinic = clinicService.updateClinic(id, clinic);
        return ResponseEntity.ok(clinic);
    }
}


