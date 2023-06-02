import React, {useEffect, useState} from "react";
import {styled, alpha} from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ClinicService from "../../services/ClinicService";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

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

function SearchFilter({search}) {
    const [clinics, setClinics] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [word, setWord] = useState("");

    useEffect(() => {
        const fetchClinic = async () => {
            try {
                const response = await ClinicService.getAllClinics();
                setClinics(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchClinic();
    }, []);

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = clinics.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };


    return (
        <Box component="form" noValidate>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon/>
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{'aria-label': 'search'}}
                    value={wordEntered}
                    onChange={handleFilter}
                />
            </Search>
            {filteredData.length !== 0 && (
                <Box>
                    {filteredData.slice(0, 15).map((value, key) => {
                        return (
                            <Button
                                key={value.clinicId}
                                fullWidth
                                startIcon={<LocationOnIcon />}
                                color='inherit'
                                component={Link} to={`/clinic/${value.clinicId}`}
                            >
                                {value.name}
                            </Button>
                        );
                    })}
                </Box>
            )}
        </Box>
    );
}

export default SearchFilter;