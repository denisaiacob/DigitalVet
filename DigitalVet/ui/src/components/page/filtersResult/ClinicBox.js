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
import {useHistory} from "react-router-dom";

const PointerTypography = styled(Typography)({
    cursor: 'pointer',
    "&:hover": {
        color: blue[800],
    },
});

function ClinicBox({clinic}) {
    const history = useHistory();
    const handleReviews = () => {
        history.push("/");
    };
    const handleClinic = (clinicId) => {
        history.push(`/clinic/${clinicId}`);
    };

    return (
        <div key={clinic.clinicId} className="show-box">
            <Grid container spacing={2}>
                <Grid item>
                    <CardMedia
                        component="img"
                        sx={{width: 360}}
                        image={clinic.photo}
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
                                5.0
                            </Typography>
                            <Box sx={{maxWidth:120}}>
                                <PointerTypography onClick={handleReviews}>
                                    30 Reviews
                                </PointerTypography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Checkbox
                            sx={{
                                color: red[500],
                                '&.Mui-checked': {
                                    color: red[500],
                                },
                            }}
                            icon={<FavoriteBorder/>}
                            checkedIcon={<Favorite/>}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default ClinicBox;