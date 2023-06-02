import * as React from 'react';
import {Box} from "@mui/material";
import VetPart from "./VetPart";
import ServicePart from "./ServicePart";
import {useEffect, useState} from "react";
import ClinicService from "../../../../services/ClinicService";

function Services({clinicId}) {
    const [vets, setVets] = useState([{
        vetId: null,
        clinicId: clinicId,
        name: "",
        function: "",
        description: "",
        photo:""
    }]);

    useEffect(() => {
        const fetchVet = async () => {
            try {
                const response = await ClinicService.getVetsByClinicId(clinicId);
                setVets(response.data);
                console.log(response.data)
            } catch (error) {
                console.log(error);
            }
        };
        fetchVet().then();
    }, [clinicId]);
    return (
        <Box
            sx={{backgroundColor: "white"}}
        >
            <Box
                sx={{
                    textAlign: "start",
                    borderTop: 30,
                    borderBottom: 30,
                    borderColor: "white",
                    marginLeft: 6.5,
                    marginRight: 6.5
                }}
            >
                {vets.map((vet)=>(
                    <div key={vet.vetId}>
                        <VetPart vet={vet}/>
                        <ServicePart/>
                    </div>
                ))}
            </Box>
        </Box>
    );
}

export default Services;