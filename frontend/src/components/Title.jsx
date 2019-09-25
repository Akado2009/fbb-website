import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Logo from '../assets/img/fbb_logo.png';

const useStyles = makeStyles(theme => ({
    root: {
        flex: 'grow',
        verticalAlign: 'middle',
    },
    typography: {
        color: theme.palette.primary.contrast,
    },
    image: {
        width: 80,
        hegiht: 80,
        filter: 'invert(100%)',
    },
}));

const Title = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid 
                container
                spacing={5}
                alignItems={"center"}
                justify={"center"}
            >
                <Grid item xs={1}>
                    <img src={Logo} className={classes.image} />
                </Grid>
                <Grid item xs={7}>
                    <Typography
                        variant={"h5"}
                        className={classes.typography}
                    >
                        Факультет биоинженерии и биоинформатики
                    </Typography>
                    <Typography
                        variant={"caption"}
                        className={classes.typography}
                    >
                        Московского государственного университета имени М. В. Ломоносова
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default Title;