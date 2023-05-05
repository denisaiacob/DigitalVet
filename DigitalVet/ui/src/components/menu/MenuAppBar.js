import * as React from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import {blueGrey} from '@mui/material/colors';
import logo from "../images/Logo.png";
import DrawerMenu from "./DrawerMenu";
import {Link} from 'react-router-dom';
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

function MenuAppBar() {
    const theme2 = useTheme();
    const isMatch = useMediaQuery(theme2.breakpoints.down(550));

    const auth = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

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
                                <ThemeProvider theme={theme}>
                                    <Button component={Link} to="/business"  startIcon={<AddBoxIcon/>}>Add your cabinet</Button>
                                </ThemeProvider>
                            </Grid>
                            <Grid container item xs={1} justifyContent="end">
                                {auth && (
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
                                            <Button
                                                fullWidth
                                                color="inherit"
                                                component={Link} to="/login"
                                                startIcon={<LoginIcon/>}
                                                onClick={handleClose}
                                            >
                                                Login
                                            </Button>
                                            <Button
                                                fullWidth
                                                color="inherit"
                                                component={Link} to="/register"
                                                startIcon={<PersonIcon/>}
                                                onClick={handleClose}
                                            >
                                                Register
                                            </Button>
                                        </Menu>
                                    </div>
                                )}
                            </Grid>
                        </Grid>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default MenuAppBar;