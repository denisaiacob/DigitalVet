package com.digitalvet.backend.controller;

import com.digitalvet.backend.model.ClinicAdminDto;
import com.digitalvet.backend.services.ClinicAdminService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/digitalVet")
public class ClinicAdminController {

    private final ClinicAdminService clinicAdminService;

    public ClinicAdminController(ClinicAdminService clinicAdminService) {
        this.clinicAdminService = clinicAdminService;
    }

    @PostMapping(path = "/admin")
    public Long addClinic(@RequestBody ClinicAdminDto clinicAdminDto) {
        return clinicAdminService.addAdmin(clinicAdminDto);
    }

    @GetMapping("/admin/{id}")
    public ResponseEntity<ClinicAdminDto> getClinicByUserId(@PathVariable Long id) {
        ClinicAdminDto admin;
        admin = clinicAdminService.getClinicByUserId(id);
        return ResponseEntity.ok(admin);
    }
}
