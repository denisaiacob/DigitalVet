package com.digitalvet.backend.services;

import com.digitalvet.backend.entity.ClinicEntity;
import com.digitalvet.backend.model.ClinicDto;
import com.digitalvet.backend.repository.ClinicRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClinicServiceImpl implements ClinicService{

    private final ClinicRepository clinicRepository;

    public ClinicServiceImpl(ClinicRepository clinicRepository) {
        this.clinicRepository = clinicRepository;
    }

    @Override
    public Long addClinic(ClinicDto clinicDto) {
        ClinicEntity clinic=new ClinicEntity(
                    clinicDto.getClinicId(),
                    clinicDto.getName(),
                    clinicDto.getCity(),
                    clinicDto.getAddress(),
                    clinicDto.getDescription(),
                    clinicDto.getPhoto());

            clinicRepository.save(clinic);
            return clinic.getClinicId();
    }

    @Override
    public List<ClinicDto> getAllClinics() {
        List<ClinicEntity> clinicEntities
                = clinicRepository.findAll();

        return clinicEntities
                .stream()
                .map(clinic -> new ClinicDto(
                        clinic.getClinicId(),
                        clinic.getName(),
                        clinic.getCity(),
                        clinic.getAddress(),
                        clinic.getDescription(),
                        clinic.getPhoto()))
                .toList();
    }

    @Override
    public ClinicDto getClinicById(Long id) {
        Optional<ClinicEntity> clinicOptional = clinicRepository.findById(id);
        if (clinicOptional.isPresent()) {
            ClinicEntity clinicEntity = clinicOptional.get();
            ClinicDto clinic = new ClinicDto();
            BeanUtils.copyProperties(clinicEntity, clinic);
            return clinic;
        } else {
            throw new EntityNotFoundException("Clinic not found");
        }
    }


    @Override
    public boolean deleteClinic(Long id) {
        Optional<ClinicEntity> clinicOptional = clinicRepository.findById(id);
        if (clinicOptional.isPresent()) {
            ClinicEntity clinic = clinicOptional.get();
            clinicRepository.delete(clinic);
            return true;
        } else {
            return false;
        }
    }


    @Override
    public ClinicDto updateClinic(Long id, ClinicDto clinic) {
        Optional<ClinicEntity> clinicOptional = clinicRepository.findById(id);
        if (clinicOptional.isPresent()) {
            ClinicEntity clinicEntity = clinicOptional.get();
            clinicEntity.setName(clinic.getName());
            clinicEntity.setCity(clinic.getCity());
            clinicEntity.setAddress(clinic.getAddress());
            clinicEntity.setDescription(clinic.getDescription());
            clinicEntity.setPhoto(clinic.getPhoto());

            clinicRepository.save(clinicEntity);
            return clinic;
        } else {
            throw new EntityNotFoundException("Clinic not found");
        }
    }

}
