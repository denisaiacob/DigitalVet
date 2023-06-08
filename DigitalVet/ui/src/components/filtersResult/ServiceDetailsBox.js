import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import {
    Grid,
    Typography,
    Box,
    Paper, Button, useMediaQuery, Dialog, DialogTitle, DialogContent, DialogActions
} from "@mui/material";
import BookPage from "../book/BookPage";
import useAuth from "../../hooks/UseAuth";
import {useEffect} from "react";
import ClinicService from "../../services/ClinicService";

const RoundedTypography = styled(Typography)({
    fontFamily: 'Century Gothic',
    fontWeight: 'bold',
    fontSize: '1.0rem',
    textAlign: 'start',
});

function ServiceDetailsBox({service}) {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const {auth} = useAuth();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [appointment, setAppointment] = React.useState({
        day: null,
        time: null,
        serviceId: service.serviceId,
        userId: null
    });

    useEffect(() => {
        if(auth?.user){
            setAppointment((prevAppointment) => ({
                ...prevAppointment,
                userId: auth?.user.id,
            }));
        }
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = async () => {
        try {
            const response = await ClinicService.addAppointment(appointment);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
        setOpen(false);
    };

    return (
        <div key={service.serviceId}>
            <Paper variant="outlined" style={{margin: 5}}>
                <Box sx={{mt: 2, ml: 5, mr: 2, mb: 1, width: '90%'}}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item container direction="row" spacing={2}>
                            <Grid item xs={12} md={10}>
                                <RoundedTypography variant="h5">{service.name}</RoundedTypography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <RoundedTypography variant="h5">{service.price} Lei</RoundedTypography>
                            </Grid>
                        </Grid>
                        <Grid item container direction="row" spacing={2}>
                            <Grid item md={10} xs={12}>
                                <Typography textAlign="start" variant="body2"
                                            color='gray'>{service.minutes} minutes</Typography>
                            </Grid>
                            <Grid item md={2} xs={12}>
                                {auth?.roles?.find(role => role === 'user') &&
                                    <Button
                                        variant="outlined"
                                        style={{color: '#43ab98', borderColor: '#43ab98'}}
                                        onClick={handleClickOpen}
                                    >
                                        Book
                                    </Button>
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle>
                    {"Choose the day and time of the appointment"}
                </DialogTitle>
                <DialogContent>
                    <BookPage
                        timeSteps={service.minutes}
                        setAppointment={setAppointment}
                    />
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
        </div>
    );
}

export default ServiceDetailsBox;