package com.digitalvet.backend.services;

import com.digitalvet.backend.model.ServiceDto;

public interface ServiceService {
    Long addService(ServiceDto serviceDto);
}
