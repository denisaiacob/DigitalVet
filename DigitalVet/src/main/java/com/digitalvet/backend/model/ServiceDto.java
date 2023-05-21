package com.digitalvet.backend.model;

public class ServiceDto {

    private Long serviceId;
    private Long vetId;
    private String name;

    public ServiceDto() {}

    public ServiceDto(Long serviceId, Long vetId, String name) {
        this.serviceId = serviceId;
        this.vetId = vetId;
        this.name = name;
    }

    public Long getServiceId() {
        return serviceId;
    }

    public void setServiceId(Long serviceId) {
        this.serviceId = serviceId;
    }

    public Long getVetId() {
        return vetId;
    }

    public void setVetId(Long vetId) {
        this.vetId = vetId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
