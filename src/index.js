import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import "./media.scss";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers/index';
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}>
    <Router basename="/weather"><App /></Router>
</Provider>
    , document.getElementById('root'));

