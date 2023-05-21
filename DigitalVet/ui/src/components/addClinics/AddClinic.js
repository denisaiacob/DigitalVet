import * as React from 'react';
import {
    Box,
    AppBar,
    Toolbar,
    Stepper,
    StepConnector,
    stepConnectorClasses,
    Button,
    StepLabel,
    Step
} from '@mui/material';
import {styled} from "@mui/material/styles";
import {Check} from "@mui/icons-material";
import PropTypes from "prop-types";
import CreateClinicPage from "./CreateClinicPage";
import AddClinicInfo from "./AddClinicInfo";
import AddProgram from "./AddProgram";
import AddServices from "./AddServices";
import AddVet from "./AddVet";

const steps = ['Clinic page', 'Clinic information', 'Add program', 'Add veterinarians','Add services'];

const QontoConnector = styled(StepConnector)(({theme}) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#43ab98',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#43ab98',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
}));
const QontoStepIconRoot = styled('div')(({theme, ownerState}) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
        color: '#43ab98',
    }),
    '& .QontoStepIcon-completedIcon': {
        color: '#43ab98',
        zIndex: 1,
        fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
}));

function QontoStepIcon(props) {
    const {active, completed, className} = props;

    return (
        <QontoStepIconRoot ownerState={{active}} className={className}>
            {completed ? (
                <Check className="QontoStepIcon-completedIcon"/>
            ) : (
                <div className="QontoStepIcon-circle"/>
            )}
        </QontoStepIconRoot>
    );
}

QontoStepIcon.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    completed: PropTypes.bool,
};

function AddClinic() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleFinish = () => {
        setActiveStep(0);
    };

    let stepContent;
    switch (activeStep) {
        case 0:
            stepContent = <CreateClinicPage/>;
            break;
        case 1:
            stepContent = <AddClinicInfo/>;
            break;
        case 2:
            stepContent = <AddProgram/>;
            break;
        case 3:
            stepContent = <AddVet/>;
            break;
        default:
            stepContent =<AddServices/>;
    }

    return (
        <div className="clinic-page">
            <Box sx={{width: '90%', margin: 5, alignItems: 'center'}}>
                <Stepper activeStep={activeStep} connector={<QontoConnector/>}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 40}}>
                    {stepContent}
                </div>
                <AppBar style={{background: 'transparent', top: 'auto', bottom: 0, marginTop: 'auto'}}>
                    <Toolbar>
                        <Button
                            variant="outlined"
                            style={{
                                color: activeStep === 0 ? 'gray' : '#43ab98',
                                borderColor: activeStep === 0 ? 'gray' : '#43ab98'
                            }}
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{mr: 1}}
                        >
                            Back
                        </Button>
                        <Box sx={{flex: '1 1 auto'}}/>
                        {activeStep === steps.length - 1 ? (
                            <Button
                                onClick={handleFinish}
                                variant="outlined"
                                style={{color: '#43ab98', borderColor: '#43ab98'}}
                            >
                                Finish
                            </Button>
                        ) : (
                            <Button
                                onClick={handleNext}
                                variant="outlined"
                                style={{color: '#43ab98', borderColor: '#43ab98'}}
                            >
                                Next
                            </Button>
                        )}
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}

export default AddClinic;