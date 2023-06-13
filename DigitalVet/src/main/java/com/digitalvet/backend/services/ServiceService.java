package com.digitalvet.backend.services;

import com.digitalvet.backend.model.ServiceDto;

import java.util.List;

public interface ServiceService {

    Long addService(ServiceDto serviceDto);

    List<ServiceDto> getAllServices();

    ServiceDto getServiceById(Long id);

    List<ServiceDto> getServiceByVetId(Long id);

    List<ServiceDto> getServiceByClinicId(Long id);

    ServiceDto updateService(Long id, ServiceDto service);

    boolean deleteService(Long id);
}
