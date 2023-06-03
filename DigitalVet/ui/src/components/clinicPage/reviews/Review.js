import * as React from 'react';
import {Box, Card, Chip, Divider, Grid, Hidden, Rating, Stack, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import {useEffect, useState} from "react";
import ClinicService from "../../../services/ClinicService";

const StyledTypography = styled(Typography)({
    fontFamily: 'Optima',
    fontWeight: 'bold',
    fontSize: '1.0rem',
    '@media (max-width:700px)': {
        fontSize: '1.0rem',
    },
    textAlign: 'center',
});

function Review({vet}) {
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

    const handleDay = (date) => {
        date = new Date(date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

        return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
    };

    return (
        <div>
            {reviews.map((review) => (
                <div key={review.reviewId}>
                    <Card
                        variant="outlined"
                        sx={{mt: 3}}
                    >
                        <Box sx={{margin: 2, alignItems: 'center'}}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={3}>
                                    <Stack spacing={1} style={{textAlign: 'center'}}>
                                        <StyledTypography>{review.user}</StyledTypography>
                                        <Typography
                                            style={{
                                                color: "grey",
                                                fontSize: '0.8rem'
                                            }}>{handleDay(review.day)}</Typography>
                                    </Stack>
                                </Grid>
                                <Hidden mdDown>
                                    <Grid item xs={0.5}>
                                        <Divider orientation="vertical" variant="middle"></Divider>
                                    </Grid>
                                </Hidden>
                                <Grid item md={8.5}>
                                    <Grid container spacing={1}>
                                        <Grid item container spacing={1}>
                                            <Grid item xs={12} md={3}>
                                                <Rating
                                                    name="star-rating"
                                                    value={review.stars}
                                                    readOnly
                                                />
                                            </Grid>
                                            <Grid item  xs={12} md={3}>
                                                <Chip size='small' label={vet.name}/>
                                            </Grid>
                                            <Grid item >
                                                <Chip size='small' label={review.service}/>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Typography style={{fontSize: '0.9rem'}}>{review.description}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Card>
                </div>
            ))}
        </div>
    );
}

export default Review;