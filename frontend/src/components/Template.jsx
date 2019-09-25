import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Header from './Header';
import Spacing from './Spacing';
import PaperWrapper from './PaperWrapper';
import Footer from './Footer';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}));

const Template = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <Spacing />
            <PaperWrapper>
                {props.children}
            </PaperWrapper>
            <Footer />
        </div>
    );
};

export default Template;