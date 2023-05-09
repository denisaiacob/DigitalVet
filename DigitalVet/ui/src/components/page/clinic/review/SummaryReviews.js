import * as React from 'react';
import {Card, Rating, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import {useState} from "react";

const StyledTypography = styled(Typography)({
    fontFamily: 'Optima',
    fontWeight: 'bold',
    fontSize: '2.5rem',
    '@media (max-width:700px)': {
        fontSize: '1.0rem',
    },
    textAlign: 'center',
});

function SummaryReviews() {
    const [average, setAverage] = useState(3.7);
    return (
        <Card
            variant="outlined"
            sx={{
                marginLeft: 3.5,
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
                33 Reviews
            </Typography>
        </Card>
    );
}

export default SummaryReviews;