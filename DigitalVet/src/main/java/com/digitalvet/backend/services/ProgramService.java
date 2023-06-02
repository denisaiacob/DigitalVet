package com.digitalvet.backend.services;

import com.digitalvet.backend.model.ProgramDto;

import java.util.List;

public interface ProgramService {
    Long addProgram(ProgramDto programDto);

    ProgramDto getProgramById(Long id);

    ProgramDto getProgramByClinicId(Long clinicId);
}
