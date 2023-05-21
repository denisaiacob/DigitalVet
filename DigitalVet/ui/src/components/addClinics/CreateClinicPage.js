import {Box, Grid, Stack, Typography} from "@mui/material";
import UploadPhoto from "./UploadPhoto";
import {useState} from "react";
import AddClinicService from "../../services/AddClinicService";

function CreateClinicPage() {

    const [clinic, setClinic] = useState({
        name: "",
        city: "",
        address: "",
        description: "",
        photo: ""
    })
    const reset = (event) => {
        event.preventDefault();
        setClinic({
            name: "",
            city: "",
            address: "",
            description: "",
            photo: ""
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        AddClinicService.addClinic((clinic)).then((response) => {
            console.log(response);
        })
            .catch((error) => {
                reset(event);
                console.log(error);
            });
    };
    const handleChange = (event) => {
        const value = event.target.value;
        setClinic({...clinic, [event.target.name]: value});
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            style={{width: '70%'}}
        >
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
                            type="text"
                            rows={5}
                            id="description"
                            name="description"
                            value={clinic.description}
                            onChange={(event) => handleChange(event)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <UploadPhoto/>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default CreateClinicPage;