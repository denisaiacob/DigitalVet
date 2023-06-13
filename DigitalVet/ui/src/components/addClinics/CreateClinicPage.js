import React from "react";
import {Alert, Box, Button, Grid, Snackbar, Stack, Typography} from "@mui/material";
import {useState} from "react";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {storage} from "./firebase";
import {v4} from "uuid";
import ClinicService from "../../services/ClinicService";

function CreateClinicPage({clinic, setClinic, update}) {
    const [open, setOpen] = React.useState(false);
    const [success, setSuccess] = React.useState(true);
    const [state, setState] = useState({
        imageUploaded: 0,
        selectedFile: null
    })

    const handleUploadClick = event => {
        const file = event.target.files[0];
        const imageUpload = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = function () {
            setState(prevState => ({
                ...prevState,
                selectedFile: [reader.result],
                imageUploaded: 1
            }));
        };
        if (file) {
            reader.readAsDataURL(file);
        }
        const imageRef = ref(storage, `clinicImages/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setClinic((prevClinic) => ({
                    ...prevClinic,
                    photo: url,
                }));
            });
        })
    };
    const handleChange = (event) => {
        const value = event.target.value;
        setClinic({...clinic, [event.target.name]: value});
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        ClinicService.updateClinic(clinic, clinic.clinicId)
            .then()
            .catch(() => {
                setSuccess(false);
            });
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <div className="clinic-page">
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                {success ? (
                    <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
                        The clinic page has been successfully updated!
                    </Alert>
                ) : (
                    <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                        An error occurred during the update!
                    </Alert>
                )}
            </Snackbar>
            <Box style={{width: '70%', textAlign: 'center'}}>
                <Typography fontWeight="bold" sx={{margin: 3}}>Information for the Clinic Page</Typography>
                <Box sx={{textAlign: 'start'}}>
                    <Grid container style={{width: '100%'}}>
                        <Grid item xs={6}>
                            <Stack spacing={1} style={{width: '100%'}}>
                                <Typography>The name of the clinic</Typography>
                                <input
                                    style={{marginTop: 10, marginBottom: 10, marginRight: 10, width: '80%', height: 30}}
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={clinic.name}
                                    onChange={(event) => handleChange(event)}
                                />
                            </Stack>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>City</Typography>
                            <input
                                style={{marginTop: 10, marginBottom: 10, width: '80%', height: 30}}
                                type="text"
                                id="city"
                                name="city"
                                value={clinic.city}
                                onChange={(event) => handleChange(event)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>Address</Typography>
                            <input
                                style={{width: '90%', height: 30, marginTop: 10, marginBottom: 10}}
                                type="text"
                                id="address"
                                name="address"
                                value={clinic.address}
                                onChange={(event) => handleChange(event)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>A short description</Typography>
                            <textarea
                                style={{width: '90%', height: 100, marginTop: 10, marginBottom: 10}}
                                rows={5}
                                id="description"
                                name="description"
                                value={clinic.description}
                                onChange={(event) => handleChange(event)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <div>
                                <input
                                    accept="image/*"
                                    id="contained-button-file"
                                    type="file"
                                    onChange={handleUploadClick}
                                />

                                {state.selectedFile && (
                                    <img
                                        alt="clinic-photo"
                                        src={state.selectedFile}
                                        style={{width: 150, margin: 10}}
                                    />
                                )}
                                {clinic.photo && !state.selectedFile && (
                                    <img
                                        alt="clinic-photo"
                                        src={clinic.photo}
                                        style={{width: 150, margin: 10}}
                                    />
                                )}

                            </div>
                        </Grid>
                    </Grid>
                </Box>
                <div style={{marginTop: 30}}>
                    {update &&
                        <Button
                            onClick={handleUpdate}
                            variant="outlined"
                            style={{color: '#43ab98', borderColor: '#43ab98'}}
                        >
                            Update
                        </Button>}
                </div>
            </Box>
        </div>
    );
}

export default CreateClinicPage;