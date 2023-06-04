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

    @PostMapping(path = "/vet")
    public Long addVet(@RequestBody VetDto vetDto) {
        return vetService.addVet(vetDto);
    }

    @GetMapping("/vet")
    public List<VetDto> getAllVets() {
        return  vetService.getAllVets();
    }

    @GetMapping("/vet/{id}")
    public ResponseEntity<VetDto> getVetById(@PathVariable Long id) {
        VetDto vet = null;
        vet = vetService.getVetById(id);
        return ResponseEntity.ok(vet);
    }

    @GetMapping("/vets/{id}")
    public List<VetDto> getVetByClinicId(@PathVariable Long id) {
        return  vetService.getVetByClinicId(id);
    }

    @DeleteMapping("/vet/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteVet(@PathVariable Long id) {
        boolean deleted = false;
        deleted = vetService.deleteVet(id);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/vet/{id}")
    public ResponseEntity<VetDto> updateVet(@PathVariable Long id,
                                                  @RequestBody VetDto vet) {
        vet = vetService.updateVet(id, vet);
        return ResponseEntity.ok(vet);
    }
}
