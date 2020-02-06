import {
    fetchLogin
} from './actions';

const initialState = {
    isLoggedIn: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case fetchLogin.toString():
            return {
                ...state,
                isLoggedIn: true
            };

        default:
            return state;
    }
}
