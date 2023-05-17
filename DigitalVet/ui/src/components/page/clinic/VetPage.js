import * as React from 'react';
import {Avatar, Box, Grid, Stack, Typography} from "@mui/material";
import avatar from "../../images/avatar.jpg";
import {styled} from "@mui/material/styles";
import Reviews from "./reviews/Reviews";

const StyledTypography = styled(Typography)({
    fontFamily: 'Optima',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    '@media (max-width:700px)': {
        fontSize: '1.0rem',
    },
    textAlign: 'center',
});

function VetPage() {
    return (
        <div className="clinic-page">
            <Box
                sx={{
                    margin: 5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    width: '70%',
                }}
            >
                <div>
                    <Grid container spacing={2} sx={{alignItems: 'center'}}>
                        <Grid item>
                            <Avatar
                                alt="Vet"
                                variant="rounded"
                                src={avatar}
                                sx={{width: 150, height: 150}}
                            />
                        </Grid>
                        <Grid item>
                            <Stack
                                spacing={1}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    margin: 2
                                }}
                            >
                                <StyledTypography>Name Name</StyledTypography>
                                <Typography
                                    style={{color: "grey", fontSize: '1.0rem'}}
                                >
                                    Function
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </div>
            </Box>
            <Box
                sx={{
                    borderLeft: 19,
                    borderRight: 19,
                    borderTop: 30,
                    borderBottom: 30,
                    borderColor: "white",
                    backgroundColor: "white",
                    display: 'flex',
                    textAlign: "start",
                    width: '70%',
                }}
            >
                <Typography sx={{ml: 4, mr: 3}}>"About me"</Typography>
            </Box>
            <div style={{marginTop:20,marginBottom:50}}>
                <Reviews/>
            </div>
        </div>
    );
}

export default VetPage;