import {Box, Grid, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

const MiniTypography = styled(Typography)({
    '@media (max-width:700px)': {
        fontSize: '0.7rem',
    },
});

function AddProgram({program, setProgram}) {
    const handleChange = (event) => {
        const value = event.target.value;
        setProgram({...program, [event.target.name]: value});
    };
    return (
        <Box
            style={{width: '70%', textAlign: 'center'}}
        >
            <Typography fontWeight="bold" sx={{margin: 3}}>Clinic schedule</Typography>
            <Box sx={{width: '70%', display: 'flex', textAlign: 'start'}}>
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
                            <input
                                id="months1"
                                name="months1"
                                value={program.months1}
                                onChange={(event) => handleChange(event)}
                                type="time"
                            />
                        </Grid>
                        <Grid item xs={3} style={{width: '50%'}}>
                            <input
                                id="months2"
                                name="months2"
                                value={program.months2}
                                onChange={(event) => handleChange(event)}
                                type="time"
                            />
                        </Grid>
                    </Grid>
                    <Grid item container xs={12}>
                        <Grid item xs={6}>
                            <MiniTypography>Tuesday</MiniTypography>
                        </Grid>
                        <Grid item xs={3} style={{width: '50%'}}>
                            <input
                                id="tuesday1"
                                name="tuesday1"
                                value={program.tuesday1}
                                onChange={(event) => handleChange(event)}
                                type="time"
                            />
                        </Grid>
                        <Grid item xs={3} style={{width: '50%'}}>
                            <input
                                id="tuesday2"
                                name="tuesday2"
                                value={program.tuesday2}
                                onChange={(event) => handleChange(event)}
                                type="time"
                            />
                        </Grid>
                    </Grid>
                    <Grid item container xs={12}>
                        <Grid item xs={6}>
                            <MiniTypography>Wednesday</MiniTypography>
                        </Grid>
                        <Grid item xs={3} style={{width: '50%'}}>
                            <input
                                id="wednesday1"
                                name="wednesday1"
                                value={program.wednesday1}
                                onChange={(event) => handleChange(event)}
                                type="time"
                            />
                        </Grid>
                        <Grid item xs={3} style={{width: '50%'}}>
                            <input
                                id="wednesday2"
                                name="wednesday2"
                                value={program.wednesday2}
                                onChange={(event) => handleChange(event)}
                                type="time"
                            />
                        </Grid>
                    </Grid>
                    <Grid item container xs={12}>
                        <Grid item xs={6}>
                            <MiniTypography>Thursday</MiniTypography>
                        </Grid>
                        <Grid item xs={3} style={{width: '50%'}}>
                            <input
                                id="thursday1"
                                name="thursday1"
                                value={program.thursday1}
                                onChange={(event) => handleChange(event)}
                                type="time"
                            />
                        </Grid>
                        <Grid item xs={3} style={{width: '50%'}}>
                            <input
                                id="thursday2"
                                name="thursday2"
                                value={program.thursday2}
                                onChange={(event) => handleChange(event)}
                                type="time"
                            />
                        </Grid>
                    </Grid>
                    <Grid item container xs={12}>
                        <Grid item xs={6}>
                            <MiniTypography>Friday</MiniTypography>
                        </Grid>
                        <Grid item xs={3} style={{width: '50%'}}>
                            <input
                                id="friday1"
                                name="friday1"
                                value={program.friday1}
                                onChange={(event) => handleChange(event)}
                                type="time"
                            />
                        </Grid>
                        <Grid item xs={3} style={{width: '50%'}}>
                            <input
                                id="friday2"
                                name="friday2"
                                value={program.friday2}
                                onChange={(event) => handleChange(event)}
                                type="time"
                            />
                        </Grid>
                    </Grid>
                    <Grid item container xs={12}>
                        <Grid item xs={6}>
                            <MiniTypography>Saturday</MiniTypography>
                        </Grid>
                        <Grid item xs={3} style={{width: '50%'}}>
                            <input
                                id="saturday1"
                                name="saturday1"
                                value={program.saturday1}
                                onChange={(event) => handleChange(event)}
                                type="time"
                            />
                        </Grid>
                        <Grid item xs={3} style={{width: '50%'}}>
                            <input
                                id="saturday2"
                                name="saturday2"
                                value={program.saturday2}
                                onChange={(event) => handleChange(event)}
                                type="time"
                            />
                        </Grid>
                    </Grid>
                    <Grid item container xs={12}>
                        <Grid item xs={6}>
                            <MiniTypography>Sunday</MiniTypography>
                        </Grid>
                        <Grid item xs={3} style={{width: '50%'}}>
                            <input
                                id="sunday1"
                                name="sunday1"
                                value={program.sunday1}
                                onChange={(event) => handleChange(event)}
                                type="time"
                            />
                        </Grid>
                        <Grid item xs={3} style={{width: '50%'}}>
                            <input
                                id="sunday2"
                                name="sunday2"
                                value={program.sunday2}
                                onChange={(event) => handleChange(event)}
                                type="time"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
        ;
}

export default AddProgram;