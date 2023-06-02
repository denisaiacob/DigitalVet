import * as React from 'react';
import {Box, Grid} from "@mui/material";
import FilterByRating from "./FilterByRating";
import SummaryReviews from "./SummaryReviews";
import Review from "./Review";

function Reviews() {

    return (
        <Box
            sx={{backgroundColor: "white"}}
        >
            <Box
                sx={{
                    textAlign: "start",
                    borderTop: 30,
                    borderBottom: 30,
                    borderColor: "white",
                    marginLeft: 6.5,
                    marginRight:6.5
                }}
            >
                <Grid container spacing={2} direction="row">
                    <Grid item>
                        <SummaryReviews/>
                    </Grid>
                    <Grid item>
                        <FilterByRating/>
                    </Grid>
                </Grid>
                <Review/>
            </Box>
        </Box>
    )
        ;
}

export default Reviews;