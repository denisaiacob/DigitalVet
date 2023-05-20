import {Box, Grid, Stack, Typography} from "@mui/material";
import UploadPhoto from "./UploadPhoto";

function CreateClinicPage() {
    return (
        <Box style={{width: '70%'}}>
            <Typography fontWeight="bold" sx={{margin: 3}} >Information for the Clinic Page</Typography>
            <Box sx={{textAlign:'start'}}>
                <Grid container style={{width: '100%'}}>
                    <Grid item xs={6}>
                        <Stack spacing={1} style={{width: '100%'}}>
                            <Typography>The name of the clinic</Typography>
                            <input
                                style={{marginTop: 10, marginBottom: 10, marginRight: 10, width: '80%', height: 30}}
                                type="text"
                                // value=''
                                // onChange={handleInputChange}
                                // placeholder="Enter text here"
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>City</Typography>
                        <input
                            style={{marginTop: 10, marginBottom: 10, width: '80%', height: 30}}
                            type="text"
                            // value=''
                            // onChange={handleInputChange}
                            // placeholder="Enter text here"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Address</Typography>
                        <input
                            style={{width: '90%', height: 30, marginTop: 10, marginBottom: 10}}
                            type="text"
                            // value=''
                            // onChange={handleInputChange}
                            // placeholder="Enter text here"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>A short description</Typography>
                        <textarea
                            style={{width: '90%', height: 100, marginTop: 10, marginBottom: 10}}
                            type="text"
                            rows={5}
                            // value=''
                            // onChange={handleInputChange}
                            // placeholder="Enter text here"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <UploadPhoto/>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default CreateClinicPage;