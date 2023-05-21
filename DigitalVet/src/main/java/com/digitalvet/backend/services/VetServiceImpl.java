package com.digitalvet.backend.services;

import com.digitalvet.backend.entity.VetEntity;
import com.digitalvet.backend.model.VetDto;
import com.digitalvet.backend.repository.VetRepository;
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
                vetDto.getName(),
                vetDto.getFunction(),
                vetDto.getDescription(),
                vetDto.getPhoto());

        vetRepository.save(vet);
        return vet.getVetId();
    }
}
