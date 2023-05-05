import * as React from 'react';
import {styled} from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import "../App.css";

const Accordion = styled((props) => (
    <MuiAccordion defaultExpanded disableGutters elevation={0} square {...props} />
))(({theme}) => ({
    borderTop: `10px solid #fdf1ea`,
    borderLeft: '25px solid #fdf1ea',
    borderRight: '25px solid #fdf1ea',
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
    justifyContent:"start",
    alignItems:"start"
}));

function LeftSide() {
    const [location, setLocation] = React.useState('Iasi');
    const [service, setService] = React.useState('Iasi');

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
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Choose the location</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="radio-group-container">
                        <FormControl component="fieldset">
                            <RadioGroup
                                aria-labelledby="location"
                                value={location}
                                onChange={handleChangeLocation}
                            >
                                <FormControlLabel value="Iasi" control={<Radio size={"small"}/>} label="Iasi"/>
                                <FormControlLabel value="Cluj" control={<Radio size={"small"}/>} label="Cluj"/>
                                <FormControlLabel value="Bucuresti" control={<Radio size={"small"}/>} label="Bucuresti"/>
                            </RadioGroup>
                        </FormControl>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>Choose service</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="radio-group-container">
                        <FormControl component="fieldset">
                            <RadioGroup
                                aria-labelledby="services"
                                value={service}
                                onChange={handleChangeService}
                            >
                                <FormControlLabel value="Washing" control={<Radio size={"small"}/>} label="Washing"/>
                                <FormControlLabel value="Haircut" control={<Radio size={"small"}/>} label="Haircut"/>
                                <FormControlLabel value="Consultation" control={<Radio size={"small"}/>} label="Consultation"/>
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
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Choose the date</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>

    );
}

export default LeftSide;