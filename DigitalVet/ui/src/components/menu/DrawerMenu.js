import React, {useState} from "react";
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
import logo from "../images/Logo.png";
import {Link} from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function DrawerMenu() {
    const [openDrawer, setOpenDrawer] = useState(false);

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