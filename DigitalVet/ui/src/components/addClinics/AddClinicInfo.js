import {Box, Grid, Typography} from "@mui/material";

function AddClinicInfo({info,setInfo}) {
    const handleChange = (event) => {
        const value = event.target.value;
        setInfo({...info, [event.target.name]: value});
    };
    return (
        <Box
            style={{width: '70%', textAlign: 'center'}}
        >
            <Typography fontWeight="bold" sx={{margin: 3}}>The clinic's information</Typography>
            <Box
                sx={{display: 'flex', textAlign: 'start'}}
            >
                <Grid container style={{width: '100%'}}>
                    <Grid item xs={12}>
                        <Typography>Fiscal Identification Number</Typography>
                        <input
                            style={{width: '90%', height: 30, marginTop: 10, marginBottom: 10}}
                            type="text"
                            id="fin"
                            name="fin"
                            value={info.fin}
                            onChange={(event) => handleChange(event)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Trade register number</Typography>
                        <input
                            style={{width: '90%', height: 30, marginTop: 10, marginBottom: 10}}
                            type="text"
                            id="trade"
                            name="trade"
                            value={info.trade}
                            onChange={(event) => handleChange(event)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Administrator name</Typography>
                        <input
                            style={{width: '90%', height: 30, marginTop: 10, marginBottom: 10}}
                            type="text"
                            id="administrator"
                            name="administrator"
                            value={info.administrator}
                            onChange={(event) => handleChange(event)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>IBAN bank account</Typography>
                        <input
                            style={{width: '90%', height: 30, marginTop: 10, marginBottom: 10}}
                            type="text"
                            id="iban"
                            name="iban"
                            value={info.iban}
                            onChange={(event) => handleChange(event)}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default AddClinicInfo;