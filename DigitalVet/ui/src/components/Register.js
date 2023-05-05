import React from "react";
import {
    Container,
    Typography,
    Box
} from "@mui/material";
import RegisterForm from "./RegisterForm";

function Register() {

    return (
        <div className="all">
            <Box
                sx={{
                    backgroundColor: 'white',
                    marginTop: 10,
                    marginBottom: 2,
                    marginLeft: 3,
                    marginRight:3,
                    borderBottom: 40,
                    borderTop: 10,
                    borderColor: 'white'
                }}
            >
                <Container component="main" maxWidth="xs">
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            fontSize={20}
                            variant="caption"
                            marginTop={3}
                        >
                            Register
                        </Typography>
                        <RegisterForm role={"user"}/>
                    </Box>
                </Container>
            </Box>
        </div>
    );
}

export default Register;