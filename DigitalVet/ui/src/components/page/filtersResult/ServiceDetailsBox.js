import * as React from 'react';
import {styled} from '@mui/material/styles';
import {
    Grid,
    Typography,
    Box,
    Paper, Button
} from "@mui/material";
import {Link} from "react-router-dom";

const RoundedTypography = styled(Typography)({
    fontFamily: 'Century Gothic',
    fontWeight: 'bold',
    fontSize: '1.0rem',
    textAlign: 'start',
});

function ServiceDetailsBox({service}) {

    return (
        <div key={service.serviceId}>
            <Paper variant="outlined" style={{margin: 5}}>
                <Box sx={{mt: 2, ml: 5, mr: 2, mb: 1}}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item container direction="row" spacing={2}>
                            <Grid item xs={10}>
                                <RoundedTypography variant="h5">{service.name}</RoundedTypography>
                            </Grid>
                            <Grid item xs={2}>
                                <RoundedTypography variant="h5">{service.price} Lei</RoundedTypography>
                            </Grid>
                        </Grid>
                        <Grid item container direction="row" spacing={2}>
                            <Grid item xs={9.5}>
                                <Typography textAlign="start" variant="body2" color='gray'>{service.minutes} minutes</Typography>
                            </Grid>
                            <Grid item xs={2.5}>
                                <Button
                                    variant="outlined"
                                    style={{color: '#43ab98', borderColor: '#43ab98'}}
                                    component={Link} to="/service/${serviceId}"
                                >
                                    Book
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </div>
    );
}

export default ServiceDetailsBox;