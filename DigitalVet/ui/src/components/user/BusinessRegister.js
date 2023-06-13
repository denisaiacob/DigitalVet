import * as React from 'react';
import {
    Container,
    Typography,
    Box
} from "@mui/material";
import RegisterForm from "./RegisterForm";

function BusinessRegister() {

    return (
        <div className="all">
            <Box
                sx={{
                    backgroundColor: 'white',
                    marginTop: 10,
                    marginBottom: 2,
                    marginLeft: 3,
                    marginRight: 3,
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
                            Business account registrations
                        </Typography>
                        <RegisterForm role={"business"}/>
                    </Box>
                </Container>
            </Box>
        </div>
    );
}

export default BusinessRegister;