import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
/*
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import app from './reducers';
*/

//const store = createStore(app);

const root = document.getElementById('root');

ReactDOM.render(
    //<Provider store={store}>
        <App />
    /*</Provider>*/,
    root
);
registerServiceWorker();
