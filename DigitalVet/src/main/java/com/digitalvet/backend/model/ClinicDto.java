package com.digitalvet.backend.model;

public class ClinicDto {
    private Long clinicId;
    private String name;
    private String city;
    private String address;
    private String description;
    private String photo;

    public ClinicDto() {
    }

    public ClinicDto(Long clinicId, String name, String city, String address, String description, String photo) {
        this.clinicId = clinicId;
        this.name = name;
        this.city = city;
        this.address = address;
        this.description = description;
        this.photo = photo;
    }

    public Long getClinicId() {
        return clinicId;
    }

    public void setClinicId(Long clinicId) {
        this.clinicId = clinicId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }
}

