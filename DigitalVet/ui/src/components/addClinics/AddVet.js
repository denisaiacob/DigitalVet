import React, {useState} from "react";
import {Box, Grid, Typography} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import {
    ref,
    uploadBytes,
    getDownloadURL,
} from "firebase/storage";
import {storage} from "./firebase";
import {v4} from "uuid";

function AddVet({vet, setVet}) {
    const[state,setState]=useState([{
        imageUploaded: 0,
        selectedFile: null
    }])

    const handleUploadClick = (index, event) => {
        const file = event.target.files[0];
        const imageUpload=event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = function(e) {
            setState(prevState => {
                const newState = [...prevState];
                newState[index] = {
                    ...newState[index],
                    selectedFile: reader.result,
                    imageUploaded: 1
                };
                return newState;
            });
        };
        if (file) {
            reader.readAsDataURL(file);
        }
        const imageRef = ref(storage, `vetImages/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setVet(prevVet => {
                    const newList = [...prevVet];
                    newList[index] = {
                        ...newList[index],
                        photo: url
                    };
                    return newList;
                });
            });
        })
    };

    const handleInputChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...vet];
        list[index][name] = value;
        setVet(list);
    }

    const handleRemove = index => {
        const list = [...vet];
        list.splice(index, 1);
        setVet(list);
    }

    const handleAddClick = () => {
        setVet([...vet, {name: '', function: '', description: '', photo: ''}]);
    }
    return (
        <Box style={{width: '70%', textAlign: 'center'}}>
            <Typography fontWeight="bold" sx={{marginTop: 3}}>Add veterinarians</Typography>
            {
                vet.map((x, i) => {
                    return (
                        <Box sx={{textAlign: 'start', marginTop: 5}}>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Typography>Name</Typography>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={vet[i].name}
                                        onChange={e => handleInputChange(e, i)}
                                        style={{width: '80%', height: 30, marginBottom: 10}}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>Function</Typography>
                                    <input
                                        type="text"
                                        name="function"
                                        id="function"
                                        value={vet[i].function}
                                        onChange={e => handleInputChange(e, i)}
                                        style={{width: '80%', height: 30, marginBottom: 10}}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>A short description</Typography>
                                    <textarea
                                        style={{width: '90%', height: 60, marginTop: 5}}
                                        name="description"
                                        rows={5}
                                        id="description"
                                        value={vet[i].description}
                                        onChange={e => handleInputChange(e, i)}
                                    />
                                </Grid>
                                <div>
                                    <input
                                        accept="image/*"
                                        id="contained-button-file"
                                        // multiple
                                        type="file"
                                        onChange={handleUploadClick.bind(this, i)}
                                    />
                                    {state[i] && state[i].selectedFile!==null && (
                                        <img alt="vet-photo" src={state[i].selectedFile} style={{width: 150, margin: 10}}/>
                                    )}
                                </div>
                            </Grid>
                            <div>
                                {
                                    vet.length !== 1 &&
                                    <IconButton size="large" onClick={handleRemove}>
                                        <DeleteIcon fontSize="inherit"/>
                                    </IconButton>
                                }
                                {vet.length - 1 === i &&
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