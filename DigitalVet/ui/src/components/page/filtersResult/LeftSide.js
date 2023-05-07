import * as React from 'react';
import {styled} from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {FormControl, FormControlLabel, Radio, RadioGroup, Stack} from "@mui/material";
import "../../../App.css";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {TimePicker} from "@mui/x-date-pickers";
import {useState} from "react";
import {addYears} from "date-fns";

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

function LeftSide() {
    const [sort, setSort] = React.useState('Rating');
    const [location, setLocation] = React.useState('Iasi');
    const [service, setService] = React.useState('Consultation');
    const [date, setDate] = useState(null);
    const [time, setTime] = React.useState(dayjs('2022-04-17T15:30'));


    const maxDate = String(addYears(new Date(), 1));
    const handleChangeSortBy = (event) => {
        setSort(event.target.value);
    };
    const handleChangeLocation = (event) => {
        setLocation(event.target.value);
    };
    const handleChangeService = (event) => {
        setService(event.target.value);
    };
    return (
        <div>
            <Typography variant="h6" sx={{marginTop: 3}}> Search filters</Typography>
            <Accordion>
                <AccordionSummary aria-controls="panel1-content" id="panel1-content">
                    <Typography>Sort by</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="radio-group-container" align="start">
                        <FormControl component="fieldset">
                            <RadioGroup
                                aria-labelledby="sort"
                                value={sort}
                                onChange={handleChangeSortBy}
                            >
                                <FormControlLabel value="Rating" control={<Radio size={"small"}/>} label="Rating"/>
                                <FormControlLabel value="low" control={<Radio size={"small"}/>} label="The lowest price"/>
                                <FormControlLabel value="high" control={<Radio size={"small"}/>} label="The highest price"/>
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
                                aria-labelledby="location"
                                value={location}
                                onChange={handleChangeLocation}
                            >
                                <FormControlLabel value="Iasi" control={<Radio size={"small"}/>} label="Iasi"/>
                                <FormControlLabel value="Cluj" control={<Radio size={"small"}/>} label="Cluj"/>
                                <FormControlLabel value="Bucuresti" control={<Radio size={"small"}/>}
                                                  label="Bucuresti"/>
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
                                aria-labelledby="services"
                                value={service}
                                onChange={handleChangeService}
                            >
                                <FormControlLabel value="Washing" control={<Radio size={"small"}/>} label="Washing"/>
                                <FormControlLabel value="Haircut" control={<Radio size={"small"}/>} label="Haircut"/>
                                <FormControlLabel value="Consultation" control={<Radio size={"small"}/>}
                                                  label="Consultation"/>
                                <FormControlLabel value="Vaccinations" control={<Radio size={"small"}/>}
                                                  label="Vaccinations"/>
                                <FormControlLabel value="Laboratory investigations" control={<Radio size={"small"}/>}
                                                  label="Laboratory investigations"/>
                                <FormControlLabel value="Surgical interventions" control={<Radio size={"small"}/>}
                                                  label="Surgical interventions"/>
                            </RadioGroup>
                        </FormControl>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary aria-controls="panel4-content" id="panel4-content">
                    <Typography>Choose the date and time</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker', 'TimePicker']}>
                                <Stack direction="column" spacing={2}>
                                    <DatePicker
                                        format="DD/MM/YYYY"
                                        label="Choose the date"
                                        value={date}
                                        sx={{width: 220}}
                                        onChange={(newValue) => setDate(newValue)}
                                        disablePast
                                        maxDate={dayjs(maxDate)}
                                        views={['day']}
                                    />
                                    <TimePicker
                                        label="Choose the time"
                                        value={time}
                                        onChange={(newTime) => setTime(newTime)}
                                    />
                                </Stack>
                            </DemoContainer>
                        </LocalizationProvider>
                    </FormControl>
                </AccordionDetails>
            </Accordion>
        </div>

    );
}

export default LeftSide;