import * as React from 'react';
import {styled} from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Checkbox,
    Grid,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Collapse,
    Typography,
    IconButton, Box, Paper
} from "@mui/material";
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import {yellow, red, blue} from "@mui/material/colors";
import StarIcon from '@mui/icons-material/Star';
import {useHistory} from "react-router-dom";

const ExpandMore = styled((props) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const PointerTypography = styled(Typography)({
    cursor: 'pointer',
    "&:hover": {
        color: blue[800],
    },
});
const RoundedTypography = styled(Typography)({
    fontFamily: 'Century Gothic',
    fontWeight: 'bold',
    fontSize: '1.0rem',
    textAlign:'start',
});

function RightSide() {
    const history = useHistory();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleReviews = () => {
        history.push("/");
    };

    return (
        <div>
            <Card sx={{maxWidth: 820}}>
                <div className="show-box">
                    <Grid container spacing={2}>
                        <Grid item>
                            <CardMedia
                                component="img"
                                height="210"
                                sx={{width: 360}}
                                image="https://source.unsplash.com/random"
                                alt="Cabinet img"
                            />
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs={10} container direction="column" spacing={2} sx={{marginTop: 3}}>
                                <Grid item xs={2}>
                                    <CardHeader
                                        title="Cabinet Name"
                                        subheader="Adress"
                                    />
                                </Grid>
                                <Grid item>
                                    <Typography variant="h5" component="span">
                                        <StarIcon sx={{color: yellow[800]}}/>
                                        5.0
                                    </Typography>
                                    <PointerTypography onClick={handleReviews}>
                                        30 Reviews
                                    </PointerTypography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Checkbox
                                    sx={{
                                        color: red[500],
                                        '&.Mui-checked': {
                                            color: red[500],
                                        },
                                    }}
                                    icon={<FavoriteBorder/>}
                                    checkedIcon={<Favorite/>}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <CardActions disableSpacing>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show services"
                    >
                        <ExpandMoreIcon/>
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Paper variant="outlined">
                            <Box sx={{mt:3,ml:5,mr:2,mb:1}}>
                                <Grid container direction="column" spacing={2}>
                                    <Grid container direction="row" spacing={2}>
                                        <Grid item xs={11}>
                                            <RoundedTypography variant="h5">Name of the service</RoundedTypography>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <RoundedTypography variant="h5">15 Lei</RoundedTypography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography textAlign="start" variant="body2">Description</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    );
}

export default RightSide;