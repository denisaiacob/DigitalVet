package com.digitalvet.backend.services;

import com.digitalvet.backend.model.VetDto;

public interface VetService {
    Long addVet(VetDto vetDto);
}
