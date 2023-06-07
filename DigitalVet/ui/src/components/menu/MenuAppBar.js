import * as React from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import {blueGrey} from '@mui/material/colors';
import logo from "../../images/Logo.png";
import DrawerMenu from "./DrawerMenu";
import {Link, useNavigate} from 'react-router-dom';
import {
    createTheme, ThemeProvider,
    AppBar,
    Box,
    Toolbar,
    Menu,
    Grid,
    Button,
    IconButton,
    useMediaQuery,
    useTheme
} from "@mui/material";
import {useContext} from "react";
import AuthContext from "../../context/AuthProvider";
import useAuth from "../../hooks/UseAuth";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from "@mui/icons-material/Home";

function MenuAppBar() {
    const theme2 = useTheme();
    const isMatch = useMediaQuery(theme2.breakpoints.down(550));

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const {setAuth} = useContext(AuthContext);
    const {auth} = useAuth();
    const navigate = useNavigate();

    const logout = async () => {
        setAuth({});
        navigate('/login');
        setAnchorEl(null);
    }

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: blueGrey[900],
            }
        }
    });


    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar style={{background: '#f9d3bc'}}>
                <Toolbar>
                    {isMatch ? (
                        <>
                            <DrawerMenu/>
                        </>
                    ) : (
                        <Grid container spacing={3} alignItems={"center"}>
                            <Grid container item xs>
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
                            </Grid>
                            <Grid container item xs justifyContent="end" marginRight="20px">
                                {!auth?.user && (
                                    <ThemeProvider theme={theme}>
                                        <Button component={Link} to="/business" startIcon={<AddBoxIcon/>}>Add your
                                            cabinet</Button>
                                    </ThemeProvider>
                                )}
                            </Grid>
                            <Grid container item xs={1} justifyContent="end">
                                <div>
                                    <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleMenu}
                                        color="inherit"
                                    >
                                        <AccountCircle sx={{fontSize: 40, color: "#333333"}}/>
                                    </IconButton>
                                    <Menu
                                        id="account-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                    >
                                        {auth?.roles?.find(role => role === 'user') && (
                                            <div>
                                                <Button
                                                    fullWidth
                                                    color="inherit"
                                                    startIcon={<FavoriteIcon/>}
                                                    component={Link} to={"/fav"}
                                                    onClick={() => setAnchorEl(null)}
                                                >
                                                    Favorite Clinics
                                                </Button>
                                                <Button
                                                    fullWidth
                                                    color="inherit"
                                                    startIcon={<LogoutIcon/>}
                                                    onClick={logout}
                                                >
                                                    Logout
                                                </Button>
                                            </div>
                                        )}
                                        {auth?.roles?.find(role => role === 'business') && (
                                            <div>
                                                <div>
                                                    <Button
                                                        fullWidth
                                                        color="inherit"
                                                        startIcon={<HomeIcon/>}
                                                        component={Link} to={`/settings/${auth.cId}`}
                                                        onClick={() => setAnchorEl(null)}
                                                    >
                                                        Home
                                                    </Button>
                                                    <Button
                                                        fullWidth
                                                        color="inherit"
                                                        startIcon={<LogoutIcon/>}
                                                        onClick={logout}
                                                    >
                                                        Logout
                                                    </Button>
                                                </div>
                                            </div>
                                        )}
                                        {!auth?.user && (
                                            <div>
                                                <Button
                                                    fullWidth
                                                    color="inherit"
                                                    component={Link} to="/login"
                                                    startIcon={<LoginIcon/>}
                                                    onClick={() => setAnchorEl(null)}
                                                >
                                                    Login
                                                </Button>
                                                <Button
                                                    fullWidth
                                                    color="inherit"
                                                    component={Link} to="/register"
                                                    startIcon={<PersonIcon/>}
                                                    onClick={() => setAnchorEl(null)}
                                                >
                                                    Register
                                                </Button>
                                            </div>
                                        )}
                                    </Menu>
                                </div>
                            </Grid>
                        </Grid>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default MenuAppBar;