import { useReducer } from "react";
import { AuthContext } from "../context/authContext";
import { AuthReducer } from "../reducers/AuthReducer";
import { axiosInstance } from "../config/axiosInstance";
import { types } from "../types/types";

const initialState = {
    isLoading: true,
    isLogged: false,
    user: {
        username: null,
        email: null,
    },
};
export default function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const login = async (username, password) => {
        const { data } = await axiosInstance.post("/auth/login", {
            username,
            password,
        });
        console.log(username, password);

        dispatch({
            type: types.auth.login,
            payload: {
                user: data,
            },
        });
    };
    return (
        <AuthContext.Provider value={{ state, login }}>
            {children}
        </AuthContext.Provider>
    );
}
