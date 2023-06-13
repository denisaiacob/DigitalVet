package com.digitalvet.backend.controller;

import com.digitalvet.backend.model.VetDto;
import com.digitalvet.backend.services.VetService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/digitalVet")
public class VetController {
    private final VetService vetService;

    public VetController(VetService vetService) {
        this.vetService = vetService;
    }

    @PostMapping(path = "/vets")
    public Long addVet(@RequestBody VetDto vetDto) {
        return vetService.addVet(vetDto);
    }

    @GetMapping("/vets")
    public List<VetDto> getAllVets() {
        return vetService.getAllVets();
    }

    @GetMapping("/vets/{id}")
    public ResponseEntity<VetDto> getVetById(@PathVariable Long id) {
        VetDto vet = vetService.getVetById(id);
        return ResponseEntity.ok(vet);
    }

    @GetMapping("/vets/clinic/{clinicId}")
    public List<VetDto> getVetByClinicId(@PathVariable Long clinicId) {
        return vetService.getVetByClinicId(clinicId);
    }

    @DeleteMapping("/vets/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteVet(@PathVariable Long id) {
        boolean deleted = vetService.deleteVet(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/vets/{id}")
    public ResponseEntity<VetDto> updateVet(@PathVariable Long id,
                                            @RequestBody VetDto vet) {
        vet = vetService.updateVet(id, vet);
        return ResponseEntity.ok(vet);
    }
}
