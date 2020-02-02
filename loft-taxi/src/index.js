import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {theme} from "loft-taxi-mui-theme"; // Импортируем саму тему
import {MuiThemeProvider} from "@material-ui/core/styles";
import {BrowserRouter} from 'react-router-dom';
import {initStore} from './initStore'

const store = initStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <MuiThemeProvider theme={theme}>
                <App/>
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
