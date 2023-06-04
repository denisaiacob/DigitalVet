package com.digitalvet.backend.controller;

import com.digitalvet.backend.model.ReviewDto;
import com.digitalvet.backend.services.ReviewService;
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

    @PostMapping(path = "/review")
    public Long addReview(@RequestBody ReviewDto reviewDto) {
        return reviewService.addReview(reviewDto);
    }

    @GetMapping("/review")
    public List<ReviewDto> getAllReviews() {
        return  reviewService.getAllReviews();
    }

    @GetMapping("/review/{id}")
    public List<ReviewDto> getReviewByVetId(@PathVariable Long id) {
        return  reviewService.getReviewByVetId(id);
    }

}
