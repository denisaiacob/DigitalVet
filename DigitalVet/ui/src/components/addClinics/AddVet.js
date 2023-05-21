import React, {useState} from "react";
import {Box, Grid, Typography} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import VetPhoto from "./VetPhoto";

function AddVet() {
    const [inputList, setInputList] = useState([{firstName: '', lastName: ''}]);

    const handleInputChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);

    }

    const handleRemove = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    }

    const handleAddClick = () => {
        setInputList([...inputList, {firstName: '', lastName: ''}]);
    }
    return (
        <Box style={{width: '70%', textAlign: 'center'}}>
            <Typography fontWeight="bold" sx={{marginTop: 3}}>Add veterinarians</Typography>
            {
                inputList.map((x, i) => {
                    return (
                        <Box sx={{textAlign: 'start', marginTop: 5}}>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Typography>Name</Typography>
                                    <input
                                        type="text"
                                        name="name"
                                        onChange={e => handleInputChange(e, i)}
                                        style={{width: '80%', height: 30, marginBottom: 10}}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>Function</Typography>
                                    <input
                                        type="text"
                                        name="function"
                                        onChange={e => handleInputChange(e, i)}
                                        style={{width: '80%', height: 30, marginBottom: 10}}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>A short description</Typography>
                                    <textarea
                                        style={{width: '90%', height: 60, marginTop: 5}}
                                        type="text"
                                        rows={5}
                                        onChange={e => handleInputChange(e, i)}
                                        // value=''
                                        // onChange={handleInputChange}
                                        // placeholder="Enter text here"
                                    />
                                </Grid>
                                <VetPhoto/>
                            </Grid>
                            <div class="form-group col-md-2 mt-4">
                                {
                                    inputList.length !== 1 &&
                                    <IconButton size="large" onClick={handleRemove}>
                                        <DeleteIcon fontSize="inherit"/>
                                    </IconButton>
                                }
                                {inputList.length - 1 === i &&
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

export default AddVet;