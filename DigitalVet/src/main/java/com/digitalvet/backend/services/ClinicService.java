package com.digitalvet.backend.services;

import com.digitalvet.backend.model.ClinicDto;

import java.util.List;

public interface ClinicService {
    Long addClinic(ClinicDto clinicDto);

    List<ClinicDto> getAllClinics();

    ClinicDto getClinicById(Long id);
}
