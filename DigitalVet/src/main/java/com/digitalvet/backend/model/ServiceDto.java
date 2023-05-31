package com.digitalvet.backend.model;

public class ServiceDto {

    private Long serviceId;
    private Long vetId;
    private Long clinicId;
    private String name;
    private Double price;
    private Integer minutes;

    public ServiceDto() {}

    public ServiceDto(Long serviceId, Long vetId, Long clinicId, String name,Double price,Integer minutes) {
        this.serviceId = serviceId;
        this.vetId = vetId;
        this.clinicId = clinicId;
        this.name = name;
        this.price=price;
        this.minutes=minutes;
    }

    public Long getClinicId() {
        return clinicId;
    }

    public void setClinicId(Long clinicId) {
        this.clinicId = clinicId;
    }

    public Integer getMinutes() {
        return minutes;
    }

    public void setMinutes(Integer minutes) {
        this.minutes = minutes;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
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
