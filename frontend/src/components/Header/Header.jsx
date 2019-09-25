import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Title from './Title';
import Menu from './Menu';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 100,
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: theme.palette.primary.main,
        borderRadius: 3,
    },
    grid: {
        padding: 7,
        verticalAlign: 'center',
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
                    <Grid item xs={8}>
                        <Title />
                    </Grid>
                    <Grid item xs={4}>
                        <Menu />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default Header;