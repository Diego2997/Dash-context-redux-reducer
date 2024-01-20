import { types } from "../types/types";

export const AuthReducer = (state = {}, action) => {
    switch (action.type) {
        case types.auth.login:
            return {
                ...state,
                isLogged: true,
                isLoading: false,
                user: action.payload.user,
            };

        case types.auth.logout:
            return {
                ...state,
                isLogged: false,
                isLoading: false,
                user: null,
            };

        default:
            break;
    }
};
