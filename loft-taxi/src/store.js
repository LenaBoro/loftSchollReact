import {createStore, compose, applyMiddleware} from 'redux'
import {fetchLoginUserMiddlewear} from './components/auth/middlewares';

const createAppStore = () => {
    const rootReducer = (state = {isLoggedIn: false}, action) => {

        switch (action.type) {
            case "LOGIN":
                return {isLoggedIn: true};
            case "LOGOUT":
                return {isLoggedIn: false};
            case "SINGIN":
                return {isLoggedIn: true};
            default :
                return state;
        }
    };
    const store = createStore(
        rootReducer,
        compose(applyMiddleware(fetchLoginUserMiddlewear),
            window.__REDUX_DEVTOOLS_EXTENSION__ ?
                window.__REDUX_DEVTOOLS_EXTENSION__()
                : noop => noop,
        )
    );
    return store;
};
export default createAppStore;



