package com.digitalvet.backend.services;

import com.digitalvet.backend.entity.ClinicAdminEntity;
import com.digitalvet.backend.model.ClinicAdminDto;
import com.digitalvet.backend.repository.ClinicAdminRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ClinicAdminServiceImpl implements ClinicAdminService{

    private final ClinicAdminRepository clinicAdminRepository;

    public ClinicAdminServiceImpl(ClinicAdminRepository clinicAdminRepository) {
        this.clinicAdminRepository = clinicAdminRepository;
    }

    @Override
    public Long addAdmin(ClinicAdminDto clinicAdminDto) {
        ClinicAdminEntity entity=new ClinicAdminEntity(
                clinicAdminDto.getClinicId(),
                clinicAdminDto.getUserId());

        clinicAdminRepository.save(entity);
        return entity.getClinicId();
    }

    @Override
    public ClinicAdminDto getClinicByUserId(Long id) {
        Optional<ClinicAdminEntity> optionalClinicAdminEntity
                = clinicAdminRepository.findById(id);
        if (optionalClinicAdminEntity.isPresent()) {
            ClinicAdminEntity clinicAdminEntity = optionalClinicAdminEntity.get();
            ClinicAdminDto clinic = new ClinicAdminDto();
            BeanUtils.copyProperties(clinicAdminEntity, clinic);
            return clinic;
        } else {
            throw new EntityNotFoundException("Clinic admin not found for user ID: " + id);
        }
    }
}
