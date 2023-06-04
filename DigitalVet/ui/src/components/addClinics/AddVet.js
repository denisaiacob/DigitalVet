import React, {useState} from "react";
import {Alert, Box, Button, Grid, Snackbar, Typography} from "@mui/material";
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
import ClinicService from "../../services/ClinicService";

function AddVet({vet, setVet, update}) {
    const [open, setOpen] = useState(false);
    const [success,setSuccess]=useState(true);
    const [state, setState] = useState([{
        imageUploaded: 0,
        selectedFile: null
    }])

    const handleUploadClick = (index, event) => {
        const file = event.target.files[0];
        const imageUpload = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = function (e) {
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
        setVet([...vet, {
            clinicId:vet[0].clinicId,
            name: '',
            function: '',
            description: '',
            photo: ''
        }]);
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        vet.map(async (x, i) => {
            if (!vet[i].vetId) {
                try {
                    const response = await ClinicService.addVet(vet[i]);
                    console.log(response.data);
                } catch (error) {
                    console.log(error);
                    setSuccess(false);
                }
            } else {
                try {
                    const response = await ClinicService.updateVet(vet[i],vet[i].vetId);
                    console.log(response.data);
                } catch (error) {
                    console.log(error);
                    setSuccess(false);
                }
            }
        })
        if (success) setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <div className="clinic-page">
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
                    The veterinarians section has been successfully updated!
                </Alert>
            </Snackbar>
            <Box style={{width: '70%', textAlign: 'center'}}>
                <Typography fontWeight="bold" sx={{marginTop: 3}}>Add veterinarians</Typography>
                {
                    vet.map((x, i) => {
                        return (
                            <Box key={i} sx={{textAlign: 'start', marginTop: 5}}>
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
                                        {state[i] && state[i].selectedFile !== null && (
                                            <img alt="vet-photo"
                                                 src={state[i].selectedFile ? state[i].selectedFile : vet[i].photo}
                                                 style={{width: 150, margin: 10}}/>
                                        )}
                                        {vet[i].photo && !state[i] && (
                                            <img
                                                alt="clinic-photo"
                                                src={vet[i].photo}
                                                style={{width: 150, margin: 10}}
                                            />
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
                <div style={{marginTop: 30}}>
                    {update &&
                        <Button
                            onClick={handleUpdate}
                            variant="outlined"
                            style={{color: '#43ab98', borderColor: '#43ab98'}}
                        >
                            Update
                        </Button>}
                </div>
            </Box>
        </div>
    );
}

export default AddVet;