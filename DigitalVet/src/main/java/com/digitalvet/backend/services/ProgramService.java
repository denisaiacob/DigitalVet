package com.digitalvet.backend.services;

import com.digitalvet.backend.entity.ProgramEntity;
import com.digitalvet.backend.model.ProgramDto;
import org.springframework.http.ResponseEntity;

public interface ProgramService {
    ResponseEntity<ProgramEntity> addProgram(ProgramDto programDto);

    ProgramDto getProgramById(Long id);

    ProgramDto getProgramByClinicId(Long clinicId);

    ProgramDto updateProgram(Long id, ProgramDto program);
}
