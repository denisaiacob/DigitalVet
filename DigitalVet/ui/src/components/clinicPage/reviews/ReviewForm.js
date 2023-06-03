import * as React from "react";
import {Autocomplete, Box, FormControl, InputLabel, MenuItem, Rating, Select, Stack, TextField} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import {useEffect, useState} from "react";
import ClinicService from "../../../services/ClinicService";

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 200,
        },
    },
};

function ReviewForm({clinicId, vets}) {
    const [value, setValue] = React.useState(null);
    const [service, setService] = React.useState({
        serviceId: null,
        vetId: null,
        clinicId: null,
        name: "",
        price: null,
        minutes: null
    });
    const [vet, setVet] = React.useState({
        vetId: null,
        clinicId: null,
        name: "",
        function: "",
        description: "",
        photo: ""
    });
    const [services, setServices] = React.useState([]);
    const [description,setDescription]=React.useState("");

    const handleChangeVet = (e) => {
        const value = e.target.value;
        setVet(value);
    };
    const handleChangeService = (e) => {
        const value = e.target.value;
        setService(value);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (vet.vetId !== null) {
                    const response = await ClinicService.getServicesByVetId(vet.vetId);
                    setServices(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData().then();
    }, [vet.vetId]);

    return (
        <div>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: 400}}>
                <Stack spacing={2} sx={{width: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Rating
                        size="large"
                        name="review"
                        value={value}
                        precision={0.5}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        emptyIcon={<StarIcon style={{opacity: 0.55}} fontSize="inherit"/>}
                    />
                    <FormControl fullWidth sx={{mt: 1, mb: 2, width: 300}}>
                        <InputLabel id="choose-location">Select a veterinarian</InputLabel>
                        <Select
                            name="vet"
                            value={vet}
                            label="Select a veterinarian"
                            onChange={handleChangeVet}
                            MenuProps={MenuProps}
                        >
                            {vets.map((v) => (
                                <MenuItem
                                    key={v.vetId}
                                    value={v}
                                    id="vet"
                                >
                                    {v.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    {vet.vetId !== null && (
                        <FormControl fullWidth sx={{mt: 1, mb: 2, width: 300}}>
                            <div>
                                <InputLabel id="choose-location">Select a service</InputLabel>
                                <Select
                                    name="service"
                                    value={service}
                                    label="Select a service"
                                    onChange={handleChangeService}
                                    MenuProps={MenuProps}
                                    sx={{width:'100%'}}
                                >
                                    {services.map((s) => (
                                        <MenuItem
                                            key={s.serviceId}
                                            value={s}
                                            id="service"
                                        >
                                            {s.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </div>
                        </FormControl>
                    )}
                    <TextField
                        label="Review"
                        multiline
                        rows={3}
                        sx={{width:300}}
                        value={description}
                        onChange={(newValue)=>setDescription(newValue)}
                    />
                </Stack>
            </Box>
        </div>
    );
}

export default ReviewForm;