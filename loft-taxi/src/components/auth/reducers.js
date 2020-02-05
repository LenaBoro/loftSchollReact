import {
    fetchLogin,
    fetchLogout
} from './actions';

const initialState = {
    isLoggedIn: false
};

 function authReducer(state = initialState, action) {
    switch (action.type) {
        case fetchLogin:
            return {
                ...state,
                isLoggedIn: true
            }
            break;
        case fetchLogout:
            return {
                ...state,
                isLoggedIn: false
            }
        default:
            // the dispatched action is not in this reducer, return the state unchanged
            return state;
    }
}
export default authReducer