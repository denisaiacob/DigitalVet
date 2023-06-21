package com.digitalvet.backend.services;

import com.digitalvet.backend.entity.ReviewEntity;
import com.digitalvet.backend.model.ReviewDto;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ReviewService {
    ResponseEntity<ReviewEntity> addReview(Long vetId, ReviewDto reviewDto);

    List<ReviewDto> getReviewByVetId(Long vetId);
}
