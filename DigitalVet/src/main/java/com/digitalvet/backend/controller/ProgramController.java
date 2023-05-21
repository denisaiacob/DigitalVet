package com.digitalvet.backend.controller;

import com.digitalvet.backend.model.ProgramDto;
import com.digitalvet.backend.services.ProgramService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/digitalVet")
public class ProgramController {
    private final ProgramService programService;

    public ProgramController(ProgramService programService) {
        this.programService = programService;
    }

    @PostMapping(path = "/addProgram")
    public Long addProgram(@RequestBody ProgramDto programDto) {
        return programService.addProgram(programDto);
    }
}
