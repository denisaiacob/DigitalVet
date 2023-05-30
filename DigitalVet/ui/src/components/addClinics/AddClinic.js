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
import AddClinicService from "../../services/ClinicService";
import {useState} from "react";
import {Link} from "react-router-dom";


const steps = ['Clinic page', 'Clinic information', 'Add program', 'Add veterinarians', 'Add services'];

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
    const [createClinic, setCreateClinic] = useState(false)
    const [clinicId,setClinicId]=useState(null)
    // const [vetsId,setVetsId]=useState([])
    const [clinic, setClinic] = useState({
        name: "",
        city: "",
        address: "",
        description: "",
        photo: ""
    })
    const [info, setInfo] = useState({
        fin: "",
        trade: "",
        administrator: "",
        iban: "",
    })
    const [vet, setVet] = useState([{
        clinicId: null,
        name: "",
        function: "",
        description: "",
        photo: ""
    }])
    const [program, setProgram] = useState({
        clinicId: null,
        months1: "",
        tuesday1: "",
        wednesday1: "",
        thursday1: "",
        friday1: "",
        saturday1: "",
        sunday1: "",
        months2: "",
        tuesday2: "",
        wednesday2: "",
        thursday2: "",
        friday2: "",
        saturday2: "",
        sunday2: ""
    })
    const [programSubmit, setProgramSubmit] = useState({
        clinicId: null,
        months: "",
        tuesday: "",
        wednesday: "",
        thursday: "",
        friday: "",
        saturday: "",
        sunday: ""
    })
    const [service, setService] = useState([{
        vetName: "",
        name: "",
    }])
    const [serviceSubmit, setServiceSubmit] = useState([{
        vetId: null,
        name: "",
    }])

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleProgram = (clinicId) => {
        setClinicId(clinicId);
        setProgramSubmit((prevProgramSubmit) => ({
            clinicId: clinicId,
            months: program.months1 + "-" + program.months2,
            tuesday: program.tuesday1 + "-" + program.tuesday2,
            wednesday: program.wednesday1 + "-" + program.wednesday2,
            thursday: program.thursday1 + "-" + program.thursday2,
            friday: program.friday1 + "-" + program.friday2,
            saturday: program.saturday1 + "-" + program.saturday2,
            sunday: program.sunday1 + "-" + program.sunday2
        }));
        vet.map((x, index) => {
            setVet(prevVet => {
                const newList = [...prevVet];
                newList[index] = {
                    ...newList[index],
                    clinicId: clinicId
                };
                return newList;
            })
        });
    };

    const handleCreateClinic = (event) => {
        event.preventDefault();
        AddClinicService.addClinic((clinic)).then((response) => {
            console.log(response);
            handleProgram(response.data);
            setCreateClinic(true);
        }).catch((error) => {
            console.log(error);
        });
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleSubmit = (event) => {
        setCreateClinic(false);
        vet.map((x, i) => {
            AddClinicService.addVet((vet[i])).then((response) => {
                console.log(response);
                // setVetsId((prevState) => ([...prevState,response.data]));
            }).catch((error) => {
                console.log(error);
            })
        });
        // service.map((x, i) => {
        //     AddClinicService.addService((serviceSubmit[i])).then((response) => {
        //         console.log(response);
        //     }).catch((error) => {
        //         console.log(error);
        //     })
        // });
        AddClinicService.addProgram((programSubmit)).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    };

    let stepContent;
    switch (activeStep) {
        case 0:
            stepContent = <CreateClinicPage clinic={clinic} setClinic={setClinic} update={false}/>;
            break;
        case 1:
            stepContent = <AddClinicInfo info={info} setInfo={setInfo}/>;
            break;
        case 2:
            stepContent = <AddProgram program={program} setProgram={setProgram}/>;
            break;
        case 3:
            stepContent = <AddVet vet={vet} setVet={setVet} update={false}/>;
            break;
        default:
            stepContent = <AddServices service={service} setService={setService}/>;
    }

    return (
        <div className="clinic-page">
            <Box
                component="form"
                onSubmit={handleCreateClinic}
                noValidate
                sx={{width: '90%', margin: 5, alignItems: 'center'}}
            >
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
                        {activeStep < steps.length - 1 && (
                            <Button
                                onClick={handleNext}
                                variant="outlined"
                                style={{color: '#43ab98', borderColor: '#43ab98'}}
                            >
                                Next
                            </Button>
                        )}
                        {activeStep === steps.length - 1 && (
                            <Button
                                type="submit"
                                variant="outlined"
                                style={{color: '#43ab98', borderColor: '#43ab98'}}
                            >
                                Finish
                            </Button>)}
                        {createClinic &&
                            <Button
                                component={Link} to={`/settings/${clinicId}`}
                                variant="outlined"
                                style={{color: '#43ab98', borderColor: '#43ab98'}}
                                onClick={handleSubmit}
                            >Submit
                            </Button>
                        }
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}

export default AddClinic;