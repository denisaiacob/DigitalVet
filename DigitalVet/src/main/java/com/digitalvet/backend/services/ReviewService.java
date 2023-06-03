package com.digitalvet.backend.services;

import com.digitalvet.backend.model.ReviewDto;

import java.util.List;

public interface ReviewService {
    Long addReview(ReviewDto reviewDto);

    List<ReviewDto> getAllReviews();

    List<ReviewDto> getReviewByVetId(Long vetId);
}
