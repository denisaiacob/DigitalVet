import * as React from 'react';
import {Avatar, Box, Grid, Stack, Typography} from "@mui/material";
import avatar from "../../images/avatar.jpg";
import {styled} from "@mui/material/styles";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ClinicService from "../../services/ClinicService";
import Review from "./reviews/Review";
import SummaryReviews from "./reviews/SummaryReviews";
import FilterByRating from "./reviews/FilterByRating";

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
    const {vetId} = useParams();
    const [vet, setVet] = useState({
        vetId: null,
        clinicId: null,
        name: "",
        function: "",
        description: "",
        photo: ""
    });
    const [checkedItems, setCheckedItems] = useState({
        option5: true,
        option4: true,
        option3: true,
        option2: true,
        option1: true,
    });

    useEffect(() => {
        const fetchVet = async () => {
            try {
                const response = await ClinicService.getVetById(vetId);
                setVet(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        if (vetId) fetchVet().then();
    }, [vetId]);

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
                                src={vet.photo !== '' ? vet.photo : avatar}
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
                                <StyledTypography>{vet.name}</StyledTypography>
                                <Typography
                                    style={{color: "grey", fontSize: '1.0rem'}}
                                >
                                    {vet.function}
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
                <Typography sx={{ml: 4, mr: 3}}>"{vet.description}"</Typography>
            </Box>
            <div style={{marginTop: 20, marginBottom: 50, width: '65%'}}>
                <Grid container spacing={2} direction="row">
                    <Grid item>
                        <SummaryReviews vets={[vet]}/>
                    </Grid>
                    <Grid item>
                        <FilterByRating checkedItems={checkedItems} setCheckedItems={setCheckedItems}/>
                    </Grid>
                </Grid>
                <Review vet={vet} checkedItems={checkedItems}/>
            </div>
        </div>
    );
}

export default VetPage;