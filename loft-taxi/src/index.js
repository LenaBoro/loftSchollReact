import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import createAppStore from './store/store'
//style
import {theme} from "loft-taxi-mui-theme"; // Импортируем саму тему
import {MuiThemeProvider} from "@material-ui/core/styles";
import './scss/index.scss';

const store = createAppStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <MuiThemeProvider theme={theme}>
                <App/>
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
