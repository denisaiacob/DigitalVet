import * as React from 'react';
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, useMediaQuery} from "@mui/material";
import FilterByRating from "./FilterByRating";
import SummaryReviews from "./SummaryReviews";
import Review from "./Review";
import AddIcon from '@mui/icons-material/Add';
import {useTheme} from "@mui/material/styles";
import ReviewForm from "./ReviewForm";
import {useEffect} from "react";
import ClinicService from "../../../services/ClinicService";

function Reviews({clinicId}) {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [vets,setVets]=React.useState([]);

    const handleAddReview= () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = () => {
        setOpen(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ClinicService.getVetsByClinicId(clinicId);
                setVets(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData().then();
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
                    marginRight:6.5
                }}
            >
                <Button
                    startIcon={<AddIcon />}
                    sx={{color: '#43ab98',marginBottom:3}}
                    onClick={handleAddReview}
                >
                    Add a review
                </Button>
                <Grid container spacing={2} direction="row">
                    <Grid item>
                        <SummaryReviews/>
                    </Grid>
                    <Grid item>
                        <FilterByRating/>
                    </Grid>
                </Grid>
                <Review/>
            </Box>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle>
                    {"Add a review"}
                </DialogTitle>
                <DialogContent>
                    <ReviewForm clinicId={clinicId} vets={vets}/>
                </DialogContent>
                <DialogActions>
                    <Button
                        autoFocus
                        onClick={handleClose}
                        style={{color: '#43ab98'}}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        autoFocus
                        style={{color: '#43ab98'}}
                    >
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default Reviews;