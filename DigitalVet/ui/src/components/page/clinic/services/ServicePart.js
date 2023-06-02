import {Box} from "@mui/material";
import ServiceDetailsBox from "../../../filtersResult/ServiceDetailsBox";
import {useEffect, useState} from "react";
import ClinicService from "../../../../services/ClinicService";

function ServicePart({vetId}) {
    const [services, setServices] = useState([{
        serviceId: "",
        vetId: "",
        clinicId: "",
        name: "",
        price: "",
        minutes: ""
    }]);
    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await ClinicService.getServicesByVetId(vetId);
                setServices(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchServices().then();
    }, [vetId]);
    return (
        <Box
            sx={{
                height: '100%',
                width: '100%',
            }}
        >
            {services.map((service) => (
                <div key={service.serviceId} style={{marginTop: 5}}>
                    <ServiceDetailsBox service={service}/>
                </div>
            ))}
        </Box>
    );
}

export default ServicePart;