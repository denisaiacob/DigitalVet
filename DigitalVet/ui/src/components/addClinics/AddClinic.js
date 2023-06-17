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
import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import useAuth from "../../hooks/UseAuth";


const steps = ['Pagina clinicii', 'Informațiile clinicii', 'Adaugă program', 'Adaugă medici', 'Adaugă servicii'];

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
    const navigate = useNavigate();
    const [createClinic, setCreateClinic] = useState(false)
    const [clinicId, setClinicId] = useState(null)
    const {setAuth} = useContext(AuthContext);
    const {auth} = useAuth();
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
        monday1: "",
        tuesday1: "",
        wednesday1: "",
        thursday1: "",
        friday1: "",
        saturday1: "",
        sunday1: "",
        monday2: "",
        tuesday2: "",
        wednesday2: "",
        thursday2: "",
        friday2: "",
        saturday2: "",
        sunday2: ""
    })
    const [programSubmit, setProgramSubmit] = useState({
        clinicId: null,
        monday: "",
        tuesday: "",
        wednesday: "",
        thursday: "",
        friday: "",
        saturday: "",
        sunday: ""
    })
    const [service, setService] = useState([{
        vetId: "",
        clinicId: "",
        name: "",
        price: "",
        minutes: ""
    }])
    const [admin, setAdmin] = useState({
        clinicId: null,
        userId: null
    })

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleProgram = (clinicId) => {
        setClinicId(clinicId);

        setProgramSubmit(() => ({
            clinicId: clinicId,
            monday: program.monday1 + "-" + program.monday2,
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
        service.map((x, index) => {
            setService(prevService => {
                const newList = [...prevService];
                newList[index] = {
                    ...newList[index],
                    clinicId: clinicId
                };
                return newList;
            })
        });

        setAdmin(() => ({
            clinicId: clinicId,
            userId: auth?.user.id
        }));
    };

    const handleCreateClinic = (event) => {
        event.preventDefault();
        if (clinic.name && clinic.city && info.fin && info.trade) {
            AddClinicService.addClinic((clinic)).then((response) => {
                handleProgram(response.data);
                setCreateClinic(true);
            }).catch(() => {

            });
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
        else alert('Numele clinicii, localitatea, dar si informatiile fiscale sunt obligatorii ');

    };

    const handleSubmit = () => {
        let success = true;
        setCreateClinic(false);
        vet.map((x, i) => {
            AddClinicService.addVet((vet[i])).then().catch((error) => {
                console.log(error);
                success = false;
            })
        });
        service.map((x, i) => {
            AddClinicService.addService((service[i])).then().catch((error) => {
                console.log(error);
                success = false;
            })
        });
        AddClinicService.addProgram((programSubmit)).then().catch((error) => {
            console.log(error);
            success = false;
        })
        AddClinicService.addAdmin((admin)).then((response) => {
            const user = auth?.user;
            const roles = auth?.roles;
            const cId = response.data;
            setAuth({user, roles, cId})
        }).catch((error) => {
            console.log(error);
            success = false;
        })
        if (success) navigate(`/settings/${clinicId}`)
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
            stepContent = <AddServices service={service} setService={setService} update={false}/>;
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
                    {steps.map((label) => {
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
                            Înapoi
                        </Button>
                        <Box sx={{flex: '1 1 auto'}}/>
                        {activeStep < steps.length - 1 && (
                            <Button
                                onClick={handleNext}
                                variant="outlined"
                                style={{color: '#43ab98', borderColor: '#43ab98'}}
                            >
                                Următorul
                            </Button>
                        )}
                        {activeStep === steps.length - 1 && (
                            <Button
                                type="submit"
                                variant="outlined"
                                style={{color: '#43ab98', borderColor: '#43ab98'}}
                            >
                                Finalizare
                            </Button>)}
                        {createClinic &&
                            <Button
                                variant="outlined"
                                style={{color: '#43ab98', borderColor: '#43ab98'}}
                                onClick={handleSubmit}
                            >Trimitere
                            </Button>
                        }
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}

export default AddClinic;