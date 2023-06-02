package com.digitalvet.backend.services;
import com.digitalvet.backend.entity.VetEntity;
import com.digitalvet.backend.model.VetDto;
import com.digitalvet.backend.repository.VetRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VetServiceImpl implements VetService {

    private final VetRepository vetRepository;

    public VetServiceImpl(VetRepository vetRepository) {
        this.vetRepository = vetRepository;
    }

    @Override
    public Long addVet(VetDto vetDto) {
        VetEntity vet = new VetEntity(
                vetDto.getVetId(),
                vetDto.getClinicId(),
                vetDto.getName(),
                vetDto.getFunction(),
                vetDto.getDescription(),
                vetDto.getPhoto());

        vetRepository.save(vet);
        return vet.getVetId();
    }

    @Override
    public VetDto getVetById(Long id) {
        VetEntity vetEntity
                = vetRepository.findById(id).get();
        VetDto vet = new VetDto();
        BeanUtils.copyProperties(vetEntity, vet);
        return vet;
    }

    @Override
    public boolean deleteVet(Long id) {
        VetEntity vet = vetRepository.findById(id).get();
        vetRepository.delete(vet);
        return true;
    }

    @Override
    public VetDto updateVet(Long id, VetDto vet) {
        VetEntity vetEntity
                = vetRepository.findById(id).get();
        vetEntity.setName(vet.getName());
        vetEntity.setFunction(vet.getFunction());
        vetEntity.setDescription(vet.getDescription());
        vetEntity.setPhoto(vet.getPhoto());

        vetRepository.save(vetEntity);
        return vet;
    }

    @Override
    public List<VetDto> getVetByClinicId(Long clinicId) {
        List<VetEntity> vetEntities
                = vetRepository.findByClinicId(clinicId).get();

        return vetEntities
                .stream()
                .map(vet -> new VetDto(
                        vet.getVetId(),
                        vet.getClinicId(),
                        vet.getName(),
                        vet.getFunction(),
                        vet.getDescription(),
                        vet.getPhoto()))
                .toList();
    }

    @Override
    public List<VetDto> getAllVets() {
        List<VetEntity> vetEntities
                = vetRepository.findAll();

        return vetEntities
                .stream()
                .map(vet -> new VetDto(
                        vet.getVetId(),
                        vet.getClinicId(),
                        vet.getName(),
                        vet.getFunction(),
                        vet.getDescription(),
                        vet.getPhoto()))
                .toList();
    }
}
