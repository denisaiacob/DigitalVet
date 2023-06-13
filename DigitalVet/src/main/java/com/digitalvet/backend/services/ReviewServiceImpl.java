package com.digitalvet.backend.services;

import com.digitalvet.backend.entity.ReviewEntity;
import com.digitalvet.backend.model.ReviewDto;
import com.digitalvet.backend.repository.ReviewRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewServiceImpl implements ReviewService {
    private final ReviewRepository reviewRepository;

    public ReviewServiceImpl(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    @Override
    public Long addReview(ReviewDto reviewDto) {
        ReviewEntity review = new ReviewEntity(
                reviewDto.getReviewId(),
                reviewDto.getVetId(),
                reviewDto.getService(),
                reviewDto.getStars(),
                reviewDto.getDescription(),
                reviewDto.getUser(),
                reviewDto.getDay());

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
                        review.getService(),
                        review.getStars(),
                        review.getDescription(),
                        review.getUser(),
                        review.getDay()))
                .toList();
    }

    @Override
    public List<ReviewDto> getReviewByVetId(Long vetId) {
        Optional<List<ReviewEntity>> reviewEntitiesOptional = reviewRepository.findByVetId(vetId);
        if (reviewEntitiesOptional.isPresent()) {
            List<ReviewEntity> reviewEntities = reviewEntitiesOptional.get();
            return reviewEntities
                    .stream()
                    .map(review -> new ReviewDto(
                            review.getReviewId(),
                            review.getVetId(),
                            review.getService(),
                            review.getStars(),
                            review.getDescription(),
                            review.getUser(),
                            review.getDay()))
                    .toList();
        } else {
            throw new EntityNotFoundException("Review not found");
        }
    }

}
