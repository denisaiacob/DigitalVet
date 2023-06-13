import {Alert, Box, Button, Grid, Snackbar, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import React, {useEffect, useState} from "react";
import ClinicService from "../../services/ClinicService";

const MiniTypography = styled(Typography)({
    '@media (max-width:700px)': {
        fontSize: '0.7rem',
    },
});

function UpdateProgram({clinicId}) {
    const [program, setProgram] = useState({});
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ClinicService.getProgramByClinicId(clinicId);
                setProgram(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        if (clinicId) fetchData().then();
    }, [clinicId]);

    const handleChange = (event) => {
        const value = event.target.value;
        setProgram({...program, [event.target.name]: value});
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        ClinicService.updateProgram(program, program.programId)
            .then(() => {
                setOpen(true);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <div className="clinic-page">
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
                    The program has been successfully updated!
                </Alert>
            </Snackbar>
            <Box
                style={{width: '70%', textAlign: 'center'}}
            >
                <Typography fontWeight="bold" sx={{margin: 3}}>Clinic schedule</Typography>
                <Box sx={{width: '70%', display: 'flex', textAlign: 'start'}}>
                    <Grid container
                          style={{width: '100%', display: 'flex', alignItems: 'start', justifyContent: 'start'}}>
                        <Grid item container xs={12}>
                            <Grid item xs={6}>
                                <MiniTypography>Monday</MiniTypography>
                            </Grid>
                            <Grid item xs={3} style={{width: '50%'}}>
                                <input
                                    id="monday"
                                    name="monday"
                                    value={program.monday}
                                    onChange={(event) => handleChange(event)}
                                    type="text"
                                />
                            </Grid>
                        </Grid>
                        <Grid item container xs={12}>
                            <Grid item xs={6}>
                                <MiniTypography>Tuesday</MiniTypography>
                            </Grid>
                            <Grid item xs={3} style={{width: '50%'}}>
                                <input
                                    id="tuesday"
                                    name="tuesday"
                                    value={program.tuesday}
                                    onChange={(event) => handleChange(event)}
                                    type="text"
                                />
                            </Grid>
                        </Grid>
                        <Grid item container xs={12}>
                            <Grid item xs={6}>
                                <MiniTypography>Wednesday</MiniTypography>
                            </Grid>
                            <Grid item xs={3} style={{width: '50%'}}>
                                <input
                                    id="wednesday"
                                    name="wednesday"
                                    value={program.wednesday}
                                    onChange={(event) => handleChange(event)}
                                    type="text"
                                />
                            </Grid>
                        </Grid>
                        <Grid item container xs={12}>
                            <Grid item xs={6}>
                                <MiniTypography>Thursday</MiniTypography>
                            </Grid>
                            <Grid item xs={3} style={{width: '50%'}}>
                                <input
                                    id="thursday"
                                    name="thursday"
                                    value={program.thursday}
                                    onChange={(event) => handleChange(event)}
                                    type="text"
                                />
                            </Grid>
                        </Grid>
                        <Grid item container xs={12}>
                            <Grid item xs={6}>
                                <MiniTypography>Friday</MiniTypography>
                            </Grid>
                            <Grid item xs={3} style={{width: '50%'}}>
                                <input
                                    id="friday"
                                    name="friday"
                                    value={program.friday}
                                    onChange={(event) => handleChange(event)}
                                    type="text"
                                />
                            </Grid>
                        </Grid>
                        <Grid item container xs={12}>
                            <Grid item xs={6}>
                                <MiniTypography>Saturday</MiniTypography>
                            </Grid>
                            <Grid item xs={3} style={{width: '50%'}}>
                                <input
                                    id="saturday"
                                    name="saturday"
                                    value={program.saturday}
                                    onChange={(event) => handleChange(event)}
                                    type="text"
                                />
                            </Grid>
                        </Grid>
                        <Grid item container xs={12}>
                            <Grid item xs={6}>
                                <MiniTypography>Sunday</MiniTypography>
                            </Grid>
                            <Grid item xs={3} style={{width: '50%'}}>
                                <input
                                    id="sunday"
                                    name="sunday"
                                    value={program.sunday}
                                    onChange={(event) => handleChange(event)}
                                    type="text"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <div style={{marginTop: 30}}>
                    <Button
                        onClick={handleUpdate}
                        variant="outlined"
                        style={{color: '#43ab98', borderColor: '#43ab98'}}
                    >
                        Update
                    </Button>
                </div>
            </Box>
        </div>
    )
        ;
}

export default UpdateProgram;