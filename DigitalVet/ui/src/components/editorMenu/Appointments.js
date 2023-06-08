import AppointmentCard from "./AppointmentCard";
import {Grid} from "@mui/material";

function Appointments({services}) {
    return (
        <div className="clinic-page">
            <Grid container spacing={2} sx={{display: 'flex', justifyContent: 'center'}}>
                {services.map((service) => (
                    <Grid item key={service.serviceId}>
                        <AppointmentCard service={service}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Appointments;