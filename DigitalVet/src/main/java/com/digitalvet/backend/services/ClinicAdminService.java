package com.digitalvet.backend.services;

import com.digitalvet.backend.entity.ClinicAdminEntity;
import com.digitalvet.backend.model.ClinicAdminDto;
import org.springframework.http.ResponseEntity;

public interface ClinicAdminService {
    ResponseEntity<ClinicAdminEntity> addAdmin(ClinicAdminDto clinicAdminDto);

    ClinicAdminDto getClinicByUserId(Long id);
}
