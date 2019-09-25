import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Header from './Header';

const useStyles = makeStyles(theme => ({
    root: {
        flex: 'grow',
    },
}));

const Template = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            
            {props.children}
        </div>
    );
};

export default Template;