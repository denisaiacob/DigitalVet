import * as React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

const ProgramTypography = styled(Typography)({
    fontSize: '1.0rem',
    margin:5,
});
function Program() {
    return (
        <Box
            sx={{backgroundColor: "white"}}
        >
            <Box
                sx={{
                    textAlign: "start",
                    borderTop: 30,
                    borderBottom: 30,
                    borderColor: "white",
                    marginLeft: 6.5,
                    marginRight:6.5
                }}
            >
                <Typography
                    variant="h6"
                    fontWeight="bold"
                >
                    Program
                </Typography>
                <Grid container direction="row" spacing={2} sx={{marginTop:1}}>
                    <Grid item xs={4}>
                        <ProgramTypography>Months</ProgramTypography>
                        <ProgramTypography>Tuesday</ProgramTypography>
                        <ProgramTypography>Wednesday</ProgramTypography>
                        <ProgramTypography>Thursday</ProgramTypography>
                        <ProgramTypography>Friday</ProgramTypography>
                        <ProgramTypography>Saturday</ProgramTypography>
                        <ProgramTypography>Sunday</ProgramTypography>
                    </Grid>
                    <Grid item>
                        <ProgramTypography>10:00-18:00</ProgramTypography>
                        <ProgramTypography>10:00-18:00</ProgramTypography>
                        <ProgramTypography>10:00-18:00</ProgramTypography>
                        <ProgramTypography>10:00-18:00</ProgramTypography>
                        <ProgramTypography>10:00-18:00</ProgramTypography>
                        <ProgramTypography>10:00-18:00</ProgramTypography>
                        <ProgramTypography>10:00-18:00</ProgramTypography>

                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default Program;