import React, {useEffect, useState} from "react";
import SwipeableViews from 'react-swipeable-views';
import {useTheme} from '@mui/material/styles';
import { Box, Tab, Tabs, AppBar} from "@mui/material";
import ServiceFilter from "./ServiceFilter";
import SearchFilter from "./SearchFilter";

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

function Filter() {
    const theme = useTheme();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className="all">
            <Box
                sx={{
                    marginTop: 7,
                    height: 400,
                    width: 396,
                    backgroundColor: 'white', color: 'black',
                }}>
                <AppBar
                    style={{
                        backgroundColor: 'white',
                        color: 'black'
                    }}
                    position="static"
                >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor='#54d6be'
                        textColor="inherit"
                        variant="fullWidth"
                    >
                        <Tab label="Services"/>
                        <Tab label="Clinics"/>
                        <Tab label="Vets"/>
                    </Tabs>
                </AppBar>
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
                        <ServiceFilter/>
                    </TabPanel>
                    <TabPanel
                        value={value}
                        index={1}
                        dir={theme.direction}
                    >
                        <SearchFilter/>
                    </TabPanel>
                    <TabPanel
                        value={value}
                        index={2}
                        dir={theme.direction}
                    >
                        <SearchFilter/>
                    </TabPanel>
                </SwipeableViews>
            </Box>
        </div>
    );
}

export default Filter;