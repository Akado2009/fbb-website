import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
        flex: 'grow'
    },
}));

const Menu = () => {

    const classes = useStyles();


    return (
        <div className={classes.root}>

        </div>
    );
};

export default Menu;