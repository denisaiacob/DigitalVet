import {Avatar, Box, Stack, Typography} from "@mui/material";
import avatar from "../../../images/avatar.jpg";
import {styled} from "@mui/material/styles";
import {useNavigate} from "react-router-dom";

const StyledTypography = styled(Typography)({
    fontFamily: 'Optima',
    fontSize: '1.2rem',
    '@media (max-width:700px)': {
        fontSize: '1.0rem',
    },
    textAlign: 'center',
});

function VetPart({vet}) {
    const navigate = useNavigate();
    const handleVet = () => {
        navigate(`/clinic/vet/${vet.vetId}`);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                height: '100%',
                width: '100%',
            }}
        >
            <Box
                sx={{
                    '&:hover': {
                        backgroundColor: 'grey.white',
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}
                onClick={() => handleVet()}
            >
                <Stack
                    spacing={1}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        margin: 2
                    }}
                >
                    <Avatar
                        alt="Vet"
                        src={vet.photo !== '' ? vet.photo : avatar}
                        sx={{width: 60, height: 60}}
                    />
                    <StyledTypography>{vet.name}</StyledTypography>
                    <Typography
                        style={{color: "grey", fontSize: '0.8rem'}}
                    >
                        {vet.function}
                    </Typography>
                </Stack>
            </Box>
        </Box>
    );
}

export default VetPart;