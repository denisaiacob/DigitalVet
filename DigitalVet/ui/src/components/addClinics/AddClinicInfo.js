import {Box, Grid, Typography} from "@mui/material";

function AddClinicInfo() {
    return (
        <Box
            sx={{
                margin: 5,
                width: '80%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
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