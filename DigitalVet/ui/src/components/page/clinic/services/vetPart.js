import {Avatar, Box, Stack, Typography} from "@mui/material";
import avatar from "../../../images/avatar.jpg";
import {styled} from "@mui/material/styles";
import {useHistory} from "react-router-dom";

const StyledTypography = styled(Typography)({
    fontFamily: 'Optima',
    // fontWeight: 'bold',
    fontSize: '1.2rem',
    '@media (max-width:700px)': {
        fontSize: '1.0rem',
    },
    textAlign: 'center',
});

function VetPart() {
    const history = useHistory();
    const handleVet = (vetName) => {
        history.push({
            pathname: '/clinic/vet',
            state: { vetName }
        });
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
                onClick={() => handleVet("Vet Name")}
            >
                <Stack
                    spacing={1}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        margin:2
                    }}
                >
                    <Avatar
                        alt="Vet"
                        src={avatar}
                        sx={{width: 60, height: 60}}
                    />
                    <StyledTypography>Name Name</StyledTypography>
                    <Typography
                        style={{color: "grey", fontSize: '0.8rem'}}
                    >
                        Function
                    </Typography>
                </Stack>
            </Box>
        </Box>
    );
}

export default VetPart;