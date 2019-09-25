import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Info from '../components/Contacts/Info';
import Map from '../components/Contacts/Map';
import Links from '../components/Contacts/Links';

import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: 30,
    },
}));

const Contacts = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography
                variant={"h4"}
            >
                Контакты
            </Typography>
            <Info />
            <br />
            <Map />
            <Links />
        </div>
    );
};

export default Contacts;