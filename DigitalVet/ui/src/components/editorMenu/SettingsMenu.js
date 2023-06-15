import * as React from "react";
import {
    Drawer,
    IconButton,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {styled, useTheme} from "@mui/material/styles";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import {useNavigate} from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import {useContext} from "react";

const drawerWidth = 240;

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

function SettingsMenu({open, setOpen, isMatch, setTab}) {
    const theme = useTheme();
    const {setAuth} = useContext(AuthContext);
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleTab = (param) => {
        setTab(param);
    };

    const navigate = useNavigate();

    const logout = async () => {
        setAuth({});
        navigate('/login');
    }


    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            {isMatch ? (
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </DrawerHeader>
            ) : (
                <>
                    <DrawerHeader/>
                </>
            )}
            <Divider/>
            <List
                sx={{width: '100%'}}
                subheader={
                    <ListSubheader component="div">Vizualizare</ListSubheader>
                }
            >
                <ListItemButton onClick={() => handleTab(0)}>
                    <ListItemIcon><HomeIcon/></ListItemIcon>
                    <ListItemText primary="Pagina clinicii"/>
                </ListItemButton>
                <ListItemButton onClick={() => handleTab(1)}>
                    <ListItemIcon><CalendarMonthIcon/></ListItemIcon>
                    <ListItemText primary="Calendar"/>
                </ListItemButton>
            </List>
            <Divider/>
            <List
                sx={{width: '100%'}}
                subheader={
                    <ListSubheader component="div">Setări</ListSubheader>
                }
            >
                <ListItemButton onClick={() => handleTab(2)}>
                    <ListItemIcon><DisplaySettingsIcon/></ListItemIcon>
                    <ListItemText primary="Informații clinică"/>
                </ListItemButton>
                <ListItemButton onClick={() => handleTab(3)}>
                    <ListItemIcon><ManageAccountsIcon/></ListItemIcon>
                    <ListItemText primary="Medici veterinari"/>
                </ListItemButton>
                <ListItemButton onClick={() => handleTab(4)}>
                    <ListItemIcon><MedicalServicesIcon/></ListItemIcon>
                    <ListItemText primary="Servicii"/>
                </ListItemButton>
                <ListItemButton onClick={() => handleTab(5)}>
                    <ListItemIcon><AccessTimeIcon/></ListItemIcon>
                    <ListItemText primary="Progrogram"/>
                </ListItemButton>
            </List>
            <div style={{marginTop: 20}}>
                <Divider/>
                <List sx={{width: '100%'}}
                >
                    <ListItemButton onClick={logout}>
                        <ListItemIcon><LogoutIcon/></ListItemIcon>
                        <ListItemText primary="Deconectare"/>
                    </ListItemButton>
                </List>
            </div>
        </Drawer>
    );
}

export default SettingsMenu;