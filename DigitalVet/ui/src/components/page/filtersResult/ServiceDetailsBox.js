import * as React from 'react';
import {styled} from '@mui/material/styles';
import {
    Grid,
    Typography,
    Box,
    Paper
} from "@mui/material";

const RoundedTypography = styled(Typography)({
    fontFamily: 'Century Gothic',
    fontWeight: 'bold',
    fontSize: '1.0rem',
    textAlign: 'start',
});

function ServiceDetailsBox() {
    return (
        <Paper variant="outlined">
            <Box sx={{mt: 3, ml: 5, mr: 2, mb: 1}}>
                <Grid container direction="column" spacing={2}>
                    <Grid container direction="row" spacing={2}>
                        <Grid item xs={11}>
                            <RoundedTypography variant="h5">Name of the service</RoundedTypography>
                        </Grid>
                        <Grid item xs={1}>
                            <RoundedTypography variant="h5">15 Lei</RoundedTypography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography textAlign="start" variant="body2">Description</Typography>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    );
}

export default ServiceDetailsBox;