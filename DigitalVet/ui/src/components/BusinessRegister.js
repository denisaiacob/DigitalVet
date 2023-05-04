import * as React from 'react';
import {useHistory} from 'react-router-dom';
import {
    Container,
    Typography,
    Box
} from "@mui/material";
import {useState} from "react";
import UserService from "../services/UserService";
import RegisterForm from "./RegisterForm";

function BusinessRegister() {
    const history = useHistory();

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "business"
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        UserService.register((user)).then((response) => {
            console.log(response);
            history.push("/");
        })
            .catch((error) => {
                console.log(error);
            });
    };
    const handleChange = (event) => {
        const value = event.target.value;
        setUser({...user, [event.target.name]: value});
    };

    const reset = (event) => {
        event.preventDefault();
        setUser({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            role: "business"
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
                        <RegisterForm role={"business"}/>
                    </Box>
                </Container>
            </Box>
        </div>
    );
}

export default BusinessRegister;