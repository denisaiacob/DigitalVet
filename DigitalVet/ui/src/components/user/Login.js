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
                        No account found with this email.
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
                                label="Password"
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