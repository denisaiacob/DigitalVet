import * as React from 'react';
import {styled} from '@mui/material/styles';
import {
    Checkbox,
    Grid,
    CardHeader,
    CardMedia,
    Typography, Box,
} from "@mui/material";
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import {yellow, red, blue} from "@mui/material/colors";
import StarIcon from '@mui/icons-material/Star';
import {useNavigate} from "react-router-dom";
import avatar from "../../images/ClinicAvatar.png"
import {useEffect, useState} from "react";
import ClinicService from "../../services/ClinicService";
import useAuth from "../../hooks/UseAuth";

const PointerTypography = styled(Typography)({
    cursor: 'pointer',
    "&:hover": {
        color: blue[800],
    },
});

function ClinicBox({clinic}) {
    const navigate = useNavigate();
    const [rating, setRating] = useState(5.0);
    const [reviewsNumber, setReviewsNumber] = useState(0);
    const {auth} = useAuth();
    const handleReviews = () => {
        navigate("/");
    };
    const handleClinic = (clinicId) => {
        navigate(`/clinic/${clinicId}`);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const vetsResponse = await ClinicService.getVetsByClinicId(clinic.clinicId);
                let count = 0;
                let avg = 0;

                const promises = vetsResponse.data.map(async (vet) => {
                    const response = await ClinicService.getReviewByVetId(vet.vetId);
                    response.data.map((review) => {
                        avg = avg + review.stars;
                        count = count + 1;
                    })
                });

                await Promise.all(promises);

                if (count !== 0) {
                    setReviewsNumber(count);
                    setRating(parseFloat((avg / count).toFixed(1)));
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData().then();
    }, [clinic.clinicId]);

    return (
        <div key={clinic.clinicId} className="show-box">
            <Grid container spacing={2}>
                <Grid
                    item
                    md={6}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 30
                    }}
                >
                    <CardMedia
                        component="img"
                        sx={{width: '100%'}}
                        image={clinic.photo === "" ? avatar : clinic.photo}
                        alt="Clinic"
                        onClick={() => handleClinic(clinic.clinicId)}
                    />
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs={10} container direction="column" spacing={2} sx={{marginTop: 3}}>
                        <Grid item xs={2}>
                            <CardHeader
                                title={clinic.name}
                                subheader={clinic.address}
                                onClick={() => handleClinic(clinic.clinicId)}
                            />
                        </Grid>
                        <Grid item className="align-center">
                            <Typography variant="h5" component="span">
                                <StarIcon sx={{color: yellow[800]}}/>
                                {rating}
                            </Typography>
                            <Box sx={{maxWidth: 120}}>
                                <PointerTypography onClick={handleReviews}>
                                    {reviewsNumber} Reviews
                                </PointerTypography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item>
                        {auth?.user && !auth?.roles?.find(role => role === 'business') && (
                            <Checkbox
                                sx={{
                                    color: red[500],
                                    '&.Mui-checked': {
                                        color: red[500],
                                    },
                                }}
                                icon={<FavoriteBorder/>}
                                checkedIcon={<Favorite/>}
                            />)}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default ClinicBox;