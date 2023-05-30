package com.digitalvet.backend.services;

import com.digitalvet.backend.entity.ServiceEntity;
import com.digitalvet.backend.entity.VetEntity;
import com.digitalvet.backend.model.ServiceDto;
import com.digitalvet.backend.model.VetDto;
import com.digitalvet.backend.repository.ServiceRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;

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
                serviceDto.getName(),
                serviceDto.getPrice());
        serviceRepository.save(service);
        return service.getServiceId();
    }

    @Override
    public ServiceDto getServiceById(Long id) {
        ServiceEntity serviceEntity
                = serviceRepository.findById(id).get();
        ServiceDto service = new ServiceDto();
        BeanUtils.copyProperties(serviceEntity, service);
        return service;
    }

    @Override
    public List<ServiceDto> getServiceByVetId(Long vetId) {
        List<ServiceEntity> serviceEntities
                = serviceRepository.findByVetId(vetId).get();

        return serviceEntities
                .stream()
                .map(vet -> new ServiceDto(
                        vet.getServiceId(),
                        vet.getVetId(),
                        vet.getName(),
                        vet.getPrice()))
                .toList();
    }

    @Override
    public ServiceDto updateService(Long id, ServiceDto service) {
        ServiceEntity serviceEntity
                = serviceRepository.findById(id).get();
        serviceEntity.setVetId(service.getVetId());
        serviceEntity.setName(service.getName());
        serviceEntity.setPrice(service.getPrice());

        serviceRepository.save(serviceEntity);
        return service;
    }
}
