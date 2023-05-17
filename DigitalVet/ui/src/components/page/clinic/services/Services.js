import * as React from 'react';
import {Box} from "@mui/material";
import VetPart from "./vetPart";
import ServicePart from "./ServicePart";

function Services() {
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
                <VetPart/>
                <ServicePart/>
            </Box>
        </Box>
    );
}

export default Services;