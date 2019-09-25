import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import MitoTech from '../../assets/img/logo_mitotech.gif';
import Belozersky from '../../assets/img/logo_beloz.gif';
import MBC from '../../assets/img/logo_mbc.gif';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    image: {
        marginRight: 50,
        height: 40,
    },
    link: {

    }
}));

const GetImageWithLink = (img, link, classes) => {
    return (
        <a href={link} className={classes.link} target={"_blank"}>
            <img src={img} className={classes.image} />
        </a>
    );
};

const Compoanies = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            {GetImageWithLink(MitoTech, "https://skq.one/", classes)}
            {GetImageWithLink(Belozersky, "http://www.genebee.msu.ru/", classes)}
            {GetImageWithLink(MBC, "http://biocentr.msu.ru/", classes)}
        </div>
    );
};

export default Compoanies;