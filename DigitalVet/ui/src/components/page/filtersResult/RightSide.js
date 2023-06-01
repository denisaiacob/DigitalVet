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
import AddClinicService from "../../../services/ClinicService";

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
    const [expanded, setExpanded] = useState(false);

    const [loading, setLoading] = useState(true);
    const [clinics, setClinics] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await AddClinicService.getAllClinics();
                setClinics(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div style={{width:'80%'}}>
            {!loading && (
                <div>
                    {clinics.map((clinic) => (
                        <div key={clinic.clinicId} style={{marginTop:30}}>
                            <Card sx={{maxWidth: 820}}>
                                <ClinicBox clinic={clinic}/>
                                <CardActions disableSpacing>
                                    <ExpandMore
                                        expand={expanded}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show services"
                                    >
                                        <ExpandMoreIcon/>
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <ServiceDetailsBox/>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default RightSide;