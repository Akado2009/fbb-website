import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: 50,
    },
    link: {
        color: '#000',
        marginBottom: 10,
    },
    typography: {
        marginBottom: 10,
    },
}));

const renderTypography = (boldText, normalText, classes) => {
    return (
        <Typography
            variant={"body1"}
            className={classes.typography}
        >
            <strong>{boldText}:</strong> {normalText}
        </Typography>
    );
};


const Info = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            {renderTypography("Почтовый адрес", "119234, г. Москва, ГСП-1, Ленинские горы МГУ 1, стр. 73, Факультет биоинженерии и биоинформатики, комната 433.", classes)}
            {renderTypography("Электронная почта", <a href={"mailto:bioeng@genebee.msu.ru"} className={classes.link}>bioeng@genebee.msu.ru</a>, classes)}
            {renderTypography("Проезд от метро \"Университет\"", "тролл. 34, 34к, авт. 1, 47, 67, 103, 111, 113, 130, 187, 260, 470, 487, 845, 661 до остановки «Менделеевская улица», 15 мин.", classes)}
            <a href={"https://yandex.ru/maps/213/moscow/?mode=routes&rtext=55.693458%2C37.534489~55.704793%2C37.519144&rtt=mt&rtm=atm&ll=37.527624%2C55.698503&z=15"} className={classes.link}>Схема проезда</a>
            {renderTypography("Проезд от метро \"Ломоносовский проспект\"", "выход № 1 на Мичуринский проспект (первый вагон из центра), далее направо вверх по ул. Колмогорова 360 м 4 мин.", classes)}
            <a href={"https://yandex.ru/maps/213/moscow/?mode=routes&rtext=55.706335%2C37.515164~55.704793%2C37.519144&rtt=mt&rtm=atm&ll=37.517141%2C55.705525&z=18"} className={classes.link}>Схема проезда</a>
        </div>
    );
};

export default Info;