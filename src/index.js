import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker';
import {createStore, compose, applyMiddleware} from "redux";
import reducer from "./store/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware()
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
const rootElement = document.getElementById('root')

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    </React.StrictMode>,
    rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
