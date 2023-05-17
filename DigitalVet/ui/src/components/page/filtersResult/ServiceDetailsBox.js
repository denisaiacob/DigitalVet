import * as React from 'react';
import {styled} from '@mui/material/styles';
import {
    Grid,
    Typography,
    Box,
    Paper, Button
} from "@mui/material";
import {Link, useHistory} from "react-router-dom";

const RoundedTypography = styled(Typography)({
    fontFamily: 'Century Gothic',
    fontWeight: 'bold',
    fontSize: '1.0rem',
    textAlign: 'start',
});

function ServiceDetailsBox() {
    const history = useHistory();

    return (
        <Paper variant="outlined">
            <Box sx={{mt: 2, ml: 5, mr: 2, mb: 1}}>
                <Grid container direction="column" spacing={2}>
                    <Grid item container direction="row" spacing={2}>
                        <Grid item xs={10.8}>
                            <RoundedTypography variant="h5">Name of the service</RoundedTypography>
                        </Grid>
                        <Grid item xs={1.2}>
                            <RoundedTypography variant="h5">150 Lei</RoundedTypography>
                        </Grid>
                    </Grid>
                    <Grid item container direction="row" spacing={2}>
                        <Grid item xs={10.7}>
                            <Typography textAlign="start" variant="body2">Description</Typography>
                        </Grid>
                        <Grid item xs={0.5}>
                            <Button
                                variant="outlined"
                                style={{color:'#43ab98', borderColor: '#43ab98'}}
                                component={Link} to="/service/${serviceId}"
                            >
                                Book
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    );
}

export default ServiceDetailsBox;