import {Card, CardContent, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import ClinicService from "../../services/ClinicService";

function AppointmentCard({service}) {
    const [vetName, setVetName] = useState("");
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ClinicService.getVetById(service.vetId);
                setVetName(response.data.name);
            } catch (error) {
                console.log(error);
            }
        };
        const fetchAppointments = async () => {
            try {
                const response = await ClinicService.getAppointmentByServiceId(service.serviceId);
                setAppointments(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData().then();
        fetchAppointments().then();
    }, [service]);

    const handleDay = (date) => {
        date = new Date(date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

        return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
    };

    return (
        <div>
            {appointments.map((appointment) => (
                <Card key={appointment.id} variant="outlined" sx={{width: 250, marginTop: 2}}>
                    <CardContent>
                        <Typography sx={{mt: 3}} variant="h5" component="div">
                            {service.name}
                        </Typography>
                        <Typography sx={{mt: 1.5}} color="text.secondary">
                            {vetName}
                        </Typography>
                        <Typography variant="body2">
                            {handleDay(appointment.day)}
                        </Typography>
                        <Typography variant="body2">
                            {appointment.time}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

export default AppointmentCard;