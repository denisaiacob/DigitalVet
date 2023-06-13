package com.digitalvet.backend.services;

import com.digitalvet.backend.entity.ProgramEntity;
import com.digitalvet.backend.model.ProgramDto;
import com.digitalvet.backend.repository.ProgramRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.Optional;

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
                programDto.getMonday(),
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
        Optional<ProgramEntity> programEntityOptional = programRepository.findById(id);
        if (programEntityOptional.isPresent()) {
            ProgramEntity programEntity = programEntityOptional.get();
            ProgramDto program = new ProgramDto();
            BeanUtils.copyProperties(programEntity, program);
            return program;
        } else {
            return null;
        }
    }


    @Override
    public ProgramDto getProgramByClinicId(Long clinicId) {
        Optional<ProgramEntity> programEntityOptional = programRepository.findByClinicId(clinicId);
        if (programEntityOptional.isPresent()) {
            ProgramEntity programEntity = programEntityOptional.get();
            ProgramDto program = new ProgramDto();
            BeanUtils.copyProperties(programEntity, program);
            return program;
        } else {
            return null;
        }

    }

    @Override
    public ProgramDto updateProgram(Long id, ProgramDto program) {
        Optional<ProgramEntity> programEntityOptional = programRepository.findById(id);
        if (programEntityOptional.isPresent()) {
            ProgramEntity programEntity = programEntityOptional.get();
            programEntity.setClinicId(program.getClinicId());
            programEntity.setMonday(program.getMonday());
            programEntity.setTuesday(program.getTuesday());
            programEntity.setWednesday(program.getWednesday());
            programEntity.setThursday(program.getThursday());
            programEntity.setFriday(program.getFriday());
            programEntity.setSaturday(program.getSaturday());
            programEntity.setSunday(program.getSunday());

            programRepository.save(programEntity);
            return program;
        } else {
            return null;
        }
    }

}
