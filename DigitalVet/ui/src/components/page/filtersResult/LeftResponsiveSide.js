import * as React from 'react';
import CloseIcon from "@mui/icons-material/Close";
import {
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Stack,
    Box,
    Drawer,
    Button,
    IconButton,
    Typography
} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import {useEffect, useState} from "react";
import {addYears} from "date-fns";
import ClinicService from "../../../services/ClinicService";
import FilterAltIcon from '@mui/icons-material/FilterAlt';

function LeftResponsiveSide({initialValues, setInitialValues}) {
    const [state, setState] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        setState(open);
    };
    const [clinics, setClinics] = useState([]);
    const uniqueCities = [...new Set(clinics.map((location) => location.city))];

    const [servicesDb, setServicesDb] = useState([]);
    const uniqueServices = [...new Set(servicesDb.map((service) => service.name))];

    const maxDate = String(addYears(new Date(), 1));
    const handleChange = (e) => {
        const {name, value} = e.target;
        setInitialValues({...initialValues, [name]: value});
    };

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

    const list = () => (
        <Box
            sx={{width: '100vw', height: '100vh', border: 10, borderColor: 'white'}}
            role="presentation"
        >
            <IconButton onClick={toggleDrawer(false)}><CloseIcon/></IconButton>
            <div style={{marginLeft: 30, marginTop: 10}}>
                <Stack>
                    <Box style={{marginBottom: 50}}>
                        <Typography style={{marginBottom: 10}}>Sort by</Typography>
                        <div className="radio-group-container" align="start">
                            <FormControl component="fieldset">
                                <RadioGroup
                                    name="sort"
                                    aria-labelledby="sort"
                                    value={initialValues.sort}
                                    onChange={handleChange}
                                >
                                    <FormControlLabel value="rating" control={<Radio size={"small"}/>} label="Rating"/>
                                    <FormControlLabel value="low" control={<Radio size={"small"}/>}
                                                      label="The lowest price"/>
                                    <FormControlLabel value="high" control={<Radio size={"small"}/>}
                                                      label="The highest price"/>
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </Box>
                    <Box style={{marginBottom: 50}}>
                        <Typography style={{marginBottom: 10}}>Choose the location</Typography>
                        <div className="radio-group-container" align="start">
                            <FormControl component="fieldset">
                                <RadioGroup
                                    name="location"
                                    aria-labelledby="location"
                                    value={initialValues.location}
                                    onChange={handleChange}
                                >
                                    {uniqueCities.map((city) => (
                                        <FormControlLabel
                                            key={city}
                                            value={city}
                                            id="location"
                                            control={<Radio size={"small"}/>}
                                            label={city}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </Box>
                    <Box style={{marginBottom: 50}}>
                        <Typography style={{marginBottom: 10}}>Choose service</Typography>
                        <div className="radio-group-container" align="start">
                            <FormControl component="fieldset">
                                <RadioGroup
                                    name="service"
                                    aria-labelledby="services"
                                    value={initialValues.service}
                                    onChange={handleChange}
                                >
                                    {uniqueServices.map((service) => (
                                        <FormControlLabel
                                            key={service}
                                            value={service}
                                            id="service"
                                            control={<Radio size={"small"}/>}
                                            label={service}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </Box>
                    <Box style={{marginBottom: 50}}>
                        <Typography style={{marginBottom: 10}}>Choose the date</Typography>
                        <div className="radio-group-container" align="start">
                            <FormControl>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker
                                            format="DD/MM/YYYY"
                                            label="Choose the date"
                                            value={dayjs(initialValues.date).isValid() ? initialValues.date : null}
                                            sx={{width: 220}}
                                            onChange={(newValue) => setInitialValues({
                                                ...initialValues,
                                                date: newValue
                                            })}
                                            disablePast
                                            maxDate={dayjs(maxDate)}
                                            views={['day']}
                                        />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </FormControl>
                        </div>
                    </Box>
                </Stack>
            </div>
        </Box>
    );

    return (
        <div style={{marginTop: 20}}>
            <Button
                onClick={toggleDrawer(true)}
                variant="outlined"
                startIcon={<FilterAltIcon/>}
                style={{color: '#43ab98', borderColor: '#43ab98'}}
            >
                Filter
            </Button>
            <Drawer
                anchor={'left'}
                open={state}
                onClose={toggleDrawer(false)}
            >
                {list()}
            </Drawer>
        </div>
    );
}

export default LeftResponsiveSide;