package com.digitalvet.backend.model;

import javax.validation.constraints.NotBlank;
import java.util.Date;

public class ReviewDto {
    private Long reviewId;
    private Long vetId;
    private String service;
    private Integer stars;
    private String description;
    private String user;
    private Date day;

    public ReviewDto() {}

    public ReviewDto(Long reviewId, Long vetId, String service, Integer stars, String description, String user, Date day) {
        this.reviewId = reviewId;
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
}
