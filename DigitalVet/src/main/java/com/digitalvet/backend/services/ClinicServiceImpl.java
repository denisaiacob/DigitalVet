package com.digitalvet.backend.services;

import com.digitalvet.backend.entity.ClinicEntity;
import com.digitalvet.backend.model.ClinicDto;
import com.digitalvet.backend.repository.ClinicRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;

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
        ClinicEntity clinicEntity
                = clinicRepository.findById(id).get();
        ClinicDto clinic = new ClinicDto();
        BeanUtils.copyProperties(clinicEntity, clinic);
        return clinic;
    }
}
