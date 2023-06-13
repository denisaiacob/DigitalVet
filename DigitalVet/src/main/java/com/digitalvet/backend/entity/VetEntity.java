package com.digitalvet.backend.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.util.Objects;

@Entity
@Table(name = "vets")
public class VetEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private Long vetId;

    @NotBlank(message = "Vet id is mandatory")
    private Long clinicId;

    @NotBlank(message = "Name is mandatory")
    @Pattern(regexp = "^(?=.{2,30}$)(\\w{2,}(\\s?\\w{2,})?)$", message = "Invalid name")
    private String name;
    @NotBlank(message = "Function is mandatory")
    @Pattern(regexp = "^[\\w\\s.,'-]*$", message = "Invalid city")
    private String function;

    @Pattern(regexp = "^[\\w\\s.,'-]*$", message = "Invalid description")
    private String description;

    @Pattern(regexp = "^[\\w._\\-\\/]+$", message = "Invalid path")
    private String photo;

    public VetEntity() {}

    public VetEntity(Long vetId, Long clinicId, String name, String function, String description, String photo) {
        this.vetId = vetId;
        this.clinicId = clinicId;
        this.name = name;
        this.function = function;
        this.description = description;
        this.photo = photo;
    }

    public Long getClinicId() {
        return clinicId;
    }

    public void setClinicId(Long clinicId) {
        this.clinicId = clinicId;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof VetEntity vetEntity)) return false;
        return Objects.equals(getVetId(), vetEntity.getVetId()) && Objects.equals(getClinicId(), vetEntity.getClinicId()) && Objects.equals(getName(), vetEntity.getName()) && Objects.equals(getFunction(), vetEntity.getFunction()) && Objects.equals(getDescription(), vetEntity.getDescription()) && Objects.equals(getPhoto(), vetEntity.getPhoto());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getVetId(), getClinicId(), getName(), getFunction(), getDescription(), getPhoto());
    }

    @Override
    public String toString() {
        return "VetEntity{" +
                "vetId=" + vetId +
                ", clinicId=" + clinicId +
                ", name='" + name + '\'' +
                ", function='" + function + '\'' +
                ", description='" + description + '\'' +
                ", photo='" + photo + '\'' +
                '}';
    }
}


