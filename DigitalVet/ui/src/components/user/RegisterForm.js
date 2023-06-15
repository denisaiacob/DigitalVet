import React, {useContext, useEffect, useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import {
    TextField,
    Stack,
    Button,
    Box, Typography, Snackbar, Alert
} from "@mui/material";
import UserService from "../../services/UserService";
import AuthContext from "../../context/AuthProvider";

function RegisterForm({role}) {
    const navigate = useNavigate();
    const [confirmPassword, setConfirmPassword] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [open, setOpen] = React.useState(false);
    const {setAuth} = useContext(AuthContext);

    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: role
    })

    const reset = () => {
        if (formErrors.firstName)
            setUserInfo((prev) => ({
                ...prev,
                firstName: "",
            }));
        if (formErrors.lastName)
            setUserInfo((prev) => ({
                ...prev,
                lastName: "",
            }));
        if (formErrors.email)
            setUserInfo((prev) => ({
                ...prev,
                email: "",
            }));
        if (formErrors.password)
            setUserInfo((prev) => ({
                ...prev,
                password: "",
            }));
        if (formErrors.confirmPassword)
            setConfirmPassword("");
        if (open) {
            setUserInfo({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                role: role,
            });
            setConfirmPassword("");
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrors(validate(userInfo));
        setIsSubmit(true);
    };

    useEffect(() => {
        const register = async () => {
            if (Object.keys(formErrors).length === 0 && isSubmit) {
                UserService.register((userInfo)).then((response) => {
                    if (response.data) {
                        const roles = [role];
                        if (role === "business") {
                            const user = {...userInfo, id: response.data}
                            setAuth({user, roles});
                            navigate("/addClinic");
                        } else {
                            const user = userInfo;
                            setAuth({user, roles});
                            navigate("/");
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
        };
        register().then();
    }, [formErrors, isSubmit]);

    const validate = (values) => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i;
        if (!values.email) {
            errors.email = "Emailul este obligatoriu!";
        } else if (!emailRegex.test(values.email)) {
            errors.email = "Emailul nu are un format valid!";
        }
        if (!values.password) {
            errors.password = "Parola este obligatorie";
        } else if (!passwordRegex.test(values.password)) {
            errors.password = "Parola trebuie să aibă minim 8 caractere și minim o cifră";
        }
        if (!confirmPassword) {
            errors.confirmPassword = "Parola pentru confirmare este obligatorie";
        } else if (confirmPassword !== values.password) {
            errors.confirmPassword = "Parolele nu coincid"
        }
        if (!values.firstName) {
            errors.firstName = "Prenumele este obligatoriu!"
        }
        if (!values.lastName) {
            errors.lastName = "Numele este obligatoriu!"
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
        <div>
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                    Adresa de mail este deja asociată unui cont!
                </Alert>
            </Snackbar>
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
                            label="Prenume"
                            value={userInfo.firstName}
                            onChange={(event) => handleChange(event)}
                            margin='normal'
                            autoComplete='off'
                            color={"info"}
                            error={!!formErrors.firstName}
                            helperText={formErrors.firstName ? (formErrors.firstName) : ""}
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            fullWidth
                            id="lastName"
                            name="lastName"
                            label="Nume"
                            value={userInfo.lastName}
                            onChange={(event) => handleChange(event)}
                            margin='normal'
                            autoComplete='off'
                            color={"info"}
                            error={!!formErrors.lastName}
                            helperText={formErrors.lastName ? (formErrors.lastName) : ""}
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
                    value={userInfo.email}
                    onChange={(event) => handleChange(event)}
                    margin='normal'
                    autoComplete='off'
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
                    autoComplete='off'
                    color={"info"}
                    error={!!formErrors.password}
                    helperText={formErrors.password ? (formErrors.password) : ""}
                />
                <TextField
                    required
                    fullWidth
                    id="confirmPassword"
                    label="Parolă confirmare"
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    margin='normal'
                    autoComplete='off'
                    color={"info"}
                    error={!!formErrors.confirmPassword}
                    helperText={formErrors.confirmPassword ? (formErrors.confirmPassword) : ""}
                />

                <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    style={buttonStyle}
                >
                    Înregistrare
                </Button>
            </Box>
            <Stack
                alignItems="center"
                justifyContent="center"
                direction="row"
                spacing={2}
            >
                <Typography color="darkgrey">Ai deja un cont?</Typography>
                <Typography
                    color='#3ca692'
                    component={Link} to="/login"
                >
                    Autentifică-te
                </Typography>
            </Stack>
        </div>
    );
}

export default RegisterForm;