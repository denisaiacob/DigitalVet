import * as React from 'react';
import {Link, useHistory} from 'react-router-dom';
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
import {useState} from "react";
import UserService from "../services/UserService";

function Login() {
    const history = useHistory();
    const [err, setErr] = useState(false);
    const [resp,setResp]=useState('');
    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const reset = (event) => {
        event.preventDefault();
        setUser({
            email: "",
            password: "",
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        UserService.login((user)).then((response) => {
            console.log(response);
            setResp(response)
            // history.push("/");
        })
            .catch((error) => {
                reset(event);
                console.log(error);
            });
        {resp === 'Success' ? (history.push("/")):(setErr(true))}
    };
    const handleChange = (event) => {
        const value = event.target.value;
        setUser({...user, [event.target.name]: value});
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
                        <Typography fontSize={20} variant="caption" marginTop={3}>
                            Sign in to your account
                        </Typography>
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            noValidate
                            autoComplete='off'
                            sx={{mt: 2}}
                        >
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                type="email"
                                value={user.email}
                                onChange={(event) => handleChange(event)}
                                // autoComplete="email"
                                margin='normal'
                                color={err? "error":"info"}
                                focused={err}
                            />
                            <TextField
                                required
                                fullWidth
                                id="password"
                                label="Password"
                                name="password"
                                type="password"
                                value={user.password}
                                onChange={(event) => handleChange(event)}
                                // autoComplete="current-password"
                                margin='normal'
                                color={err? "error":"info"}
                                focused={err}
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