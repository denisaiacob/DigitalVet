import {Box, Grid, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

const MiniTypography = styled(Typography)({
    '@media (max-width:700px)': {
        fontSize: '0.7rem',
    },
});

function AddProgram() {
    return (
        <Box
            sx={{
                margin: 5,
                width: '70%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{width: '70%', display: 'flex', textAlign: 'start'}}
            >
                <Grid container style={{width: '100%', display: 'flex', alignItems: 'start', justifyContent: 'start'}}>
                    <Grid item container xs={12} style={{marginBottom: 10}}>
                        <Grid item xs={6}>
                            <MiniTypography></MiniTypography>
                        </Grid>
                        <Grid item xs={3}>
                            <MiniTypography>Opening hour</MiniTypography>
                        </Grid>
                        <Grid item xs={3}>
                            <MiniTypography>Closing hour</MiniTypography>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12}>
                        <Grid item xs={6}>
                            <MiniTypography>Months</MiniTypography>
                        </Grid>
                        <Grid item xs={3} style={{width: '50%'}}>
                            <input type="time"/>
                        </Grid>
                        <Grid item xs={3} style={{width: '50%'}}>
                            <input type="time"/>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12}>
                        <Grid item xs={6}>
                            <MiniTypography>Tuesday</MiniTypography>
                        </Grid>
                        <Grid item xs={3} style={{width: '50%'}}>
                            <input type="time"/>
                        </Grid>
                        <Grid item xs={3} style={{width: '50%'}}>
                            <input type="time"/>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12}>
                        <Grid item xs={6}>
                            <MiniTypography>Wednesday</MiniTypography>
                        </Grid>
                        <Grid item xs={3} style={{width: '50%'}}>
                            <input type="time"/>
                        </Grid>
                        <Grid item xs={3} style={{width: '50%'}}>
                            <input type="time"/>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12}>
                        <Grid item xs={6}>
                            <MiniTypography>Thursday</MiniTypography>
                        </Grid>
                        <Grid item xs={3} style={{width: '50%'}}>
                            <input type="time"/>
                        </Grid>
                        <Grid item xs={3} style={{width: '50%'}}>
                            <input type="time"/>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12}>
                        <Grid item xs={6}>
                            <MiniTypography>Friday</MiniTypography>
                        </Grid>
                        <Grid item xs={3} style={{width: '50%'}}>
                            <input type="time"/>
                        </Grid>
                        <Grid item xs={3} style={{width: '50%'}}>
                            <input type="time"/>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12}>
                        <Grid item xs={6}>
                            <MiniTypography>Saturday</MiniTypography>
                        </Grid>
                        <Grid item xs={3} style={{width: '50%'}}>
                            <input type="time"/>
                        </Grid>
                        <Grid item xs={3} style={{width: '50%'}}>
                            <input type="time"/>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12}>
                        <Grid item xs={6}>
                            <MiniTypography>Sunday</MiniTypography>
                        </Grid>
                        <Grid item xs={3} style={{width: '50%'}}>
                            <input type="time"/>
                        </Grid>
                        <Grid item xs={3} style={{width: '50%'}}>
                            <input type="time"/>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
        ;
}

export default AddProgram;