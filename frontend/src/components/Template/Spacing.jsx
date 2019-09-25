import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Background from '../../assets/img/fbb.jpg';
import BgFiller from '../../assets/img/bg_main.gif';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        top:0 ,left:0, right:0,
        marginTop: 100,
        flexGrow: 1,
        backgroundImage: `url(${BgFiller})`,
        textAlign: 'center',
        height: 400,
        overflow: 'hidden',
        perspective: '100px',
        top: 0,
        zIndex: -99,
        '&:after': {
            content: '',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            transform: "translateZ(-1px) scale(1.5)",

        }
    },
    image: {
        height: 400, //fix it
        perspective: '100px',
    },
}));

const Spacing = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img src={Background} className={classes.image}/>
        </div>
    );
};

export default Spacing;