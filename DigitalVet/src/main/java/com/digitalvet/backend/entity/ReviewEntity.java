package com.digitalvet.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

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

    @NotBlank(message = "Service is mandatory")
    private String service;

    @NotBlank(message = "The stars are mandatory")
    private Integer stars;

    @Pattern(regexp = "^[\\w\\s.,'-]*$", message = "Invalid description")
    private String description;

    @NotBlank
    private String user;

    @NotBlank(message = "Day is mandatory")
    private Date day;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "vet_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private VetEntity vet;

    public ReviewEntity() {}

    public ReviewEntity(Long reviewId, String service, Integer stars, String description, String user, Date day, VetEntity vet) {
        this.reviewId = reviewId;
        this.service = service;
        this.stars = stars;
        this.description = description;
        this.user = user;
        this.day = day;
        this.vet = vet;
    }

    public ReviewEntity(Long reviewId, String service, Integer stars, String description, String user, Date day) {
        this.reviewId = reviewId;
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

    public VetEntity getVet() {
        return vet;
    }

    public void setVet(VetEntity vet) {
        this.vet = vet;
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
        return Objects.equals(getReviewId(), that.getReviewId()) && Objects.equals(getService(), that.getService()) && Objects.equals(getStars(), that.getStars()) && Objects.equals(getDescription(), that.getDescription()) && Objects.equals(getUser(), that.getUser()) && Objects.equals(getDay(), that.getDay()) && Objects.equals(getVet(), that.getVet());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getReviewId(), getService(), getStars(), getDescription(), getUser(), getDay(), getVet());
    }

    @Override
    public String toString() {
        return "ReviewEntity{" +
                "reviewId=" + reviewId +
                ", service='" + service + '\'' +
                ", stars=" + stars +
                ", description='" + description + '\'' +
                ", user='" + user + '\'' +
                ", day=" + day +
                ", vet=" + vet +
                '}';
    }
}
