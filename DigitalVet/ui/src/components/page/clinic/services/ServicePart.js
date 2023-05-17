import {Avatar, Box, Stack, Typography} from "@mui/material";
import avatar from "../../../images/avatar.jpg";
import {styled} from "@mui/material/styles";
import {useHistory} from "react-router-dom";
import ServiceDetailsBox from "../../filtersResult/ServiceDetailsBox";

const StyledTypography = styled(Typography)({
    fontFamily: 'Optima',
    // fontWeight: 'bold',
    fontSize: '1.2rem',
    '@media (max-width:700px)': {
        fontSize: '1.0rem',
    },
    textAlign: 'center',
});

function ServicePart() {

    return (
        <Box
            sx={{
                height: '100%',
                width: '100%',
            }}
        >
            <div style={{marginTop:5}}>
                <ServiceDetailsBox/>
            </div>
        </Box>
    );
}

export default ServicePart;