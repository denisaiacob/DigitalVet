package com.digitalvet.backend.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.util.Objects;

@Entity
@Table(name = "clinics")
public class ClinicEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private Long clinicId;

    @NotBlank(message = "Name is mandatory")
    @Pattern(regexp = "^(?=.{2,30}$)(\\w{2,}(\\s?\\w{2,})?)$", message = "Invalid name")
    private String name;
    @NotBlank(message = "City is mandatory")
    @Pattern(regexp = "^(?=.{2,30}$)(\\w{2,}(\\s?\\w{2,})?)$", message = "Invalid city")
    private String city;

    @NotBlank(message = "Address is mandatory")
    @Pattern(regexp = "[\\w\\s.,'-]*$", message = "Invalid adress")
    private String address;

    @Pattern(regexp = "^[\\w\\s.,'-]*$", message = "Invalid description")
    private String description;


    @Pattern(regexp = "^\\/[\\w._\\-\\/]+$", message = "Invalid path")
    private String photo;

    public ClinicEntity() {
    }

    public ClinicEntity(String name, String city, String adress, String description, String photo) {
        this.name = name;
        this.city = city;
        this.address = adress;
        this.description = description;
        this.photo = photo;
    }

    public ClinicEntity(Long clinicId, String name, String city, String adress, String description, String photo) {
        this.clinicId = clinicId;
        this.name = name;
        this.city = city;
        this.address = adress;
        this.description = description;
        this.photo = photo;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ClinicEntity that)) return false;
        return Objects.equals(getClinicId(), that.getClinicId()) && Objects.equals(getName(), that.getName()) && Objects.equals(getCity(), that.getCity()) && Objects.equals(getAddress(), that.getAddress()) && Objects.equals(getDescription(), that.getDescription()) && Objects.equals(getPhoto(), that.getPhoto());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getClinicId(), getName(), getCity(), getAddress(), getDescription(), getPhoto());
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

    @Override
    public String toString() {
        return "ClinicEntity{" +
                "clinicId=" + clinicId +
                ", name='" + name + '\'' +
                ", city='" + city + '\'' +
                ", address='" + address + '\'' +
                ", description='" + description + '\'' +
                ", photo='" + photo + '\'' +
                '}';
    }
}

