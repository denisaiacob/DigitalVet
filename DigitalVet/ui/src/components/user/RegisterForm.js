import React, {useState} from "react";
import {Link, useHistory} from 'react-router-dom';
import {
    TextField,
    Stack,
    Button,
    Box, Typography
} from "@mui/material";
import UserService from "../../services/UserService";

function RegisterForm({role}) {
    const history = useHistory();

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: role
    })
    const reset = (event) => {
        event.preventDefault();
        setUser({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            role: role
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        UserService.register((user)).then((response) => {
            console.log(response);
            {
                role === "business" ? history.push("/addClinic") : history.push("/");
            }
        })
            .catch((error) => {
                reset(event);
                console.log(error);
            });
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
        <div>
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
                            id="firstName"
                            name="firstName"
                            label="First name"
                            value={user.firstName}
                            onChange={(event) => handleChange(event)}
                            margin='normal'
                            autoComplete='off'
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            fullWidth
                            id="lastName"
                            name="lastName"
                            label="Last name"
                            value={user.lastName}
                            onChange={(event) => handleChange(event)}
                            margin='normal'
                            autoComplete='off'
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
                    // autoComplete="email"
                    value={user.email}
                    onChange={(event) => handleChange(event)}
                    margin='normal'
                    autoComplete='off'
                />
                <TextField
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    // autoComplete="current-password"
                    value={user.password}
                    onChange={(event) => handleChange(event)}
                    margin='normal'
                    autoComplete='off'
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
        </div>
    );
}

export default RegisterForm;