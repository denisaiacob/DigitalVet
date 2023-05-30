package com.digitalvet.backend.services;

import com.digitalvet.backend.model.VetDto;

import java.util.List;

public interface VetService {
    Long addVet(VetDto vetDto);

    VetDto getVetById(Long id);

    boolean deleteVet(Long id);

    VetDto updateVet(Long id, VetDto vet);

    List<VetDto> getVetByClinicId(Long clinicId);
}
