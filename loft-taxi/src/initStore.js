import {createStore} from 'redux'

export const initStore = () => {

    const rootReducer = (state = {isLoggedIn: false}, action) => {

        switch (action.type) {
            case "LOGIN":
                return {isLoggedIn: true};
            case "LOGOUT":
                return {isLoggedIn: false};
            default :
                return state;
        }
    };
    return createStore(rootReducer);
};