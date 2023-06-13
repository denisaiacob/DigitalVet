import * as React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import {useEffect, useState} from "react";
import ClinicService from "../../services/ClinicService";

const ProgramTypography = styled(Typography)({
    fontSize: '1.0rem',
    margin: 5,
});

function Program({clinicId}) {
    const [program, setProgram] = useState({
        programId: null,
        clinicId: clinicId,
        monday: "",
        tuesday: "",
        wednesday: "",
        thursday: "",
        friday: "",
        saturday: "",
        sunday: ""
    });

    useEffect(() => {
        const fetchProgram = async () => {
            try {
                const response = await ClinicService.getProgramByClinicId(clinicId);
                setProgram(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProgram().then();
    }, [clinicId]);

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
                    marginRight: 6.5
                }}
            >
                <Typography
                    variant="h6"
                    fontWeight="bold"
                >
                    Program
                </Typography>
                <Grid container direction="row" spacing={2} sx={{marginTop: 1}}>
                    <Grid item xs={4}>
                        <ProgramTypography>Monday</ProgramTypography>
                        <ProgramTypography>Tuesday</ProgramTypography>
                        <ProgramTypography>Wednesday</ProgramTypography>
                        <ProgramTypography>Thursday</ProgramTypography>
                        <ProgramTypography>Friday</ProgramTypography>
                        <ProgramTypography>Saturday</ProgramTypography>
                        <ProgramTypography>Sunday</ProgramTypography>
                    </Grid>
                    <Grid item>
                        <ProgramTypography>
                            {program.monday === '-' ? 'Closed' : program.monday}
                        </ProgramTypography>
                        <ProgramTypography>
                            {program.tuesday === '-' ? 'Closed' : program.tuesday}
                        </ProgramTypography>
                        <ProgramTypography>
                            {program.wednesday === '-' ? 'Closed' : program.wednesday}
                        </ProgramTypography>
                        <ProgramTypography>
                            {program.thursday === '-' ? 'Closed' : program.thursday}
                        </ProgramTypography>
                        <ProgramTypography>
                            {program.friday=== '-' ? 'Closed' : program.friday}
                        </ProgramTypography>
                        <ProgramTypography>
                            {program.saturday === '-' ? 'Closed' : program.saturday}
                        </ProgramTypography>
                        <ProgramTypography>
                            {program.sunday === '-' ? 'Closed' : program.sunday}
                        </ProgramTypography>

                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default Program;