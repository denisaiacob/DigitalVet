import * as React from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {
    TextField,
    Stack,
    Button,
    Container,
    Typography,
    Box, Alert, Snackbar
} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import UserService from "../../services/UserService";
import AuthContext from "../../context/AuthProvider";
import ClinicService from "../../services/ClinicService";

function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [open, setOpen] = React.useState(false);

    const {setAuth} = useContext(AuthContext);

    const reset = () => {
        if (formErrors.email && !formErrors.password)
            setUserInfo((prev) => ({
                ...prev,
                email: "",
            }));
        else if (formErrors.password && !formErrors.email)
            setUserInfo((prev) => ({
                ...prev,
                password: "",
            }));
        else
            setUserInfo({
                email: "",
                password: "",
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrors(validate(userInfo));
        setIsSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            UserService.login((userInfo)).then(async (response) => {
                if (response.data) {
                    const user = response.data;
                    const roles = [user.role];
                    if (user.role === 'user') {
                        setAuth({user, roles});
                        navigate(from, { replace: true });
                    } else {
                        try {
                            const adminResponse = await ClinicService.getAdmin(user.id);
                            const cId = adminResponse.data.clinicId;
                            setAuth({user, roles, cId});
                            navigate(`/settings/${cId}`);
                        } catch (error) {
                            setAuth({user, roles});
                            navigate("/addClinic");
                        }
                    }
                } else {
                    setOpen(true);
                    reset();
                }
            }).catch(() => {
                setOpen(true);
                reset();
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
            errors.email = "Emailul este obligatoriu!";
        } else if (!emailRegex.test(values.email)) {
            errors.email = "Emailul nu are un format corect!";
        }
        if (!values.password) {
            errors.password = "Parola este obligatorie";
        } else if (!passwordRegex.test(values.password)) {
            errors.password = "Parola trebuie să aibă minim 8 caractere și cel puțin o cifră";
        }
        return errors;
    };

    const handleChange = (event) => {
        const value = event.target.value;
        setUserInfo({...userInfo, [event.target.name]: value});
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
                        Nu a fost găsit niciun cont asociat acestei adrese.
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
                            Autentifică-te în cont
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
                                value={userInfo.email}
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
                                label="Parolă"
                                name="password"
                                type="password"
                                value={userInfo.password}
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
                                Autentificare
                            </Button>
                        </Box>
                        <Stack
                            alignItems="center"
                            justifyContent="center"
                            direction="row"
                            spacing={2}
                        >
                            <Typography color="darkgrey">Nu ai un cont?</Typography>
                            <Typography color='#3ca692' component={Link} to="/register">Înregistrează-te</Typography>
                        </Stack>
                    </Box>
                </Container>
            </Box>
        </div>
    );
}

export default Login;