import * as React from 'react';
import {Box, Grid} from "@mui/material";
import FilterByRating from "./FilterByRating";
import SummaryReviews from "./SummaryReviews";

function Review() {

    return (
        <Box
            sx={{backgroundColor: "white"}}
        >
            <Box
                sx={{
                    textAlign: "start",
                    borderTop: 20,
                    borderBottom: 50,
                    borderColor: "white",
                    marginLeft: 3
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
            </Box>
        </Box>
    )
        ;
}

export default Review;