import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './pages/Main';


const useStyles = makeStyles(theme => ({
    root: {
        margin: '0 auto',
        paddingTop: 20,
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "75C4D1",
        },
        secondary: {
            main: "F9701B",
        },
    },
});

const App = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Router>
                <MuiThemeProvider theme={theme}>
                    <CSSBaseline />
                    <Header />
                    <Route exact path={"/"} component={Main} />
                </MuiThemeProvider>
            </Router>
        </div>
    )
};

export default App;