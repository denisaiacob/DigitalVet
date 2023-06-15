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
                        <ProgramTypography>Luni</ProgramTypography>
                        <ProgramTypography>Marți</ProgramTypography>
                        <ProgramTypography>Miercuri</ProgramTypography>
                        <ProgramTypography>Joi</ProgramTypography>
                        <ProgramTypography>Vineri</ProgramTypography>
                        <ProgramTypography>Sâmbătă</ProgramTypography>
                        <ProgramTypography>Duminică</ProgramTypography>
                    </Grid>
                    <Grid item>
                        <ProgramTypography>
                            {program.monday === '-' ? 'Închis' : program.monday}
                        </ProgramTypography>
                        <ProgramTypography>
                            {program.tuesday === '-' ? 'Închis' : program.tuesday}
                        </ProgramTypography>
                        <ProgramTypography>
                            {program.wednesday === '-' ? 'Închis' : program.wednesday}
                        </ProgramTypography>
                        <ProgramTypography>
                            {program.thursday === '-' ? 'Închis' : program.thursday}
                        </ProgramTypography>
                        <ProgramTypography>
                            {program.friday === '-' ? 'Închis' : program.friday}
                        </ProgramTypography>
                        <ProgramTypography>
                            {program.saturday === '-' ? 'Închis' : program.saturday}
                        </ProgramTypography>
                        <ProgramTypography>
                            {program.sunday === '-' ? 'Închis' : program.sunday}
                        </ProgramTypography>

                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default Program;