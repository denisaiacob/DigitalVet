import * as React from 'react';
import {useEffect, useState} from "react";
import ClinicService from "../../../services/ClinicService";
import ReviewCard from "./ReviewCard";

function Review({vet, checkedItems}) {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (vet.vetId !== null) {
                    const response = await ClinicService.getReviewByVetId(vet.vetId);
                    setReviews(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData().then();
    }, [vet]);

    return (
        <div>
            {reviews.map((review) => (
                <div key={review.reviewId}>
                    {review.stars && review.stars === 5 && checkedItems.option5 && (
                        <ReviewCard review={review} vet={vet}/>
                    )}
                    {review.stars && review.stars >= 4 && review.stars < 5 && checkedItems.option4 && (
                        <ReviewCard review={review} vet={vet}/>
                    )}
                    {review.stars && review.stars >= 3 && review.stars < 4 && checkedItems.option3 && (
                        <ReviewCard review={review} vet={vet}/>
                    )}
                    {review.stars && review.stars >= 2 && review.stars < 3 && checkedItems.option2 && (
                        <ReviewCard review={review} vet={vet}/>
                    )}
                    {review.stars && review.stars >= 1 && review.stars < 2 && checkedItems.option1 && (
                        <ReviewCard review={review} vet={vet}/>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Review;