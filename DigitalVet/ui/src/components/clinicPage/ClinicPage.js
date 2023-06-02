import * as React from 'react';
import "../../App.css"
import {Box, CardMedia, Checkbox, Grid, Card, Typography, Tabs, Tab} from "@mui/material";
import {styled, useTheme} from "@mui/material/styles";
import {useParams} from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {blue, red, yellow} from "@mui/material/colors";
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import {useEffect, useState} from "react";
import SwipeableViews from "react-swipeable-views";
import Description from "./Description";
import Program from "./Program";
import Reviews from "./reviews/Reviews";
import Services from "./services/Services";
import ClinicService from "../../services/ClinicService";
import avatar from "../../images/ClinicAvatar.png";


function TabPanel(props) {
    const {children, value, index, ...other} = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    {children}
                </Box>
            )}
        </div>
    );
}

const StyledTabs = styled(Tabs)`
  & .MuiTabs-indicator {
    background-color: #43ab98;
  }
`;

const StyledTab = styled(Tab)`
  && {
    color: #43ab98;
  }
`;

const RoundedTypography = styled(Typography)({
    fontFamily: 'Optima',
    fontWeight: 'bold',
    fontSize: '2.0rem',
    textAlign: 'center',
});
const PointerTypography = styled(Typography)({
    cursor: 'pointer',
    "&:hover": {
        color: blue[800],
    },
});

function ClinicPage() {
    const { clinicId } = useParams();
    const [clinic, setClinic] = useState({
        clinicId: clinicId,
        name: "",
        city: "",
        address: "",
        description:"",
        photo:""
    });
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ClinicService.getClinicById(clinicId);
                setClinic(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [clinicId]);

    const theme = useTheme();
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangeIndex = (index) => {
        setValue(index);
    };
    return (
        <div className="clinic-page">
            <RoundedTypography sx={{mt: 5}}>{clinic.name}</RoundedTypography>
            <Card sx={{width:'80%', mt: 3}}>
                <Grid container spacing={2} sx={{margin: 3}}>
                    <Grid
                        item
                        md={6}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight:30,
                        }}
                    >
                        <CardMedia
                            className="clinic-img"
                            component="img"
                            sx={{width: '100%',marginRight:6}}
                            image={clinic.photo === "" ? avatar : clinic.photo}
                            alt="Cabinet img"
                        />
                    </Grid>
                    <Grid item xs={12} sm container sx={{minWidth: 200, width: 400}}>
                        <Grid item xs={9} container direction="column" spacing={2} sx={{justifyContent: 'center'}}>
                            <Grid item xs={2}>
                                <Typography variant="h5" component="span">
                                    <LocationOnIcon sx={{color: yellow[800]}}/>
                                    {clinic.address}
                                </Typography>
                            </Grid>
                            <Grid item className="align-center">
                                <Typography variant="h5" component="span">
                                    <StarIcon sx={{color: yellow[800]}}/>
                                    5.0
                                </Typography>
                                <Box sx={{maxWidth: 120}}>
                                    <PointerTypography>
                                        30 Reviews
                                    </PointerTypography>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Checkbox
                                sx={{
                                    color: red[500],
                                    '&.Mui-checked': {
                                        color: red[500],
                                    },
                                }}
                                icon={<FavoriteBorder/>}
                                checkedIcon={<Favorite/>}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
            <Box
                className="tabs-view"
                sx={{
                    marginBottom: 20,
                    marginTop: 7,
                    backgroundColor: 'transparent',
                }}>
                <StyledTabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    aria-label="tabs"
                >
                    <StyledTab label="Services"/>
                    <StyledTab label="Description"/>
                    <StyledTab label="Program"/>
                    <StyledTab label="Reviews"/>
                </StyledTabs>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel
                        value={value}
                        index={0}
                        dir={theme.direction}
                    >
                        <Services clinicId={clinicId}/>
                    </TabPanel>
                    <TabPanel
                        value={value}
                        index={1}
                        dir={theme.direction}
                    >
                        <Description description={clinic.description}/>
                    </TabPanel>
                    <TabPanel
                        value={value}
                        index={2}
                        dir={theme.direction}
                    >
                        <Program clinicId={clinicId}/>
                    </TabPanel>
                    <TabPanel
                        value={value}
                        index={3}
                        dir={theme.direction}
                    >
                        <Reviews/>
                    </TabPanel>
                </SwipeableViews>
            </Box>
        </div>
    );
}

export default ClinicPage;