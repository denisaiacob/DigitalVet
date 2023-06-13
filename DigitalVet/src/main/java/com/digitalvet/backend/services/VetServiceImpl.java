package com.digitalvet.backend.services;
import com.digitalvet.backend.entity.VetEntity;
import com.digitalvet.backend.model.VetDto;
import com.digitalvet.backend.repository.VetRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
        Optional<VetEntity> vetEntityOptional = vetRepository.findById(id);
        if (vetEntityOptional.isPresent()) {
            VetEntity vetEntity = vetEntityOptional.get();
            VetDto vet = new VetDto();
            BeanUtils.copyProperties(vetEntity, vet);
            return vet;
        } else {
            throw new EntityNotFoundException("Vet not found for ID: " + id);
        }
    }

    @Override
    public boolean deleteVet(Long id) {
        Optional<VetEntity> vetOptional = vetRepository.findById(id);
        if (vetOptional.isPresent()) {
            VetEntity vet = vetOptional.get();
            vetRepository.delete(vet);
            return true;
        } else {
            throw new EntityNotFoundException("Vet not found");
        }
    }

    @Override
    public VetDto updateVet(Long id, VetDto vet) {
        Optional<VetEntity> vetOptional = vetRepository.findById(id);
        if (vetOptional.isPresent()) {
            VetEntity vetEntity = vetOptional.get();
            vetEntity.setName(vet.getName());
            vetEntity.setFunction(vet.getFunction());
            vetEntity.setDescription(vet.getDescription());
            vetEntity.setPhoto(vet.getPhoto());

            vetRepository.save(vetEntity);
            return vet;
        } else {
            throw new EntityNotFoundException("Vet not found for ID: " + id);
        }
    }


    @Override
    public List<VetDto> getVetByClinicId(Long clinicId) {
        Optional<List<VetEntity>> vetOptional = vetRepository.findByClinicId(clinicId);
        if (vetOptional.isPresent()) {
            List<VetEntity> vetEntities = vetOptional.get();

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
        } else {
            throw new EntityNotFoundException("Vet not found for clinic: " + clinicId);
        }
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
