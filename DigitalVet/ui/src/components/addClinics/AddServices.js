import React, {useState} from "react";
import {Typography, Box, Grid, Stack} from "@mui/material";
import '../../App.css';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function AddServices() {
    const [serviceList, setServiceList] = useState([{service: ""}]);

    const handleServiceChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...serviceList];
        list[index][name] = value;
        setServiceList(list);
    };

    const handleServiceRemove = (index) => {
        const list = [...serviceList];
        list.splice(index, 1);
        setServiceList(list);
    };

    const handleServiceAdd = () => {
        setServiceList([...serviceList, {service: ""}]);
    };

    return (
        <Box
            sx={{
                margin: 5,
                width: '70%',
                display: 'flex',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{width: '80%', display: 'flex', textAlign: 'start'}}
            >
                <Grid container style={{width: '100%'}}>
                    <Grid item xs={12}>
                        <Typography fontWeight="bold">Services</Typography>
                    </Grid>
                    {serviceList.map((singleService, index) => (
                        <div className="services">
                            <Grid item xs={12} style={{width: '100%'}}>
                                <Stack spacing={1} style={{width: '100%'}}>
                                    <input
                                        style={{
                                            height: 35,
                                            marginTop: 14
                                        }}
                                        name="service"
                                        type="text"
                                        id="service"
                                        value={singleService.service}
                                        onChange={(e) => handleServiceChange(e, index)}
                                        required
                                    />
                                    {serviceList.length - 1 === index && (
                                        <IconButton
                                            size="large"
                                            onClick={handleServiceAdd}>
                                            <AddCircleOutlineIcon fontSize="inherit"/>
                                        </IconButton>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <div>
                                    {serviceList.length !== 1 && (
                                        <IconButton
                                            sx={{
                                                marginTop: 1
                                            }}
                                            size="large"
                                            onClick={handleServiceRemove}>
                                            <DeleteIcon fontSize="inherit"/>
                                        </IconButton>
                                    )}
                                </div>
                            </Grid>

                        </div>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}

export default AddServices;