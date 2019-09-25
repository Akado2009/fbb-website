import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Companies from './Companies';
import Info from './Info';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        height: 100,
        marginTop: 20,
    },
}));

const Footer = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid 
                container 
                spacing={8}
                justify={"center"}
                alignItems={"center"}
            >
                <Grid item xs={4}>
                    <Info />
                </Grid>
                <Grid item xs={3}>
                    <Companies />
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;