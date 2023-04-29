import * as React from 'react';
import {Link} from 'react-router-dom';
import {
    TextField,
    Stack,
    Button,
    Container,
    Typography,
    Box
} from "@mui/material";

function BusinessRegister() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    const buttonStyle = {
        backgroundColor: '#54d6be',
        color: 'white',
        marginTop: 10,
        marginBottom: 10
    };

    return (
        <div style={{marginLeft: '10px', marginRight: '10px'}}>
            <Box
                sx={{
                    backgroundColor: 'white',
                    marginTop: 10,
                    marginBottom: 2,
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
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            noValidate
                            sx={{mt: 2}}
                        >
                            <Stack
                                alignItems="center"
                                justifyContent="center"
                                direction="row"
                                spacing={2}
                            >
                                <div>
                                    <TextField
                                        required
                                        fullWidth
                                        id="first-name"
                                        label="First name"
                                        margin='normal'
                                    />
                                </div>
                                <div>
                                    <TextField
                                        required
                                        fullWidth
                                        id="last-name"
                                        label="Last name"
                                        margin='normal'
                                    />
                                </div>
                            </Stack>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                margin='normal'
                            />
                            <TextField
                                required
                                fullWidth
                                id="password"
                                label="Password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                margin='normal'
                            />

                            <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                style={buttonStyle}
                            >
                                Register
                            </Button>
                        </Box>
                        <Stack
                            alignItems="center"
                            justifyContent="center"
                            direction="row"
                            spacing={2}
                        >
                            <Typography color="darkgrey">Already have an account?</Typography>
                            <Typography
                                color='#3ca692'
                                component={Link} to="/login"
                            >
                                Sign in
                            </Typography>
                        </Stack>
                    </Box>
                </Container>
            </Box>
        </div>
    );
}

export default BusinessRegister;