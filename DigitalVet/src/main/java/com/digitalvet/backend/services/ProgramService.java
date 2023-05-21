package com.digitalvet.backend.services;

import com.digitalvet.backend.model.ProgramDto;

public interface ProgramService {
    Long addProgram(ProgramDto programDto);
}
