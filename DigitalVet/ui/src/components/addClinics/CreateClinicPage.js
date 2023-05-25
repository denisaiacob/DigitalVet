import React from "react";
import {Box, Grid, Stack, Typography} from "@mui/material";
import {useState} from "react";
import {
    ref,
    uploadBytes,
    getDownloadURL,
} from "firebase/storage";
import {storage} from "./firebase";
import {v4} from "uuid";

function CreateClinicPage({clinic, setClinic}) {
    const [state, setState] = useState({
        imageUploaded: 0,
        selectedFile: null
    })

    const handleUploadClick = event => {
        const file = event.target.files[0];
        const imageUpload=event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = function (e) {
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

    return (
        <Box style={{width: '70%'}}>
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

                            {state.selectedFile !== null && (
                                <img alt="clinic-photo" src={state.selectedFile} style={{width: 150, margin: 10}}/>
                            )}
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
        ;
}

export default CreateClinicPage;