import * as React from 'react';
import {styled} from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {FormControl, FormControlLabel, MenuItem, Radio, RadioGroup, Stack} from "@mui/material";
import "../../App.css";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {useEffect, useState} from "react";
import {addYears} from "date-fns";
import ClinicService from "../../services/ClinicService";

const Accordion = styled((props) => (
    <MuiAccordion defaultExpanded disableGutters elevation={0} square {...props} />
))(({theme}) => ({
    borderTop: `10px solid #fdf1ea`,
    borderLeft: '20px solid #fdf1ea',
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '0.9rem'}}/>}
        {...props}
    />
))(({theme}) => ({
    backgroundColor: 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "start",
    alignItems: "start"
}));

const RoundedTypography = styled(Typography)({
    fontFamily: 'Arial',
    fontSize: '1.1rem',
});

function LeftSide({initialValues,setInitialValues}) {

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

    return (
        <div>
            <RoundedTypography variant="h5" sx={{marginTop: 3, marginBottom: 1}}> Search filters</RoundedTypography>
            <Accordion>
                <AccordionSummary aria-controls="panel1-content" id="panel1-content">
                    <Typography>Sort by</Typography>
                </AccordionSummary>
                <AccordionDetails>
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
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary aria-controls="panel2-content" id="panel2-content">
                    <Typography>Choose the location</Typography>
                </AccordionSummary>
                <AccordionDetails>
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
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary aria-controls="panel3-content" id="panel3-content">
                    <Typography>Choose service</Typography>
                </AccordionSummary>
                <AccordionDetails>
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
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary aria-controls="panel4-content" id="panel4-content">
                    <Typography>Choose the date</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker
                                    format="DD/MM/YYYY"
                                    label="Choose the date"
                                    value={dayjs(initialValues.date).isValid() ? initialValues.date : null}
                                    sx={{width: 220}}
                                    onChange={(newValue) => setInitialValues({...initialValues, date: newValue})}
                                    disablePast
                                    maxDate={dayjs(maxDate)}
                                    views={['day']}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </FormControl>
                </AccordionDetails>
            </Accordion>
        </div>

    );
}

export default LeftSide;