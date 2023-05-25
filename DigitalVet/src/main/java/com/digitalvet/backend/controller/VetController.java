package com.digitalvet.backend.controller;
import com.digitalvet.backend.model.VetDto;
import com.digitalvet.backend.services.VetService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/digitalVet")
public class VetController {
    private final VetService vetService;

    public VetController(VetService vetService) {
        this.vetService = vetService;
    }

    @PostMapping(path = "/vet")
    public Long addVet(@RequestBody VetDto vetDto) {
        return vetService.addVet(vetDto);
    }

    @GetMapping("/vet/{id}")
    public ResponseEntity<VetDto> getVetById(@PathVariable Long id) {
        VetDto vet = null;
        vet = vetService.getVetById(id);
        return ResponseEntity.ok(vet);
    }
}
