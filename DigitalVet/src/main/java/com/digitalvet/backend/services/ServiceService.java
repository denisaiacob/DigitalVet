package com.digitalvet.backend.services;

import com.digitalvet.backend.model.ServiceDto;

import java.util.List;

public interface ServiceService {
    Long addService(ServiceDto serviceDto);

    ServiceDto getServiceById(Long id);

    List<ServiceDto> getServiceByVetId(Long aLong);

    ServiceDto updateService(Long id, ServiceDto service);

    List<ServiceDto> getServiceByClinicId(Long aLong);

    List<ServiceDto> getAllServices();
}
