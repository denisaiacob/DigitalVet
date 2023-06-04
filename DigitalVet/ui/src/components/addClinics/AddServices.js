import {Typography, Box, Grid, Button, Snackbar, Alert} from "@mui/material";
import '../../App.css';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";
import ClinicService from "../../services/ClinicService";

function AddServices({service, setService, vets, update}) {
    const [open, setOpen] = React.useState(false);
    const [success,setSuccess]=React.useState(true);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleInputChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...service];
        if(name==='price' || name==='minutes'){
            list[index][name]=parseInt(value,10)
        }else {
            list[index][name] = value;
        }
        setService(list);
    }

    const handleRemove = index => {
        const list = [...service];
        list.splice(index, 1);
        setService(list);
    }

    const handleAddClick = () => {
        setService([...service, {
            clinicId:service[0].clinicId,
            vetId: "",
            name: "",
            price: null,
            minutes: null
        }]);
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        console.log(service);
        service.map(async (x, i) => {
            if (!service[i].serviceId) {
                try {
                    const response = await ClinicService.addService(service[i]);
                    console.log(response.data);
                    setService(prevService => {
                        const newList = [...prevService];
                        newList[i] = {
                            ...newList[i],
                            serviceId: response.data
                        };
                        return newList;
                    });
                } catch (error) {
                    console.log(error);
                    setSuccess(false);
                }
            } else {
                try {
                    const response = await ClinicService.updateService(service[i],service[i].serviceId);
                    console.log(response.data);
                } catch (error) {
                    console.log(error);
                    setSuccess(false);
                }
            }
        })
        if (success) setOpen(true);
    };
    return (
        <div className='clinic-page'>
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
                    The services have been successfully updated!
                </Alert>
            </Snackbar>
            <Box style={{width: '90%', textAlign: 'center'}}>
                <Typography fontWeight="bold" sx={{marginTop: 3}}>Add services</Typography>
                {
                    service.map((x, i) => {
                        return (
                            <Box key={i} sx={{textAlign: 'start', marginTop: 5, width: '100%'}}>
                                <Grid container style={{width: '100%'}}>
                                    <Grid item xs={12}>
                                        <Typography>Service name</Typography>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={service[i].name}
                                            onChange={e => handleInputChange(e, i)}
                                            style={{width: '90%', height: 30, marginBottom: 10}}
                                        />
                                    </Grid>
                                    <Grid item container xs={12}>
                                        <Grid item xs={6}>
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
                                        <Grid item xs={6}>
                                            <Typography>Time in minutes</Typography>
                                            <input
                                                type="number"
                                                name="minutes"
                                                id="minutes"
                                                value={service[i].minutes}
                                                onChange={e => handleInputChange(e, i)}
                                                style={{width: '80%', height: 30, marginBottom: 10}}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {vets && (
                                            <div>
                                                <Typography>Veterinarians</Typography>
                                                <select
                                                    name="vetId"
                                                    id="vetId"
                                                    value={service[i].vetId}
                                                    onChange={(event) => {
                                                        const updatedService = [...service];
                                                        updatedService[i].vetId = parseInt(event.target.value,10);
                                                        setService(updatedService);
                                                    }}
                                                    style={{width: '90%', height: 30, marginBottom: 10}}
                                                >
                                                    <option>Select a veterinarian</option>
                                                    {vets.map((o, j) => (
                                                        <option key={j} value={vets[j].vetId}>{vets[j].name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        )}
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
                        )
                            ;
                    })}
                {update && (
                    <div style={{marginTop: 30}}>
                        <Button
                            onClick={handleUpdate}
                            variant="outlined"
                            style={{color: '#43ab98', borderColor: '#43ab98'}}
                        >
                            Update
                        </Button>
                    </div>
                )}
            </Box>
        </div>
    );
}

export default AddServices;