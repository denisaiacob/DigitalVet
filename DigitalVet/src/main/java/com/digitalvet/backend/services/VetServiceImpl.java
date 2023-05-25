package com.digitalvet.backend.services;
import com.digitalvet.backend.entity.VetEntity;
import com.digitalvet.backend.model.VetDto;
import com.digitalvet.backend.repository.VetRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

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
}
