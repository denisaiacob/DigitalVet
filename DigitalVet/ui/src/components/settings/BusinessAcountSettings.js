import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import {Box, CssBaseline, Toolbar, IconButton} from "@mui/material";
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsMenu from "./SettingsMenu";
import {useMediaQuery} from "@mui/material";
import logo from "../../images/Logo.png";
import {Link, useParams} from "react-router-dom";
import CreateClinicPage from "../addClinics/CreateClinicPage";
import AddProgram from "../addClinics/AddProgram";
import AddVet from "../addClinics/AddVet";
import AddServices from "../addClinics/AddServices";
import ClinicPage from "../clinicPage/ClinicPage";
import Filter from "../filter/Filter";
import {useEffect, useState} from "react";
import ClinicService from "../../services/ClinicService";
import "../../App.css";
import UpdateProgram from "./UpdateProgram";
import BookPage from "../book/BookPage";

const drawerWidth = 240;

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

function BusinessAcountSettings() {
    const {clinicId} = useParams();
    const theme2 = useTheme();
    const isMatch = useMediaQuery(theme2.breakpoints.down(650));
    const [open, setOpen] = React.useState(true);
    const [tab, setTab] = React.useState(0);

    const [clinic, setClinic] = useState({
        clinicId: clinicId,
        name: "",
        city: "",
        address: "",
        description: "",
        photo: ""
    })

    const [vets, setVets] = useState([{
        vetId: null,
        clinicId: clinic.clinicId,
        name: "",
        function: "",
        description: "",
        photo: ""
    }])

    const [service, setService] = useState([{
        serviceId: null,
        vetId: "",
        clinicId: clinic.clinicId,
        name: "",
        price: "",
        minutes: ""
    }])

    useEffect(() => {
        const fetchClinic = async () => {
            try {
                const response = await ClinicService.getClinicById(clinic.clinicId);
                setClinic(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        const fetchVets = async () => {
            try {
                const response = await ClinicService.getVetsByClinicId(clinic.clinicId);
                setVets(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        const fetchService = async () => {
            try {
                const response = await ClinicService.getServicesByClinicId(clinic.clinicId);
                console.log(response.data);
                if (response.data.length !== 0) {
                    setService(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchClinic().then();
        fetchVets().then();
        fetchService().then();
    }, [clinicId]);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    let stepContent;
    switch (tab) {
        case 0:
            stepContent = <ClinicPage/>;
            break;
        case 1:
            stepContent = <BookPage/>;
            break;
        case 2:
            stepContent = <CreateClinicPage clinic={clinic} setClinic={setClinic} update={true}/>;
            break;
        case 3:
            stepContent = <AddVet vet={vets} setVet={setVets} update={true}/>;
            break;
        case 4:
            stepContent = <AddServices service={service} setService={setService} vets={vets} update={true}/>;
            break;
        default:
            stepContent = <UpdateProgram clinicId={clinicId}/>;
    }

    return (
        <div className="page">
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <AppBar open={open} style={{background: '#f9d3bc'}}>
                    <Toolbar>
                        <IconButton
                            color='black'
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{mr: 2, ...(open && {display: 'none'})}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Link to="/">
                            <Box
                                color="inherit"
                                marginLeft="5%"
                                component="img"
                                sx={{
                                    width: 200,
                                    maxWidth: {xs: 200, md: 200},
                                }}
                                alt="Logo"
                                src={logo}
                            />
                        </Link>
                    </Toolbar>
                </AppBar>
                <SettingsMenu
                    open={open}
                    setOpen={setOpen}
                    isMatch={isMatch}
                    setTab={setTab}
                />
                <Main open={open}>
                    <DrawerHeader/>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 5}}>
                        {stepContent}
                    </div>
                </Main>
            < /Box>
        </div>
    );
}

export default BusinessAcountSettings;