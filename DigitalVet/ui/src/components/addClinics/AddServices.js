import {Typography, Box, Grid} from "@mui/material";
import '../../App.css';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function AddServices({service,setService}) {
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
    return (
        <Box style={{width: '70%', textAlign: 'center'}}>
            <Typography fontWeight="bold" sx={{marginTop: 3}}>Add services</Typography>
            {
                service.map((x, i) => {
                    return (
                        <Box sx={{textAlign: 'start', marginTop: 5}}>
                            <Grid container>
                                <Grid item xs={6}>
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
                                <Grid item xs={6}>
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
        </Box>
    );
}

export default AddServices;