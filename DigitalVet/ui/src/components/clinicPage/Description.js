import * as React from 'react';
import {Box, Typography} from "@mui/material";

function Description({description}) {
    return (
        <Box
            sx={{backgroundColor: "white"}}
        >
            <Box
                sx={{
                    textAlign: "start",
                    borderTop: 30,
                    borderBottom: 30,
                    borderColor: "white",
                    marginLeft: 6.5,
                    marginRight: 6.5
                }}
            >
                <Typography
                    variant="h6"
                    fontWeight="bold"
                >
                    Despre noi
                </Typography>
                <Typography
                    sx={{
                        marginTop: 2,
                        '@media (max-width:700px)': {
                            fontSize: '0.7rem',
                        },
                    }}
                >
                    {description}
                </Typography>
            </Box>
        </Box>
    );
}

export default Description;