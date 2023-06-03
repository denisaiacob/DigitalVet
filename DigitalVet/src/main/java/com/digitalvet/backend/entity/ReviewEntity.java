package com.digitalvet.backend.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.util.Objects;

@Entity
@Table(name = "reviews")
public class ReviewEntity {

        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        @JsonProperty(access = JsonProperty.Access.READ_ONLY)
        private Long reviewId;

        @NotBlank(message = "Vet is mandatory")
        private Long vetId;
        @NotBlank(message = "Service is mandatory")
        private Long serviceId;

        @NotBlank(message = "The stars are mandatory")
        private Integer stars;

        @Pattern(regexp = "^[\\w\\s.,'-]*$", message = "Invalid description")
        private String description;

    public ReviewEntity() {}

    public ReviewEntity(Long vetId, Long serviceId, Integer stars, String description) {
        this.vetId = vetId;
        this.serviceId = serviceId;
        this.stars = stars;
        this.description = description;
    }

    public ReviewEntity(Long reviewId, Long vetId, Long serviceId, Integer stars, String description) {
        this.reviewId = reviewId;
        this.vetId = vetId;
        this.serviceId = serviceId;
        this.stars = stars;
        this.description = description;
    }

    public Long getReviewId() {
        return reviewId;
    }

    public void setReviewId(Long reviewId) {
        this.reviewId = reviewId;
    }

    public Long getVetId() {
        return vetId;
    }

    public void setVetId(Long vetId) {
        this.vetId = vetId;
    }

    public Long getServiceId() {
        return serviceId;
    }

    public void setServiceId(Long serviceId) {
        this.serviceId = serviceId;
    }

    public Integer getStars() {
        return stars;
    }

    public void setStars(Integer stars) {
        this.stars = stars;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ReviewEntity that)) return false;
        return Objects.equals(getReviewId(), that.getReviewId()) && Objects.equals(getVetId(), that.getVetId()) && Objects.equals(getServiceId(), that.getServiceId()) && Objects.equals(getStars(), that.getStars()) && Objects.equals(getDescription(), that.getDescription());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getReviewId(), getVetId(), getServiceId(), getStars(), getDescription());
    }

    @Override
    public String toString() {
        return "ReviewEntity{" +
                "reviewId=" + reviewId +
                ", vetId=" + vetId +
                ", serviceId=" + serviceId +
                ", stars=" + stars +
                ", description='" + description + '\'' +
                '}';
    }
}
