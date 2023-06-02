package com.digitalvet.backend.services;
import com.digitalvet.backend.entity.ProgramEntity;
import com.digitalvet.backend.entity.VetEntity;
import com.digitalvet.backend.model.ProgramDto;
import com.digitalvet.backend.model.VetDto;
import com.digitalvet.backend.repository.ProgramRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;

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

    @Override
    public ProgramDto getProgramById(Long id) {
        ProgramEntity programEntity
                = programRepository.findById(id).get();
        ProgramDto program = new ProgramDto();
        BeanUtils.copyProperties(programEntity, program);
        return program;
    }

    @Override
    public ProgramDto getProgramByClinicId(Long clinicId) {
        ProgramEntity programEntity
                = programRepository.findByClinicId(clinicId).get();
        ProgramDto program = new ProgramDto();
        BeanUtils.copyProperties(programEntity, program);
        return program;
    }
}
