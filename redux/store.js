import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './reducers';

const middleware = applyMiddleware(promise, thunk, logger);

export default () => createStore(reducer, middleware);

// store.dispatch({type: 'CHANGE_NAME', payload: 'Will'});
// store.dispatch({type: 'CHANGE_AGE', payload: 36});
// store.dispatch({type: 'INC'});
// store.dispatch({type: 'DEC'});

/* THUNK
store.dispatch((dispatch) => {
  // dispatch some action
  // some http request with axios
})
 */