import App from 'next/app';
import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import withReduxStore from '../redux/lib/with-redux-store';
import { Provider } from 'react-redux';
import theme from '../src/theme';

class MyApp extends App{
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Provider store={reduxStore}>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                    <Component {...pageProps} />
                </Provider>
            </ThemeProvider>
        </React.Fragment>
    );
  }
}

export default withReduxStore(MyApp);