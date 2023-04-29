import React, {useState} from "react";
import {Box, Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {addYears} from "date-fns";
import dayjs from 'dayjs';

const cities = [
    'Iasi',
    'Bucuresti',
    'Cluj'
];
const services = [
    'Washing ', 'Haircut', 'Consultation', 'Deworming', 'Laboratory investigations',
    'Microchip and Passport', 'Hormonal treatments', 'Treatments', 'Vaccinations',
    'Surgical interventions'];

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 200,
        },
    },
};

function ServiceFilter() {
    const [city, setCityName] = useState('');
    const [service, setService] = useState('');
    const [date, setDate] = useState(null);
    const handleLocation = (event) => {
        setCityName(event.target.value);
    };
    const handleServices = (event) => {
        setService(event.target.value);
    };
    const maxDate = String(addYears(new Date(), 1));

    const buttonStyle = {
        backgroundColor: '#54d6be',
        color: 'white',
        marginTop: 10,
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(
            'Location:', city,
            'Service:', service,
            'Date:', datee
        );
    };
    const datee = date ? date.toLocaleString() : '';

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
                    value={city}
                    label="Choose the location"
                    onChange={handleLocation}
                    MenuProps={MenuProps}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {cities.map((location) => (
                        <MenuItem
                            key={location}
                            value={location}
                            id="location"
                        >
                            {location}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{mb: 1, width: 300}}>
                <InputLabel id="choose-service">Choose service</InputLabel>
                <Select
                    id="select-services"
                    value={service}
                    label="Choose service"
                    onChange={handleServices}
                    MenuProps={MenuProps}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {services.map((s) => (
                        <MenuItem
                            key={s}
                            value={s}
                            id='location'
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
                            value={date}
                            sx={{width: 300, mb: 2, mt: 1}}
                            onChange={(newValue) => setDate(newValue)}
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