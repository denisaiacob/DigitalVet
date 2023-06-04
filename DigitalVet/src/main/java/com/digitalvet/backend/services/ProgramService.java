package com.digitalvet.backend.services;

import com.digitalvet.backend.model.ProgramDto;

public interface ProgramService {
    Long addProgram(ProgramDto programDto);

    ProgramDto getProgramById(Long id);

    ProgramDto getProgramByClinicId(Long clinicId);

    ProgramDto updateProgram(Long id, ProgramDto program);
}
