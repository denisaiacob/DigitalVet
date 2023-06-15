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
            <Typography fontWeight="bold" sx={{margin: 3}}>Programul clinicii</Typography>
            <Box sx={{width: '70%', display: 'flex', textAlign: 'start'}}>
                <Grid container style={{width: '100%', display: 'flex', alignItems: 'start', justifyContent: 'start'}}>
                    <Grid item container xs={12} style={{marginBottom: 10}}>
                        <Grid item xs={6}>
                            <MiniTypography></MiniTypography>
                        </Grid>
                        <Grid item xs={3}>
                            <MiniTypography>Oră deschidere</MiniTypography>
                        </Grid>
                        <Grid item xs={3}>
                            <MiniTypography>Oră închidere</MiniTypography>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12}>
                        <Grid item xs={6}>
                            <MiniTypography>Luni</MiniTypography>
                        </Grid>
                        <Grid item xs={3} style={{width: '50%'}}>
                            <input
                                id="monday1"
                                name="monday1"
                                value={program.monday1}
                                onChange={(event) => handleChange(event)}
                                type="time"
                            />
                        </Grid>
                        <Grid item xs={3} style={{width: '50%'}}>
                            <input
                                id="monday2"
                                name="monday2"
                                value={program.monday2}
                                onChange={(event) => handleChange(event)}
                                type="time"
                            />
                        </Grid>
                    </Grid>
                    <Grid item container xs={12}>
                        <Grid item xs={6}>
                            <MiniTypography>Marți</MiniTypography>
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
                            <MiniTypography>Miercuri</MiniTypography>
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
                            <MiniTypography>Joi</MiniTypography>
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
                            <MiniTypography>Vineri</MiniTypography>
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
                            <MiniTypography>Sâmbătă</MiniTypography>
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
                            <MiniTypography>Duminică</MiniTypography>
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