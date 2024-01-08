export const AuthReducer = (state = {}, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isLogged: true,
                isLoading: false,
                user: action.payload.user,
            };

        case "LOGOUT":
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
