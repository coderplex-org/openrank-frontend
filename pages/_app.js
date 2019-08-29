import App from 'next/app';
import React from 'react';
import withReduxStore from '../redux/lib/with-redux-store';
import { Provider } from 'react-redux';

class MyApp extends App{
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);