import React, {useEffect, useState} from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {addYears} from "date-fns";
import dayjs from 'dayjs';
import {useHistory} from "react-router-dom";
import ClinicService from "../../services/ClinicService";

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 200,
        },
    },
};

function ServiceFilter() {
    const history = useHistory();
    const initialValues = {
        location: "",
        service: "",
        date: null
    }
    const [formValues, setFormValues] = useState(initialValues);

    const [clinics, setClinics] = useState([]);
    const uniqueCities = [...new Set(clinics.map((location) => location.city))];

    const [servicesDb, setServicesDb] = useState([]);
    const uniqueServices = [...new Set(servicesDb.map((service) => service.name))];

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    };
    const maxDate = String(addYears(new Date(), 1));

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate(formValues)) {
            history.push("/show");
        } else {
            alert("Select a filter!")
        }
    };
    // const datee = date ? date.toLocaleString() : '';

    useEffect(() => {
        const fetchClinics = async () => {
            try {
                const response = await ClinicService.getAllClinics();
                setClinics(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        const fetchServices = async () => {
            try {
                const response = await ClinicService.getAllServices();
                setServicesDb(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchClinics();
        fetchServices();
    }, []);

    const validate = (values) => {
        if (!values.location && !values.service && !values.date) {
            return false;
        }
        return true;
    };

    const buttonStyle = {
        backgroundColor: '#54d6be',
        color: 'white',
        marginTop: 10,
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
        >
            <FormControl fullWidth sx={{mt: 1, mb: 2, width: 300}}>
                <InputLabel id="choose-location">Choose the location</InputLabel>
                <Select
                    id="select-location"
                    name="location"
                    value={formValues.location}
                    label="Choose the location"
                    onChange={handleChange}
                    MenuProps={MenuProps}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {uniqueCities.map((city) => (
                        <MenuItem
                            key={city}
                            value={city}
                            id="location"
                        >
                            {city}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{mb: 1, width: 300}}>
                <InputLabel id="choose-service">Choose service</InputLabel>
                <Select
                    id="select-services"
                    name="service"
                    value={formValues.service}
                    label="Choose service"
                    onChange={handleChange}
                    MenuProps={MenuProps}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {uniqueServices.map((s) => (
                        <MenuItem
                            key={s}
                            value={s}
                            id='service'
                        >
                            {s}
                        </MenuItem>
                    ))}
                </Select>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker
                            format="DD/MM/YYYY"
                            label="Choose the date"
                            value={formValues.date}
                            sx={{width: 300, mb: 2, mt: 1}}
                            onChange={(newValue) => setFormValues({...formValues, date: newValue})}
                            disablePast
                            maxDate={dayjs(maxDate)}
                            views={['day']}
                        />
                    </DemoContainer>
                </LocalizationProvider>
            </FormControl>
            <Button
                variant='contained'
                fullWidth
                type='submit'
                style={buttonStyle}
            >
                Search for services
            </Button>
        </Box>
    );
}

export default ServiceFilter;