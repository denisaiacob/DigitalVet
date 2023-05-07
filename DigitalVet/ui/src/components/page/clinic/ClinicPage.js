import * as React from 'react';
import {Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import { useLocation } from "react-router-dom";

const RoundedTypography = styled(Typography)({
    fontFamily: 'Century Gothic',
    fontWeight: 'bold',
    fontSize: '1.0rem',
    textAlign: 'start',
});

function ClinicPage(){
    const location = useLocation();
    const clinicName = location.state?.clinicName;
    return(
        <div className="container">
            <RoundedTypography>{clinicName}</RoundedTypography>
        </div>
    );
}
export default ClinicPage;