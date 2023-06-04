package com.digitalvet.backend.controller;

import com.digitalvet.backend.model.ProgramDto;
import com.digitalvet.backend.services.ProgramService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/digitalVet")
public class ProgramController {
    private final ProgramService programService;

    public ProgramController(ProgramService programService) {
        this.programService = programService;
    }

    @PostMapping(path = "/program")
    public Long addProgram(@RequestBody ProgramDto programDto) {
        return programService.addProgram(programDto);
    }

    @GetMapping("/program/{id}")
    public ResponseEntity<ProgramDto> getProgramById(@PathVariable Long id) {
        ProgramDto program = null;
        program = programService.getProgramById(id);
        return ResponseEntity.ok(program);
    }

    @GetMapping("/clinic/program/{id}")
    public ProgramDto getProgramByClinicId(@PathVariable Long id) {
        return  programService.getProgramByClinicId(id);
    }

    @PutMapping("/program/{id}")
    public ResponseEntity<ProgramDto> updateProgram(@PathVariable Long id,
                                                  @RequestBody ProgramDto program) {
        program = programService.updateProgram(id, program);
        return ResponseEntity.ok(program);
    }
}
