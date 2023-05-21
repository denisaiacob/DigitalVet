package com.digitalvet.backend.controller;

import com.digitalvet.backend.model.UserDto;
import com.digitalvet.backend.model.VetDto;
import com.digitalvet.backend.services.VetService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/digitalVet")
public class VetController {
    private final VetService vetService;

    public VetController(VetService vetService) {
        this.vetService = vetService;
    }

    @PostMapping(path = "/addVet")
    public Long addVet(@RequestBody VetDto vetDto) {
        return vetService.addVet(vetDto);
    }
}
