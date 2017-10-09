import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import {expression1} from './reducers/index.js'
import { Provider } from 'react-redux';

export const store = createStore(
    reducer,
    applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
  ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
);

