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
    IconButton
} from "@mui/material";
import {Favorite, FavoriteBorder} from "@mui/icons-material";

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

function RightSide() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
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
                                    <Typography>
                                        Recenzii
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Checkbox
                                    sx={{
                                        color: '#FF0000',
                                        '&.Mui-checked': {
                                            color: '#FF0000',
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
                        aria-label="show more"
                    >
                        <ExpandMoreIcon/>
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                            aside for 10 minutes.
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    );
}

export default RightSide;