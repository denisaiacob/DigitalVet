import React, {useContext, useState} from "react";
import {
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemText,
    Grid,
    Divider,
    ListSubheader,
    ListItemIcon,
    styled,
    Stack,
    Box
} from "@mui/material";
import logo from "../../images/Logo.png";
import {Link, useNavigate} from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AuthContext from "../../context/AuthProvider";
import useAuth from "../../hooks/UseAuth";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import EventIcon from '@mui/icons-material/Event';

function DrawerMenu() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const {setAuth} = useContext(AuthContext);
    const {auth} = useAuth();
    const navigate = useNavigate();

    const logout = async () => {
        setAuth({});
        navigate('/login');
        setOpenDrawer(false);
    }

    const FireNav = styled(List)({
        '& .MuiListItemButton-root': {
            paddingLeft: 24,
            paddingRight: 24,
        },
        '& .MuiListItemIcon-root': {
            minWidth: 0,
            marginRight: 16,
        },
        '& .MuiSvgIcon-root': {
            fontSize: 20,
        },
    });

    return (
        <React.Fragment>
            <Drawer
                anchor="left"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <FireNav component="nav" disablePadding>
                    <Stack direction="row" spacing={2}>
                        <Box
                            component="img"
                            sx={{
                                borderLeft: 42,
                                borderRight: 40,
                                borderColor: 'white',
                                width: 200
                            }}
                            alt="Logo"
                            src={logo}
                            onClick={() => setOpenDrawer(!openDrawer)}
                        />
                        <CloseIcon
                            color="action"
                            sx={{fontSize: 100}}
                            onClick={() => setOpenDrawer(!openDrawer)}
                        />
                    </Stack>
                    <Divider/>
                    {!auth?.user && (
                        <div>
                            <List
                                sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                subheader={
                                    <ListSubheader component="div" id="nested-list-subheader">
                                        Log in
                                    </ListSubheader>
                                }
                            >
                                <ListItemButton color="inherit" component={Link} to="/register"
                                                onClick={() => setOpenDrawer(!openDrawer)}>
                                    <ListItemIcon>
                                        <PersonIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Register"/>
                                </ListItemButton>
                                <ListItemButton color="inherit" component={Link} to="/login"
                                                onClick={() => setOpenDrawer(!openDrawer)}>
                                    <ListItemIcon>
                                        <LoginIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Login"/>
                                </ListItemButton>
                            </List>
                            <Divider/>
                            <List
                                sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                subheader={
                                    <ListSubheader component="div" id="nested-list-subheader">
                                        Add
                                    </ListSubheader>
                                }
                            >
                                <ListItemButton component={Link} to="/business">
                                    <ListItemIcon>
                                        <AddBoxIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Add your cabinet"/>
                                </ListItemButton>
                            </List>
                        </div>
                    )}
                    {auth?.roles?.find(role => role === 'user') && (
                        <div>
                            <List
                                sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                                component="nav"
                            >
                                <ListItemButton
                                    color="inherit"
                                                onClick={() => setOpenDrawer(!openDrawer)}
                                    component={Link} to={"/fav"}
                                >
                                    <ListItemIcon>
                                        <FavoriteIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Favorite Clinics"/>
                                </ListItemButton>
                                <ListItemButton
                                    color="inherit"
                                    onClick={() => setOpenDrawer(!openDrawer)}
                                    component={Link} to={"/myAppointments"}
                                >
                                    <ListItemIcon>
                                        <EventIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="My appointments"/>
                                </ListItemButton>
                                <ListItemButton color="inherit"
                                                onClick={logout}>
                                    <ListItemIcon>
                                        <LogoutIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Logout"/>
                                </ListItemButton>
                            </List>
                        </div>
                    )}
                    {auth?.roles?.find(role => role === 'business') && (
                        <div>
                            <List
                                sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                                component="nav"
                            >
                                <ListItemButton
                                    color="inherit"
                                    component={Link} to={`/settings/${auth.cId}`}
                                    onClick={() => setOpenDrawer(!openDrawer)}
                                >
                                    <ListItemIcon>
                                        <HomeIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Home"/>
                                </ListItemButton>
                                <ListItemButton color="inherit"
                                                onClick={logout}>
                                    <ListItemIcon>
                                        <LogoutIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Logout"/>
                                </ListItemButton>
                            </List>
                        </div>
                    )}
                </FireNav>

            </Drawer>
            <Grid container spacing={2} alignItems={"center"}>
                <Grid container item xs={1}>
                    <IconButton
                        onClick={() => setOpenDrawer(!openDrawer)}
                    >
                        <MenuIcon/>
                    </IconButton>
                </Grid>
                <Grid container item xs justifyContent={"start"}>
                    <Link to="/">
                        <Box
                            marginLeft="15%"
                            component="img"
                            sx={{
                                width: 200
                            }}
                            alt="Logo"
                            src={logo}
                        />
                    </Link>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default DrawerMenu;