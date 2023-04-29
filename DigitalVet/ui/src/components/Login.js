import * as React from 'react';
import {Link} from 'react-router-dom';
import {
    Checkbox,
    FormControlLabel,
    TextField,
    Stack,
    Button,
    Container,
    Typography,
    Box
} from "@mui/material";

function Login() {
    const buttonStyle = {
        backgroundColor: '#54d6be',
        color: 'white',
        marginTop: 10,
        marginBottom: 10
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
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
                        <Typography fontSize={20} variant="caption" marginTop={3}>
                            Sign in to your account
                        </Typography>
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            noValidate
                            sx={{mt: 2}}
                        >
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
                            <Stack
                                alignItems="center"
                                justifyContent="center"
                                direction="row"
                                spacing={2}
                            >
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary"/>}
                                    label="Remember me"
                                />
                                <Typography
                                    color='#3ca692'
                                    component={Link} to="/register"
                                >
                                    Forgot password?
                                </Typography>
                            </Stack>

                            <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                style={buttonStyle}
                            >
                                Sign In
                            </Button>
                        </Box>
                        <Stack
                            alignItems="center"
                            justifyContent="center"
                            direction="row"
                            spacing={2}
                        >
                            <Typography color="darkgrey">Don't have an account?</Typography>
                            <Typography color='#3ca692' component={Link} to="/register">Register</Typography>
                        </Stack>
                    </Box>
                </Container>
            </Box>
        </div>
    );
}

export default Login;