import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Background from '../assets/img/fbb.jpg';
import BgFiller from '../assets/img/bg_main.gif';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 100,
        flexGrow: 1,
        height: 400,
        backgroundImage: `url(${BgFiller})`,
        textAlign: 'center',
    },
    image: {
        height: 400, //fix it
    },
}));

const Spacing = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img src={Background} className={classes.image} />
        </div>
    );
};

export default Spacing;