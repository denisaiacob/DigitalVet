import React, {useState} from "react";
import {styled, alpha} from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const cities = [
    'Iasi',
    'Bucuresti',
    'Cluj'
];

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 200,
        },
    },
};

function SearchFilter() {
    const [city, setCityName] = useState('');
    const handleLocation = (event) => {
        setCityName(event.target.value);
    };
    return (
        // <Box >
        //     <FormControl fullWidth sx={{mt: 1, mb: 2, width: 300}}>
        //         <InputLabel id="choose-location">Choose the location</InputLabel>
        //         <Select
        //             id="select-location"
        //             value={city}
        //             label="Choose the location"
        //             onChange={handleLocation}
        //             MenuProps={MenuProps}
        //         >
        //             <MenuItem value="">
        //                 <em>None</em>
        //             </MenuItem>
        //             {cities.map((location) => (
        //                 <MenuItem
        //                     key={location}
        //                     value={location}
        //                     id="location"
        //                 >
        //                     {location}
        //                 </MenuItem>
        //             ))}
        //         </Select>
        //     </FormControl>
        //     <Search>
        //         <SearchIconWrapper>
        //             <SearchIcon/>
        //         </SearchIconWrapper>
        //         <StyledInputBase
        //             placeholder="Search…"
        //             inputProps={{'aria-label': 'search'}}
        //         />
        //     </Search>
        //     <Button
        //         variant='contained'
        //         fullWidth
        //         type='submit'
        //         // style={buttonStyle}
        //     >
        //         Search for services
        //     </Button>
        // </Box>
        <Box
            component="form"
            // onSubmit={handleSubmit}
            noValidate
        >
            <FormControl fullWidth sx={{mt: 1, mb: 2, width: 300}}>
                <InputLabel id="choose-location">Choose the location</InputLabel>
                <Select
                    id="select-location"
                    value={city}
                    label="Choose the location"
                    onChange={handleLocation}
                    MenuProps={MenuProps}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {cities.map((location) => (
                        <MenuItem
                            key={location}
                            value={location}
                            id="location"
                        >
                            {location}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon/>
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{'aria-label': 'search'}}
                />
            </Search>
        </Box>
    );
}

export default SearchFilter;