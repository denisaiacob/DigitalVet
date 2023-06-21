package com.digitalvet.backend.services;

import com.digitalvet.backend.entity.ClinicAdminEntity;
import com.digitalvet.backend.model.ClinicAdminDto;
import com.digitalvet.backend.repository.ClinicAdminRepository;
import com.digitalvet.backend.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ClinicAdminServiceImpl implements ClinicAdminService{

    private final ClinicAdminRepository clinicAdminRepository;
    private final UserRepository userRepository;

    public ClinicAdminServiceImpl(ClinicAdminRepository clinicAdminRepository, UserRepository userRepository) {
        this.clinicAdminRepository = clinicAdminRepository;
        this.userRepository = userRepository;
    }

    @Override
    public ResponseEntity<ClinicAdminEntity> addAdmin(ClinicAdminDto clinicAdminDto) {
        ClinicAdminEntity entity=new ClinicAdminEntity(
                clinicAdminDto.getId(),
                clinicAdminDto.getClinicId());

        ClinicAdminEntity response= userRepository.findById(clinicAdminDto.getUserId()).map(user -> {
            entity.setUser(user);
            return clinicAdminRepository.save(entity);
        }).orElseThrow(() -> new ResourceNotFoundException("Not found user with id = " + clinicAdminDto.getUserId()));

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @Override
    public ClinicAdminDto getClinicByUserId(Long id) {
        Optional<ClinicAdminEntity> optionalClinicAdminEntity
                = clinicAdminRepository.findByUserId(id);
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
