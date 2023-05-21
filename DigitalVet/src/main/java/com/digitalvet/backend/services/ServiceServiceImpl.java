package com.digitalvet.backend.services;

import com.digitalvet.backend.entity.ServiceEntity;
import com.digitalvet.backend.model.ServiceDto;
import com.digitalvet.backend.repository.ServiceRepository;
import org.springframework.stereotype.Service;

@Service
public class ServiceServiceImpl implements ServiceService {
    private final ServiceRepository serviceRepository;

    public ServiceServiceImpl(ServiceRepository serviceRepository) {
        this.serviceRepository = serviceRepository;
    }

    @Override
    public Long addService(ServiceDto serviceDto) {
        ServiceEntity service = new ServiceEntity(
                serviceDto.getServiceId(),
                serviceDto.getVetId(),
                serviceDto.getName());
        serviceRepository.save(service);
        return service.getServiceId();
    }
}
