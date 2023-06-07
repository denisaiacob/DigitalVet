package com.digitalvet.backend.services;

import com.digitalvet.backend.model.ClinicAdminDto;

public interface ClinicAdminService {
    Long addAdmin(ClinicAdminDto clinicAdminDto);

    ClinicAdminDto getClinicByUserId(Long id);
}
