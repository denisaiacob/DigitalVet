package com.digitalvet.backend.services;

import com.digitalvet.backend.entity.ProgramEntity;
import com.digitalvet.backend.model.ProgramDto;
import com.digitalvet.backend.repository.ClinicRepository;
import com.digitalvet.backend.repository.ProgramRepository;
import jakarta.persistence.EntityNotFoundException;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProgramServiceImpl implements ProgramService {
    private final ProgramRepository programRepository;
    private final ClinicRepository clinicRepository;

    public ProgramServiceImpl(ProgramRepository programRepository, ClinicRepository clinicRepository) {
        this.programRepository = programRepository;
        this.clinicRepository = clinicRepository;
    }

    @Override
    public ResponseEntity<ProgramEntity> addProgram(ProgramDto programDto) {
        ProgramEntity program = new ProgramEntity(
                programDto.getProgramId(),
                programDto.getMonday(),
                programDto.getTuesday(),
                programDto.getWednesday(),
                programDto.getThursday(),
                programDto.getFriday(),
                programDto.getSaturday(),
                programDto.getSunday());

        ProgramEntity response= clinicRepository.findById(programDto.getClinicId()).map(clinic -> {
            program.setClinic(clinic);
            return programRepository.save(program);
        }).orElseThrow(() -> new ResourceNotFoundException("Not found clinic with id = " + programDto.getClinicId()));

        return new ResponseEntity<>(response, HttpStatus.CREATED);
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
            throw new EntityNotFoundException("Program not found");
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
            throw new EntityNotFoundException("Program not found for clinic ID: " + clinicId);
        }

    }

    @Override
    public ProgramDto updateProgram(Long id, ProgramDto program) {
        Optional<ProgramEntity> programEntityOptional = programRepository.findById(id);
        if (programEntityOptional.isPresent()) {
            ProgramEntity programEntity = programEntityOptional.get();
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
            throw new EntityNotFoundException("Program not found");
        }
    }

}
