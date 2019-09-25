import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Title from './Title';
import Menu from './Menu';


const useStyles = makeStyles(theme => ({
    root: {
        flex: "grow",
    },
    paper: {
        height: 110,
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: theme.palette.primary.main,
        borderRadius: 3,
    },
    grid: {
        margin: '0 300px',
    }
}));


const Header = () => {
    
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper 
                className={classes.paper}
                elevation={3}
            >
                <Grid 
                    container 
                    spacing={4}
                    alignItems={"center"}
                    justify={"center"}
                    alignContent={"center"}
                    className={classes.grid}
                >
                    <Grid item xs={6}>
                        <Title />
                    </Grid>
                    <Grid item xs={6}>
                        <Menu />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default Header;