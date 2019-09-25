import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';

const marginSide = 25;

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        // margin: '0 50px',
        borderRadius: 10,
        minHeight: 1024,
        marginTop: 500,
        marginLeft: marginSide,
        marginRight: marginSide,
    },
}));

const PaperWrapper = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={5} >
                {props.children}
            </Paper>
        </div>
    );
};

export default PaperWrapper;