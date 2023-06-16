import * as React from 'react';
import {styled} from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Card,
    CardContent,
    CardActions,
    Collapse,
    IconButton, Pagination,
} from "@mui/material";
import ClinicBox from "./ClinicBox";
import ServiceDetailsBox from "./ServiceDetailsBox";
import {useEffect, useState} from "react";
import ClinicService from "../../services/ClinicService";

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

function RightSide({clinics, filter}) {
    const [expanded, setExpanded] = useState(Array(clinics.length).fill(false));

    const [loadingServices, setLoadingServices] = useState(true);
    const [services, setServices] = useState([]);
    const pageSize = 4;
    const [pagination, setPagination] = useState({
        count: 0,
        from: 0,
        to: pageSize
    })

    useEffect(() => {
        const setClinicsPagination = () => {
            setPagination({...pagination, count: clinics.length})
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
            if (clinics && clinics.length > 0) {
                setExpanded(Array(clinics.length).fill(false));
            }
        };
        if (clinics) {
            setClinicsPagination();
            fetchServices().then();
        }
    }, [clinics, pagination.to, pagination.from]);

    const handleExpandClick = (i) => {
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

    const handlePageChange = (event, page) => {
        const from = (page - 1) * pageSize;
        const to = (page - 1) * pageSize + pageSize;
        setPagination({...pagination, from: from, to: to})
    };

    return (
        <div style={{width: '80%', marginBottom: 30}}>
            <div>
                {clinics.map((clinic, i) => (
                    <div key={clinic.clinicId} style={{marginTop: 30}}>
                        {i >= pagination.from && i < pagination.to && (
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
                        )}
                    </div>
                ))}
            </div>
            <Pagination
                style={{marginTop:30, display:'flex', justifyContent:'center'}}
                count={Math.ceil(pagination.count / pageSize)}
                onChange={handlePageChange}
            />
        </div>
    );
}

export default RightSide;