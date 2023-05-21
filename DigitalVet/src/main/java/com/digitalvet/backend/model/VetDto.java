package com.digitalvet.backend.model;

public class VetDto {

    private Long vetId;
    private String name;
    private String function;
    private String description;
    private String photo;

    public VetDto() {
    }

    public VetDto(Long vetId, String name, String function, String description, String photo) {
        this.vetId = vetId;
        this.name = name;
        this.function = function;
        this.description = description;
        this.photo = photo;
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

    public String getFunction() {
        return function;
    }

    public void setFunction(String function) {
        this.function = function;
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
