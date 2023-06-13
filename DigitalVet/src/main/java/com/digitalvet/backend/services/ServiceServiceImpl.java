package com.digitalvet.backend.services;

import com.digitalvet.backend.entity.ServiceEntity;
import com.digitalvet.backend.model.ServiceDto;
import com.digitalvet.backend.repository.ServiceRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
        Optional<ServiceEntity> optionalServiceEntity
                = serviceRepository.findById(id);
        if (optionalServiceEntity.isPresent()) {
            ServiceEntity serviceEntity = optionalServiceEntity.get();
            ServiceDto service = new ServiceDto();
            BeanUtils.copyProperties(serviceEntity, service);
            return service;
        } else {
            throw new EntityNotFoundException("Service not found for ID: " + id);
        }
    }

    @Override
    public List<ServiceDto> getServiceByVetId(Long vetId) {
        Optional<List<ServiceEntity>> serviceEntitiesOptional = serviceRepository.findByVetId(vetId);
        if (serviceEntitiesOptional.isPresent()) {
            List<ServiceEntity> serviceEntities = serviceEntitiesOptional.get();
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
        } else {
            throw new EntityNotFoundException("Service not found for vet: " + vetId);
        }
    }


    @Override
    public ServiceDto updateService(Long id, ServiceDto service) {
        Optional<ServiceEntity> optionalServiceEntity
                = serviceRepository.findById(id);
        if (optionalServiceEntity.isPresent()) {
            ServiceEntity serviceEntity
                    = optionalServiceEntity.get();
            serviceEntity.setVetId(service.getVetId());
            serviceEntity.setName(service.getName());
            serviceEntity.setPrice(service.getPrice());

            serviceRepository.save(serviceEntity);
            return service;
        } else {
            throw new EntityNotFoundException("Service not found");
        }
    }

    @Override
    public List<ServiceDto> getServiceByClinicId(Long clinicId) {
        Optional<List<ServiceEntity>> serviceEntitiesOptional = serviceRepository.findByClinicId(clinicId);
        if (serviceEntitiesOptional.isPresent()) {
            List<ServiceEntity> serviceEntities = serviceEntitiesOptional.get();
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
        } else {
            throw new EntityNotFoundException("Service not found for clinic: " + clinicId);
        }
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

    @Override
    public boolean deleteService(Long id) {
        Optional<ServiceEntity> optionalServiceEntity
                = serviceRepository.findById(id);
        if (optionalServiceEntity.isPresent()) {
            ServiceEntity service = optionalServiceEntity.get();
            serviceRepository.delete(service);
            return true;
        } else {
            throw new EntityNotFoundException("Service not found for ID: " + id);
        }
    }
}
