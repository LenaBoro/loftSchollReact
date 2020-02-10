import {
    createStore,
    compose,
    applyMiddleware
} from 'redux'
import {
    fetchLoginUserMiddlewear,
    logoutMiddlewear,
    fetchSingInUserMiddlewear
} from '../modules/auth/middlewares';
import {loadState, saveState} from '../modules/localStorageState/localStorage'
import authReducer from './../modules/auth/reducers'
//const persistedState = loadState();
const createAppStore = () => {
    const store = createStore(
        authReducer,
       // persistedState,
        compose(
            applyMiddleware(
                fetchLoginUserMiddlewear,
                fetchSingInUserMiddlewear,
                logoutMiddlewear
            ),
            window.__REDUX_DEVTOOLS_EXTENSION__ ?
                window.__REDUX_DEVTOOLS_EXTENSION__()
                : noop => noop,
        )
    );
    return store;
};
export default createAppStore;

// store.subscribe(() => {
//     saveState({
//
//     });
// });
