package com.digitalvet.backend.services;
import com.digitalvet.backend.entity.ServiceEntity;
import com.digitalvet.backend.model.ServiceDto;
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
                serviceDto.getClinicId(),
                serviceDto.getName(),
                serviceDto.getPrice(),
                serviceDto.getMinutes());
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
                .map(service -> new ServiceDto(
                        service.getServiceId(),
                        service.getVetId(),
                        service.getClinicId(),
                        service.getName(),
                        service.getPrice(),
                        service.getMinutes()))
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

    @Override
    public List<ServiceDto> getServiceByClinicId(Long clinicId) {
        List<ServiceEntity> serviceEntities
                = serviceRepository.findByClinicId(clinicId).get();

        return serviceEntities
                .stream()
                .map(service -> new ServiceDto(
                        service.getServiceId(),
                        service.getVetId(),
                        service.getClinicId(),
                        service.getName(),
                        service.getPrice(),
                        service.getMinutes()))
                .toList();
    }

    @Override
    public List<ServiceDto> getAllServices() {
        List<ServiceEntity> serviceEntities
                = serviceRepository.findAll();

        return serviceEntities
                .stream()
                .map(service -> new ServiceDto(
                        service.getServiceId(),
                        service.getClinicId(),
                        service.getVetId(),
                        service.getName(),
                        (double) service.getMinutes(),
                        (int) service.getPrice()))
                .toList();
    }
}
