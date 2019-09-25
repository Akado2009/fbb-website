import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import Button from '@material-ui/core/Button';
import MenuMaterial from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
        borderRadius: 5,
    },
})(props => (
    <MenuMaterial
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles(theme => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

const useStyles = makeStyles(theme => ({
    root: {
        flex: 'grow'
    },
    button: {
        padding: 20,
        backgroundColor: 'transparent',
        color: theme.palette.primary.contrast,
    },
    leftIcon: {
        marginRight: theme.spacing(1),
    },
    iconSmall: {
        fontSize: 20,
        color: theme.palette.primary.contrast,
    },
}));

const MenuButton = (text, classes) => {
    return (
        <Button variant={"text"} size={"medium"} className={classes.button}>
            {text}
        </Button>
    );
};
const Menu = () => {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            {MenuButton("О факультете", classes)}

            <Button 
                variant={"text"} 
                size={"medium"} 
                className={classes.button}
                onClick={handleClick}
            >
                Информация
            </Button>
            <StyledMenu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem>
                    <ListItemText primary={"Школьникам"} />
                </StyledMenuItem>
                <Divider variant={"middle"} />
                <StyledMenuItem>
                    <ListItemText primary={"Поступающим"} />
                </StyledMenuItem>
                <Divider variant={"middle"} />
                <StyledMenuItem>
                    <ListItemText primary={"Студентам"} />
                </StyledMenuItem>
                <Divider variant={"middle"} />
                <StyledMenuItem>
                    <ListItemText primary={"Аспирантам"} />
                </StyledMenuItem>
            </StyledMenu>
            {MenuButton("Наука", classes)}
            {MenuButton("Контакты", classes)}
        </div>
    );
};

export default Menu;