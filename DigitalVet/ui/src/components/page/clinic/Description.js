import * as React from 'react';
import {Box, Typography} from "@mui/material";

function Description() {
    return (
        <Box
            sx={{backgroundColor: "white"}}
        >
            <Box
                sx={{
                    textAlign: "start",
                    borderTop: 20,
                    borderBottom:50,
                    borderColor: "white",
                    marginLeft: 5
                }}
            >
                <Typography
                    variant="h6"
                    fontWeight="bold"
                >
                    About us
                </Typography>
                <Typography
                    sx={{marginTop:2,
                        '@media (max-width:700px)': {
                            fontSize: '0.7rem',
                        },}}
                >
                    Description
                </Typography>
            </Box>
        </Box>
    );
}

export default Description;