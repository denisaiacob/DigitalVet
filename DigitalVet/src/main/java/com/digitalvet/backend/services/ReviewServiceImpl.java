package com.digitalvet.backend.services;

import com.digitalvet.backend.entity.ReviewEntity;
import com.digitalvet.backend.model.ReviewDto;
import com.digitalvet.backend.repository.ReviewRepository;
import com.digitalvet.backend.repository.VetRepository;
import jakarta.persistence.EntityNotFoundException;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewServiceImpl implements ReviewService {
    private final ReviewRepository reviewRepository;
    private final VetRepository vetRepository;

    public ReviewServiceImpl(ReviewRepository reviewRepository, VetRepository vetRepository) {
        this.reviewRepository = reviewRepository;
        this.vetRepository = vetRepository;
    }

    @Override
    public ResponseEntity<ReviewEntity> addReview(Long vetId, ReviewDto reviewDto) {
        ReviewEntity review = new ReviewEntity(
                reviewDto.getReviewId(),
                reviewDto.getService(),
                reviewDto.getStars(),
                reviewDto.getDescription(),
                reviewDto.getUser(),
                reviewDto.getDay());

        ReviewEntity response= vetRepository.findById(vetId).map(vet -> {
            review.setVet(vet);
            return reviewRepository.save(review);
        }).orElseThrow(() -> new ResourceNotFoundException("Not found Vet with id = " + vetId));

        return new ResponseEntity<>(response, HttpStatus.CREATED);
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
                            review.getVet().getVetId(),
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
