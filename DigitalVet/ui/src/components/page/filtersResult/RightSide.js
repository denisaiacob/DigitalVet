import * as React from 'react';
import {styled} from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Card,
    CardContent,
    CardActions,
    Collapse,
    IconButton,
} from "@mui/material";
import ClinicBox from "./ClinicBox";
import ServiceDetailsBox from "./ServiceDetailsBox";
import {useEffect, useState} from "react";
import ClinicService from "../../../services/ClinicService";

const ExpandMore = styled((props) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function RightSide() {
    const [expanded, setExpanded] = useState([]);

    const [loading, setLoading] = useState(true);
    const [loadingServices, setLoadingServices] = useState(true);
    const [clinics, setClinics] = useState(null);
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchClinic = async () => {
            setLoading(true);
            try {
                const response = await ClinicService.getAllClinics();
                setClinics(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        const fetchServices = async () => {
            setLoadingServices(true);
            try {
                const updatedServices = [];

                for (const clinic of clinics) {
                    const response = await ClinicService.getServicesByClinicId(clinic.clinicId);
                    updatedServices.push(response.data);
                }

                setServices(updatedServices);
            } catch (error) {
                console.log(error);
            }
            setLoadingServices(false);
        };

        fetchClinic();
        fetchServices();
    }, []);

    const handleExpandClick = (i) => {
        if (expanded.length === 0) {
            setExpanded(Array(clinics.length).fill(false));
        }
        setExpanded((prevExpanded) => {
            const newExpanded = prevExpanded.map((value, index) => {
                if (index === i) {
                    return !value;
                }
                return value;
            });
            return newExpanded;
        });
    };

    return (
        <div style={{width: '80%', marginBottom: 30}}>
            {!loading && (
                <div>
                    {clinics.map((clinic, i) => (
                        <div key={clinic.clinicId} style={{marginTop: 30}}>
                            <Card sx={{maxWidth: 820}}>
                                <ClinicBox clinic={clinic}/>
                                <div>
                                    <CardActions disableSpacing>
                                        <ExpandMore
                                            expand={expanded[i]}
                                            onClick={() => handleExpandClick(i)}
                                            aria-expanded={expanded[i]}
                                            aria-label="show services"
                                        >
                                            <ExpandMoreIcon/>
                                        </ExpandMore>
                                    </CardActions>
                                    {!loadingServices && services[i] &&
                                        <Collapse in={expanded[i]} timeout="auto" unmountOnExit>
                                            <CardContent>
                                                {services[i].map((service) => (
                                                    <div key={service.serviceId}>
                                                        <ServiceDetailsBox service={service}/>
                                                    </div>
                                                ))}
                                            </CardContent>
                                        </Collapse>
                                    }
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default RightSide;