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
import {Link} from "react-router-dom";

const drawerWidth = 240;

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

function SettingsMenu({open, setOpen, isMatch,setTab}) {
    const theme = useTheme();
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleTab= (param) => {
        setTab(param);
    };
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
                    <ListSubheader component="div">View</ListSubheader>
                }
            >
                <ListItemButton onClick={() => handleTab(0)}>
                    <ListItemIcon><HomeIcon/></ListItemIcon>
                    <ListItemText primary="Clinic Page"/>
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
                    <ListSubheader component="div">Settings</ListSubheader>
                }
            >
                <ListItemButton onClick={() => handleTab(2)}>
                    <ListItemIcon ><DisplaySettingsIcon/></ListItemIcon>
                    <ListItemText primary="Clinic Page"/>
                </ListItemButton>
                <ListItemButton onClick={() => handleTab(3)}>
                    <ListItemIcon><ManageAccountsIcon/></ListItemIcon>
                    <ListItemText primary="Veterinarian profile"/>
                </ListItemButton>
                <ListItemButton onClick={() => handleTab(4)}>
                    <ListItemIcon><MedicalServicesIcon/></ListItemIcon>
                    <ListItemText primary="Services"/>
                </ListItemButton>
                <ListItemButton onClick={() => handleTab(5)}>
                    <ListItemIcon><AccessTimeIcon/></ListItemIcon>
                    <ListItemText primary="Program"/>
                </ListItemButton>
            </List>
            <div style={{marginTop: 20}}>
                <Divider/>
                <List sx={{width: '100%'}}
                >
                    <ListItemButton component={Link} to="/" >
                        <ListItemIcon><LogoutIcon/></ListItemIcon>
                        <ListItemText primary="Log out"/>
                    </ListItemButton>
                </List>
            </div>
        </Drawer>
    );
}

export default SettingsMenu;