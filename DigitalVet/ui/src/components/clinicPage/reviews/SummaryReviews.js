import * as React from 'react';
import {Card, Rating, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import {useEffect, useState} from "react";
import ClinicService from "../../../services/ClinicService";

const StyledTypography = styled(Typography)({
    fontFamily: 'Optima',
    fontWeight: 'bold',
    fontSize: '2.5rem',
    '@media (max-width:700px)': {
        fontSize: '1.0rem',
    },
    textAlign: 'center',
});

function SummaryReviews({vets}) {
    const [average, setAverage] = useState(5);
    const [reviewNumber, setReviewNumber] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let count = 0;
                let avg = 0;

                const promises = vets.map(async (vet) => {
                    const response = await ClinicService.getReviewByVetId(vet.vetId);
                    response.data.map((review)=>{
                        avg = avg + review.stars;
                        count = count + 1;
                    })
                });

                await Promise.all(promises);

                if (count !== 0) {
                    setReviewNumber(count);
                    setAverage(parseFloat((avg / count).toFixed(1)));
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData().then();
    }, [vets]);


    return (
        <Card
            variant="outlined"
            sx={{
                width: 300,
                height: 220,
                '@media (max-width:700px)': {
                    width: 120,
                    height: 80,
                },
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column"
            }}
        >
            <StyledTypography>{average}</StyledTypography>
            <Rating
                name="star-rating"
                value={average}
                readOnly
                precision={0.1}
                sx={{
                    fontSize: '2.0rem',
                    '@media (max-width:700px)': {
                        fontSize: '1.0rem',
                    },
                }}
            />
            <Typography
                sx={{
                    fontSize: '1.0rem',
                    '@media (max-width:700px)': {
                        fontSize: '0.4rem',
                    },
                    marginTop: 1
                }}
                color="text.secondary"
                gutterBottom
            >
                {reviewNumber} Reviews
            </Typography>
        </Card>
    );
}

export default SummaryReviews;