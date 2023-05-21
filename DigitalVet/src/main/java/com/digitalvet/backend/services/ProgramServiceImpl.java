package com.digitalvet.backend.services;

import com.digitalvet.backend.entity.ProgramEntity;
import com.digitalvet.backend.model.ProgramDto;
import com.digitalvet.backend.repository.ProgramRepository;
import org.springframework.stereotype.Service;

@Service
public class ProgramServiceImpl implements ProgramService {
    private final ProgramRepository programRepository;

    public ProgramServiceImpl(ProgramRepository programRepository) {
        this.programRepository = programRepository;
    }

    @Override
    public Long addProgram(ProgramDto programDto) {
        ProgramEntity program = new ProgramEntity(
                programDto.getProgramId(),
                programDto.getClinicId(),
                programDto.getMonths(),
                programDto.getTuesday(),
                programDto.getWednesday(),
                programDto.getThursday(),
                programDto.getFriday(),
                programDto.getSaturday(),
                programDto.getSunday());

        programRepository.save(program);
        return program.getProgramId();
    }
}
