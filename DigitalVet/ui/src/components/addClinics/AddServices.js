import {Typography, Box, Grid, Button} from "@mui/material";
import '../../App.css';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";
import ClinicService from "../../services/ClinicService";

function AddServices({service, setService}) {
    const handleInputChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...service];
        list[index][name] = value;
        setService(list);
    }

    const handleRemove = index => {
        const list = [...service];
        list.splice(index, 1);
        setService(list);
    }

    const handleAddClick = () => {
        setService([...service, {vetName: "", name: ""}]);
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(service);
        service.map((x, i) => {
            ClinicService.updateService(service[i], service.serviceId)
                .then((response) => {
                    // navigate("/employeeList");
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error);
                });
        })
    };
    return (
        <div className='clinic-page'>
            <Box style={{width: '90%', textAlign: 'center'}}>
                <Typography fontWeight="bold" sx={{marginTop: 3}}>Add services</Typography>
                {
                    service.map((x, i) => {
                        return (
                            <Box key={i} sx={{textAlign: 'start', marginTop: 5,width: '100%'}}>
                                <Grid container style={{width: '100%'}}>
                                    <Grid item xs={7}>
                                        <Typography>Service name</Typography>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={service[i].name}
                                            onChange={e => handleInputChange(e, i)}
                                            style={{width: '80%', height: 30, marginBottom: 10}}
                                        />
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Typography>Price</Typography>
                                        <input
                                            type="number"
                                            name="price"
                                            id="price"
                                            value={service[i].price}
                                            onChange={e => handleInputChange(e, i)}
                                            style={{width: '80%', height: 30, marginBottom: 10}}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography>Veterinarians</Typography>
                                        <input
                                            type="text"
                                            name="vetName"
                                            id="vetName"
                                            value={service[i].vetName}
                                            onChange={e => handleInputChange(e, i)}
                                            style={{width: '80%', height: 30, marginBottom: 10}}
                                        />
                                    </Grid>
                                </Grid>
                                <div>
                                    {
                                        service.length !== 1 &&
                                        <IconButton size="large" onClick={handleRemove}>
                                            <DeleteIcon fontSize="inherit"/>
                                        </IconButton>
                                    }
                                    {service.length - 1 === i &&
                                        <IconButton size="large" onClick={handleAddClick}>
                                            <AddCircleOutlineIcon fontSize="inherit"/>
                                        </IconButton>
                                    }
                                </div>
                            </Box>
                        );
                    })}
                <div style={{marginTop: 30}}>
                    <Button
                        onClick={handleUpdate}
                        variant="outlined"
                        style={{color: '#43ab98', borderColor: '#43ab98'}}
                    >
                        Update
                    </Button>
                </div>
            </Box>
        </div>
    );
}

export default AddServices;