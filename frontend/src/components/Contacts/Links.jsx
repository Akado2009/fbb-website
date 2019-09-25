import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    dialogRoot: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.primary.main,
    },
    link: {
        color: '#000',
    },
}));

const DialogTitle = (props) => {
    const { children, classes, onClose } = props;

    return (
        <MuiDialogTitle disableTypography className={classes.dialogRoot}>
            <Typography variant={"h6"}>{children}</Typography>
            {onClose ? (
                <IconButton className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ): null}
        </MuiDialogTitle>
    );
};

const createElementWithOl = (name, elements, classes) => {
    console.log(elements)
    return (
        <div>
            <Typography
                variant={"h6"}
            >
                {name}
            </Typography>
            <ol>
                {
                    elements.map((el) => {
                        return (
                            <li><a href={el.link} className={classes.link} target={"_blank"} >{el.name}</a></li>
                        );
                    })
                }
            </ol>
        </div>
    );
};

const data = [
    {
        name: "Факультет",
        elements: [
            {
                name: "Официальный сайт ФББ МГУ им. М.В. Ломоносова",
                link: "http://www.fbb.msu.ru/",
            },
            {
                name: "Сервер компьютерного класса факультета",
                link: "http://kodomo.cmm.msu.su/",
            },
        ],
    },
    {
        name: "Университеты",
        elements: [
            {
                name: "Московский государственный университет им.М.В.Ломоносова",
                link: "http://www.msu.ru/",
            },
            {
                name: "Специализированный учебно-научный центр МГУ - школа им. А.Н. Колмогорова",
                link: "http://internat.msu.ru/",
            },
        ],
    },
    {
        name: "Научно-исследовательские институты",
        elements: [
            {
                name: "НИИ ФХБ им. А.Н. Белозерского",
                link: "http://www.genebee.msu.ru/",
            },
        ],
    },
    {
        name: "Центры",
        elements: [
            {
                name: "Международный учебно-научный биотехнологический центр МГУ",
                link: "http://biocentr.msu.ru/",
            },
        ],
    },
    {
        name: "Лаборатории",
        elements: [
            {
                name: "Лаборатория молекулярной биологии дрожжей",
                link: "http://yeastmolbiol.belozersky.msu.ru/",
            },
        ],
    },
    {
        name: "Дополнительное образование",
        elements: [
            {
                name: "Программа лекций по иммунологии, онкоиммунологии и раковым исследованиям",
                link: "http://www.oncoimmunology.ru/",
            },
        ],
    },
];

const Links = () => {

    const classes = useStyles();

    const [open, toggleOpen] = React.useState(false);

    const handleOpen = () => {
        toggleOpen(true);
    };

    const handleClose = () => {
        toggleOpen(false);
    };

    return (
        <div className={classes.root}>
            <Button
                variant={"text"}
                onClick={handleOpen}
            >
                Дополнительные ссылки
            </Button>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle onClose={handleClose} classes={classes}>
                    Дополнительные ссылки
                </DialogTitle>
                <DialogContent dividers>
                    {
                        data.map((section) => createElementWithOl(section.name, section.elements, classes))
                    }
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Links;