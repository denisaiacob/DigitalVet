import * as React from 'react';
import {
    Alert,
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid, Snackbar,
    useMediaQuery
} from "@mui/material";
import FilterByRating from "./FilterByRating";
import SummaryReviews from "./SummaryReviews";
import Review from "./Review";
import AddIcon from '@mui/icons-material/Add';
import {useTheme} from "@mui/material/styles";
import ReviewForm from "./ReviewForm";
import {useEffect, useState} from "react";
import ClinicService from "../../../services/ClinicService";
import useAuth from "../../../hooks/UseAuth";

function ReviewsPart({clinicId}) {
    const {auth} = useAuth();
    const [open, setOpen] = React.useState(false);
    const [openError, setOpenError] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [vets, setVets] = React.useState([]);
    const [submit, setSubmit] = React.useState(false);
    const [review, setReview] = React.useState({
        vetId: null,
        service: "",
        stars: null,
        description: "",
        user: "",
        day: ""
    });
    const [checkedItems, setCheckedItems] = useState({
        option5: true,
        option4: true,
        option3: true,
        option2: true,
        option1: true,
    });

    const handleAddReview = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleCloseError = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenError(false);
    };
    const handleSubmit = async () => {
        if (review.vetId && review.service && review.stars) {
            setOpen(false);
            try {
                await ClinicService.addReview(review);
                setSubmit(true);
            } catch (error) {
                console.log(error);
            }
        } else setOpenError(true);
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
        if (clinicId) fetchData().then();
    }, [clinicId, submit]);

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
                {auth?.user && !auth?.roles?.find(role => role === 'business') && (
                    <Button
                        startIcon={<AddIcon/>}
                        sx={{color: '#43ab98', marginBottom: 3}}
                        onClick={handleAddReview}
                    >
                        Adaugă o recenzie
                    </Button>
                )}
                <Grid container spacing={2} direction="row">
                    <Grid item>
                        <SummaryReviews vets={vets}/>
                    </Grid>
                    <Grid item>
                        <FilterByRating checkedItems={checkedItems} setCheckedItems={setCheckedItems}/>
                    </Grid>
                </Grid>
                {vets.map((vet) => (
                    <div key={vet.vetId}>
                        <Review
                            vet={vet}
                            checkedItems={checkedItems}
                        />
                    </div>
                ))}
            </Box>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle>
                    {"Adaugă o recenzie"}
                </DialogTitle>
                <DialogContent>
                    <ReviewForm clinicId={clinicId} vets={vets} setReview={setReview}/>
                    <Snackbar open={openError} autoHideDuration={5000} onClose={handleCloseError}>
                        <Alert onClose={handleCloseError} severity="error" sx={{width: '100%'}}>
                            Recenzia nu a putut fi salvată!
                        </Alert>
                    </Snackbar>
                </DialogContent>
                <DialogActions>
                    <Button
                        autoFocus
                        onClick={handleClose}
                        style={{color: '#43ab98'}}
                    >
                        Închide
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        autoFocus
                        style={{color: '#43ab98'}}
                    >
                        Salvează
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default ReviewsPart;