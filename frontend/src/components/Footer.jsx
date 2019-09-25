import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}));

const Footer = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1>Footer</h1>
        </div>
    );
};

export default Footer;