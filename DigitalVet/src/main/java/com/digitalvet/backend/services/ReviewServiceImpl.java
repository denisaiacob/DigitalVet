package com.digitalvet.backend.services;

import com.digitalvet.backend.entity.ReviewEntity;
import com.digitalvet.backend.model.ReviewDto;
import com.digitalvet.backend.repository.ReviewRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService{
    private final ReviewRepository reviewRepository;

    public ReviewServiceImpl(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    @Override
    public Long addReview(ReviewDto reviewDto) {
        ReviewEntity review=new ReviewEntity(
                reviewDto.getReviewId(),
                reviewDto.getServiceId(),
                reviewDto.getVetId(),
                reviewDto.getStars(),
                reviewDto.getDescription());

        reviewRepository.save(review);
        return review.getReviewId();
    }

    @Override
    public List<ReviewDto> getAllReviews() {
        List<ReviewEntity> reviewEntities
                = reviewRepository.findAll();

        return reviewEntities
                .stream()
                .map(review -> new ReviewDto(
                        review.getReviewId(),
                        review.getVetId(),
                        review.getServiceId(),
                        review.getStars(),
                        review.getDescription()))
                .toList();
    }

    @Override
    public List<ReviewDto> getReviewByVetId(Long vetId) {
        List<ReviewEntity> reviewEntities
                = reviewRepository.findByVetId(vetId).get();

        return reviewEntities
                .stream()
                .map(review -> new ReviewDto(
                        review.getReviewId(),
                        review.getVetId(),
                        review.getServiceId(),
                        review.getStars(),
                        review.getDescription()))
                .toList();
    }
}
