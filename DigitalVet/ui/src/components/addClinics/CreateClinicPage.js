import {Box, Grid, Stack, Typography} from "@mui/material";
import {useState} from "react";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {storage} from "./firebase";
import {v4} from "uuid";

function CreateClinicPage({clinic,setClinic}) {

    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState('');

    const uploadFile = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrls(() => url);
                setClinic((prevClinic) => ({
                    ...prevClinic,
                    photo: url,}));
            });
        });
    };

    const handleChange = (event) => {
        const value = event.target.value;
        setClinic({...clinic, [event.target.name]: value});
    };

    return (
        <Box style={{width: '70%'}}>
            <Typography fontWeight="bold" sx={{margin: 3}} >Information for the Clinic Page</Typography>
            <Box sx={{textAlign:'start'}}>
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
                                type="file"
                                onChange={(event) => {
                                    setImageUpload(event.target.files[0]);
                                }}
                            />
                            <button onClick={uploadFile}> Upload Image</button>
                            <img alt="clinic-photo" src={imageUrls} style={{width: 150, margin: 10}}/>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default CreateClinicPage;