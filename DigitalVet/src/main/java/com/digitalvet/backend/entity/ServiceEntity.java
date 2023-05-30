package com.digitalvet.backend.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.util.Objects;

@Entity
@Table(name = "services")
public class ServiceEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private Long serviceId;

    @NotBlank(message = "Vet id is mandatory")
    private Long vetId;

    @NotBlank(message = "Name is mandatory")
    @Pattern(regexp = "^(?=.{2,30}$)(\\w{2,}(\\s?\\w{2,})?)$", message = "Invalid name")
    private String name;

    @NotBlank(message = "Price is mandatory")
    private double price;

    public ServiceEntity() {}

    public ServiceEntity(Long vetId,String name,Double price) {
        this.vetId=vetId;
        this.name = name;
        this.price=price;
    }

    public ServiceEntity(Long serviceId,Long vetId, String name,Double price) {
        this.serviceId = serviceId;
        this.vetId = vetId;
        this.name = name;
        this.price=price;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ServiceEntity service)) return false;
        return Double.compare(service.getPrice(), getPrice()) == 0 && Objects.equals(getServiceId(), service.getServiceId()) && Objects.equals(getVetId(), service.getVetId()) && Objects.equals(getName(), service.getName());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getServiceId(), getVetId(), getName(), getPrice());
    }

    @Override
    public String toString() {
        return "ServiceEntity{" +
                "serviceId=" + serviceId +
                ", vetId=" + vetId +
                ", name='" + name + '\'' +
                ", price=" + price +
                '}';
    }
}



