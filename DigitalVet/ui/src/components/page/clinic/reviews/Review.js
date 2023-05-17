import * as React from 'react';
import {Box, Card, Chip, Divider, Grid, Rating, Stack, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import {useState} from "react";

const StyledTypography = styled(Typography)({
    fontFamily: 'Optima',
    fontWeight: 'bold',
    fontSize: '1.0rem',
    '@media (max-width:700px)': {
        fontSize: '1.0rem',
    },
    textAlign: 'center',
});

function Review() {
    const [average, setAverage] = useState(3);

    return (
        <Card
            variant="outlined"
            sx={{mt: 3}}
        >
            <Box sx={{margin: 2, alignItems: 'center'}}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Stack spacing={1} style={{textAlign: 'center'}}>
                            <StyledTypography>Name</StyledTypography>
                            <Typography style={{color: "grey", fontSize: '0.8rem'}}>16 May 2023</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={0.5}>
                        <Divider orientation="vertical" variant="middle"></Divider>
                    </Grid>
                    <Grid item>
                        <Stack spacing={1}>
                            <Stack direction='row' spacing={1}>
                                <Rating
                                    name="star-rating"
                                    value={average}
                                    readOnly
                                />
                                <Chip size='small' label="Service" />
                                <Chip size='small' label="Vet" />
                            </Stack>
                            <Typography style={{fontSize:'0.9rem'}}>Text</Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Card>
    );
}

export default Review;