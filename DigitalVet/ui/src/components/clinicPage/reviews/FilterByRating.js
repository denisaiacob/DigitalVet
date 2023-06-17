import * as React from 'react';
import {Card, Checkbox, FormGroup, Grid, Rating, Typography} from "@mui/material";
import LinearProgress, {linearProgressClasses} from '@mui/material/LinearProgress';
import {styled} from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(({theme}) => ({
    height: 12,
    width: 150,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[200],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: '#54d6be',
    },
    '@media (max-width:700px)': {
        width: 50,
        height: 5
    },
}));

function FilterByRating({checkedItems, setCheckedItems}) {

    const handleCheck = (event) => {
        setCheckedItems({...checkedItems, [event.target.name]: event.target.checked});
    };

    return (
        <Card
            variant="outlined"
            sx={{
                width: 499,
                height: 220,
                '@media (max-width:700px)': {
                    width: 250,
                    height: 220,
                },
                textAlign: "center",
                display: "flex",
                flexDirection: "column"
            }}
        >
            <Typography
                sx={{
                    fontSize: '1.0rem',
                    '@media (max-width:700px)': {
                        fontSize: '0.8rem',
                    },
                    marginBottom: 1
                }}
                gutterBottom
            >
                Filtrează după rating
            </Typography>
            <div style={{marginLeft: 20}}>
                <FormGroup>
                    <Grid container spacieng={3} sx={{alignItems: "center"}}>
                        <Grid item>
                            <Checkbox
                                checked={checkedItems['option5']}
                                onChange={handleCheck}
                                name="option5"
                                size="small"
                                sx={{
                                    color: '#54d6be',
                                    '&.Mui-checked': {
                                        color: '#54d6be',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <Rating
                                name="five-star"
                                value={5}
                                readOnly
                                sx={{
                                    marginRight: 3,
                                    fontSize: '1.5rem',
                                    '@media (max-width:700px)': {
                                        fontSize: '1.0rem',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <BorderLinearProgress variant="determinate" value={33}/>
                        </Grid>
                    </Grid>
                    <Grid container spacieng={3} sx={{alignItems: "center"}}>
                        <Grid item>
                            <Checkbox
                                checked={checkedItems['option4']}
                                onChange={handleCheck}
                                name="option4"
                                size="small"
                                sx={{
                                    color: '#54d6be',
                                    '&.Mui-checked': {
                                        color: '#54d6be',
                                    },
                                }}
                            />

                        </Grid>
                        <Grid item>
                            <Rating
                                name="four-star"
                                value={4}
                                readOnly
                                sx={{
                                    marginRight: 3,
                                    fontSize: '1.5rem',
                                    '@media (max-width:700px)': {
                                        fontSize: '1.0rem',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <BorderLinearProgress variant="determinate" value={20}/>
                        </Grid>
                    </Grid>
                    <Grid container spacieng={3} sx={{alignItems: "center"}}>
                        <Grid item>
                            <Checkbox
                                checked={checkedItems['option3']}
                                onChange={handleCheck}
                                name="option3"
                                size="small"
                                sx={{
                                    color: '#54d6be',
                                    '&.Mui-checked': {
                                        color: '#54d6be',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <Rating
                                name="three-star"
                                value={3}
                                readOnly
                                sx={{
                                    marginRight: 3,
                                    fontSize: '1.5rem',
                                    '@media (max-width:700px)': {
                                        fontSize: '1.0rem',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <BorderLinearProgress variant="determinate" value={13}/>
                        </Grid>
                    </Grid>
                    <Grid container spacieng={3} sx={{alignItems: "center"}}>
                        <Grid item>
                            <Checkbox
                                checked={checkedItems['option2']}
                                onChange={handleCheck}
                                name="option2"
                                size="small"
                                sx={{
                                    color: '#54d6be',
                                    '&.Mui-checked': {
                                        color: '#54d6be',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <Rating
                                name="two-star"
                                value={2}
                                readOnly
                                sx={{
                                    marginRight: 3,
                                    fontSize: '1.5rem',
                                    '@media (max-width:700px)': {
                                        fontSize: '1.0rem',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <BorderLinearProgress variant="determinate" value={5}/>
                        </Grid>
                    </Grid>
                    <Grid container spacieng={3} sx={{alignItems: "center"}}>
                        <Grid item>
                            <Checkbox
                                checked={checkedItems['option1']}
                                onChange={handleCheck}
                                name="option1"
                                size="small"
                                sx={{
                                    color: '#54d6be',
                                    '&.Mui-checked': {
                                        color: '#54d6be',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <Rating
                                name="one-star"
                                value={1}
                                readOnly
                                sx={{
                                    marginRight: 3,
                                    fontSize: '1.5rem',
                                    '@media (max-width:700px)': {
                                        fontSize: '1.0rem',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <BorderLinearProgress variant="determinate" value={0}/>
                        </Grid>
                    </Grid>
                </FormGroup>
            </div>
        </Card>
    );
}

export default FilterByRating;