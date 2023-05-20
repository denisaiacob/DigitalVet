import {Box, Grid, Typography} from "@mui/material";

function AddClinicInfo() {
    return (
        <Box
            style={{width: '70%', textAlign: 'center'}}
        >
            <Typography fontWeight="bold" sx={{margin: 3}}>The clinic's information</Typography>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{display: 'flex', textAlign: 'start'}}
            >
                <Grid container style={{width: '100%'}}>
                    <Grid item xs={12}>
                        <Typography>Fiscal Identification Number</Typography>
                        <input
                            style={{width: '90%', height: 30, marginTop: 10, marginBottom: 10}}
                            type="text"
                            // value=''
                            // onChange={handleInputChange}
                            // placeholder="Enter text here"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Trade register number</Typography>
                        <input
                            style={{width: '90%', height: 30, marginTop: 10, marginBottom: 10}}
                            type="text"
                            // value=''
                            // onChange={handleInputChange}
                            // placeholder="Enter text here"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Administrator name</Typography>
                        <input
                            style={{width: '90%', height: 30, marginTop: 10, marginBottom: 10}}
                            type="text"
                            // value=''
                            // onChange={handleInputChange}
                            // placeholder="Enter text here"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>IBAN bank account</Typography>
                        <input
                            style={{width: '90%', height: 30, marginTop: 10, marginBottom: 10}}
                            type="text"
                            // value=''
                            // onChange={handleInputChange}
                            // placeholder="Enter text here"
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default AddClinicInfo;