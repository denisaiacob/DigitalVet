package com.digitalvet.backend.model;

public class ReviewDto {
    private Long reviewId;
    private Long vetId;
    private Long serviceId;
    private Integer stars;
    private String description;

    public ReviewDto() {}

    public ReviewDto(Long reviewId, Long vetId, Long serviceId, Integer stars, String description) {
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
}
