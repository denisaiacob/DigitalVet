package com.digitalvet.backend.controller;

import com.digitalvet.backend.model.ProgramDto;
import com.digitalvet.backend.services.ProgramService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/digitalVet")
public class ProgramController {
    private final ProgramService programService;

    public ProgramController(ProgramService programService) {
        this.programService = programService;
    }

    @PostMapping(path = "/programs")
    public Long addProgram(@RequestBody ProgramDto programDto) {
        return programService.addProgram(programDto);
    }

    @GetMapping("/programs/{id}")
    public ResponseEntity<ProgramDto> getProgramById(@PathVariable Long id) {
        ProgramDto program = programService.getProgramById(id);
        return ResponseEntity.ok(program);
    }

    @GetMapping("/programs/clinic/{clinicId}")
    public ProgramDto getProgramByClinicId(@PathVariable Long clinicId) {
        return programService.getProgramByClinicId(clinicId);
    }

    @PutMapping("/programs/{id}")
    public ResponseEntity<ProgramDto> updateProgram(@PathVariable Long id,
                                                    @RequestBody ProgramDto program) {
        program = programService.updateProgram(id, program);
        return ResponseEntity.ok(program);
    }
}
