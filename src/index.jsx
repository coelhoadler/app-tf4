import React from 'react';
import ReactDOM from 'react-dom';

import App from './main/app';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import homeReducer from './home/homeReducer'

const reducers = combineReducers({
    currentEvent: homeReducer
})

ReactDOM.render(
    <div className="container" style={ { marginTop: '1em' } }>
        <Provider store={createStore(reducers)}>
            <App />
        </Provider>
    </div>, document.querySelector("#app")
);