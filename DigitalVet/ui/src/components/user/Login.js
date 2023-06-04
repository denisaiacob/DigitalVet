import * as React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {
    TextField,
    Stack,
    Button,
    Container,
    Typography,
    Box, Alert, Snackbar
} from "@mui/material";
import {useEffect, useState} from "react";
import UserService from "../../services/UserService";

function Login() {
    const history = useHistory();
    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [open, setOpen] = React.useState(false);
    const reset = () => {
        if (formErrors.email && !formErrors.password)
            setUser((prev) => ({
                ...prev,
                email: "",
            }));
        else if (formErrors.password && !formErrors.email)
            setUser((prev) => ({
                ...prev,
                password: "",
            }));
        else
            setUser({
                email: "",
                password: "",
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrors(validate(user));
        setIsSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            UserService.login((user)).then((response) => {
                console.log(response.data);
                if (response.data === 'Succes') history.push("/");
                else {
                    setOpen(true);
                    reset();
                }
            }).catch((error) => {
                console.log(error);
            });
        } else {
            reset();
        }
    }, [formErrors, isSubmit]);

    const validate = (values) => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i;
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!emailRegex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (!passwordRegex.test(values.password)) {
            errors.password = "Password must be more than 8 characters and at least one digit";
        }
        return errors;
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

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

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
                    borderColor: 'white',
                    width: 390
                }}
            >
                <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                        The entered data is incorrect!
                    </Alert>
                </Snackbar>
                <Container component="main" maxWidth="xs">
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '100%'
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
                            sx={{mt: 2, width: '90%'}}
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
                                margin='normal'
                                color={"info"}
                                error={!!formErrors.email}
                                helperText={formErrors.email ? (formErrors.email) : ""}
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
                                margin='normal'
                                color={"info"}
                                error={!!formErrors.password}
                                helperText={formErrors.password ? (formErrors.password) : ""}
                            />

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