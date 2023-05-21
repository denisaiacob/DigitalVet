import {Box, Grid, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import {useState} from "react";
import AddClinicService from "../../services/AddClinicService";

const MiniTypography = styled(Typography)({
    '@media (max-width:700px)': {
        fontSize: '0.7rem',
    },
});

function AddProgram() {
    const [program, setProgram] = useState({
        clinicId: "",
        months: "",
        tuesday: "",
        wednesday: "",
        thursday: "",
        friday: "",
        saturday: "",
        sunday: ""
    })
    const reset = (event) => {
        event.preventDefault();
        setProgram({
            clinicId: "",
            months: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: "",
            saturday: "",
            sunday: ""
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        AddClinicService.addProgram((program)).then((response) => {
            console.log(response);
        })
            .catch((error) => {
                reset(event);
                console.log(error);
            });
    };
    const handleChange = (event) => {
        const value = event.target.value;
        setProgram({...program, [event.target.name]: value});
    };
    return (
        <Box
            style={{width: '70%', textAlign: 'center'}}
        >
            <Typography fontWeight="bold" sx={{margin: 3}}>Clinic schedule</Typography>
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
                            <input
                                id="months"
                                name="months"
                                value={clinic.months}
                                onChange={(event) => handleChange(event)}
                                type="time"
                            />
                        </Grid>
                        <Grid item xs={3} style={{width: '50%'}}>
                            <input
                                id="tuesday"
                                name="tuesday"
                                value={clinic.tuesday}
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
                                id="wednesday"
                                name="wednesday"
                                value={clinic.wednesday}
                                onChange={(event) => handleChange(event)}
                                type="time"
                            />
                        </Grid>
                        <Grid item xs={3} style={{width: '50%'}}>
                            <input
                                id="thursday"
                                name="thursday"
                                value={clinic.thursday}
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
                                id="friday"
                                name="friday"
                                value={clinic.friday}
                                onChange={(event) => handleChange(event)}

                                type="time"
                            />
                        </Grid>
                        <Grid item xs={3} style={{width: '50%'}}>
                            <input
                                id="saturday"
                                name="saturday"
                                value={clinic.saturday}
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