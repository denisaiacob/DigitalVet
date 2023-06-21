package com.digitalvet.backend.controller;

import com.digitalvet.backend.entity.ReviewEntity;
import com.digitalvet.backend.model.ReviewDto;
import com.digitalvet.backend.services.ReviewService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/digitalVet")
public class ReviewController {

    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @PostMapping(path = "/reviews/{vetId}")
    public ResponseEntity<ReviewEntity> addReview(@PathVariable(value = "vetId") Long vetId,
                                                  @RequestBody ReviewDto reviewDto) {
        return reviewService.addReview(vetId, reviewDto);
    }

    @GetMapping("/reviews/vet/{vetId}")
    public List<ReviewDto> getReviewByVetId(@PathVariable Long vetId) {
        return reviewService.getReviewByVetId(vetId);
    }

}
