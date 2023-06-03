package com.digitalvet.backend.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.util.Date;
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
    private String service;

    @NotBlank(message = "The stars are mandatory")
    private Integer stars;

    @Pattern(regexp = "^[\\w\\s.,'-]*$", message = "Invalid description")
    private String description;

    @NotBlank(message = "Username is mandatory")
    private String user;

    @NotBlank(message = "Day is mandatory")
    private Date day;

    public ReviewEntity() {
    }

    public ReviewEntity(Long reviewId, Long vetId, String service, Integer stars, String description, String user, Date day) {
        this.reviewId = reviewId;
        this.vetId = vetId;
        this.service = service;
        this.stars = stars;
        this.description = description;
        this.user = user;
        this.day = day;
    }

    public ReviewEntity(Long vetId, String service, Integer stars, String description, String user, Date day) {
        this.vetId = vetId;
        this.service = service;
        this.stars = stars;
        this.description = description;
        this.user = user;
        this.day = day;
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

    public String getService() {
        return service;
    }

    public void setService(String service) {
        this.service = service;
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

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public Date getDay() {
        return day;
    }

    public void setDay(Date day) {
        this.day = day;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ReviewEntity that)) return false;
        return Objects.equals(getReviewId(), that.getReviewId()) && Objects.equals(getVetId(), that.getVetId()) && Objects.equals(getService(), that.getService()) && Objects.equals(getStars(), that.getStars()) && Objects.equals(getDescription(), that.getDescription()) && Objects.equals(getUser(), that.getUser()) && Objects.equals(getDay(), that.getDay());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getReviewId(), getVetId(), getService(), getStars(), getDescription(), getUser(), getDay());
    }

    @Override
    public String toString() {
        return "ReviewEntity{" +
                "reviewId=" + reviewId +
                ", vetId=" + vetId +
                ", service=" + service +
                ", stars=" + stars +
                ", description='" + description + '\'' +
                ", user='" + user + '\'' +
                ", day='" + day + '\'' +
                '}';
    }
}
