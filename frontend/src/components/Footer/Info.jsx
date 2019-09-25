import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}));

const Info = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography
                variant={"body"}
            >
                <strong>Телефон / Факс:</strong> +7 (495) 939-41-95
            </Typography>
            <br />
            <Typography 
                variant={"caption"}
            >
                © {new Date().getFullYear()} Факультет биоинженерии и биоинформатики
            </Typography>
            <br />
            <Typography
                variant={"caption"}
            >
                Московского Государственного Университета имени М.В.Ломоносова
            </Typography>
        </div>
    );
};

export default Info;