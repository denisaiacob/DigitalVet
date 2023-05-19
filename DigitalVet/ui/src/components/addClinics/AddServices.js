import {useState} from "react";
import {Button, Typography, Box, Grid, Stack} from "@mui/material";
import '../../App.css';

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
                textAlign:'center',
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
                <Grid container style={{width:'100%'}}>
                    <Grid item xs={12}>
                        <Typography fontWeight="bold" >Services</Typography>
                    </Grid>
                    {serviceList.map((singleService, index) => (
                        <div key={index} className="services">
                            <Grid item xs={12} style={{width:'100%'}}>
                                <Stack spacing={1} style={{width:'100%'}}>
                                    <input
                                        style={{
                                            height:35,
                                            marginTop:14
                                        }}
                                        name="service"
                                        type="text"
                                        id="service"
                                        value={singleService.service}
                                        onChange={(e) => handleServiceChange(e, index)}
                                        required
                                    />
                                    {serviceList.length - 1 === index && (
                                        <Button
                                            sx={{
                                                margin:3
                                            }}
                                            variant="outlined"
                                            color="inherit"
                                            onClick={handleServiceAdd}
                                        >
                                            Add a Service
                                        </Button>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <div className="second-division">
                                    {serviceList.length !== 1 && (
                                        <Button
                                            sx={{
                                                marginLeft:2,
                                                height:35,
                                                marginTop:2
                                            }}
                                            variant="outlined"
                                            color="error"
                                            onClick={() => handleServiceRemove(index)}
                                        >
                                            <span>Remove</span>
                                        </Button>
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