import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Template from './components/Template/Template';
import Main from './pages/Main';
import Contacts from './pages/Contacts';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        margin: '0 auto',
        background: 'transparent',
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#75C4D1",
            contrast: "#FFF",
        },
        secondary: {
            main: "#F9701B",
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
    }
});

const App = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Router>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    <Template>
                        <Route exact path={"/"} component={Main} />
                        <Route path={"/contacts"} component={Contacts} />
                    </Template>
                </MuiThemeProvider>
            </Router>
        </div>
    )
};

export default App;