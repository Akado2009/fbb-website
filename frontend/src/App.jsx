import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Template from './components/Template';
import Main from './pages/Main';


const useStyles = makeStyles(theme => ({
    root: {
        margin: '0 auto',
        height: 2000,
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
        fontFamily: "Verdana",
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
                    </Template>
                </MuiThemeProvider>
            </Router>
        </div>
    )
};

export default App;