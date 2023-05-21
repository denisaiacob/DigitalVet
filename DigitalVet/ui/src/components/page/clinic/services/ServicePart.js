import {Box} from "@mui/material";
import ServiceDetailsBox from "../../filtersResult/ServiceDetailsBox";

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