import {useEffect, useState} from "react";
import ClinicService from "../../services/ClinicService";
import {Card, CardContent, Grid, Typography} from "@mui/material";
import useAuth from "../../hooks/UseAuth";

function MyAppointments() {
    const {auth} = useAuth();
    const [vetName, setVetName] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const [serviceName,setServiceName]=useState([]);

    useEffect(() => {
        const fetchService = async (serviceId) => {
            try {
                const serviceResponse = await ClinicService.getServiceById(serviceId);
                setServiceName((prevServiceName) => [...prevServiceName, serviceResponse.data.name]);
                const vetResponse = await ClinicService.getVetById(serviceResponse.data.vetId);
                setVetName((prevVetName) => [...prevVetName, vetResponse.data.name]);
            } catch (error) {
                console.log(error);
            }
        };
        const fetchAppointments = async () => {
            try {
                const response = await ClinicService.getAppointmentByUserId(auth?.user.id);
                setAppointments(response.data);
            } catch (error) {
                console.log(error);
            }
        };

       appointments.forEach((appointment) => {
            fetchService(appointment.serviceId).then();
        });
        fetchAppointments().then();
    }, []);

    const handleDay = (date) => {
        date = new Date(date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

        return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
    };

    return (
        <div className='clinic-page'>
            <Grid container spacing={2} style={{margin:3,display:'flex',justifyContent:'center'}}>
                {appointments.map((appointment,index) => (
                    <Grid item key={appointment.id}>
                        <Card variant="outlined" sx={{width: 250, marginTop: 2}}>
                            <CardContent>
                                <Typography sx={{mt: 3}} variant="h5" component="div">
                                    {serviceName[index]}
                                </Typography>
                                <Typography sx={{mt: 1.5}} color="text.secondary">
                                    {vetName[index]}
                                </Typography>
                                <Typography variant="body2">
                                    {handleDay(appointment.day)}
                                </Typography>
                                <Typography variant="body2">
                                    {appointment.time}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default MyAppointments;