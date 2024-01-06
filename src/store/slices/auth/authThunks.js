import { axiosInstance } from "../../../config/axiosInstance";
import { login, logout } from "./authSlice";
import Swal from "sweetalert2";

export const getLogin = (username, password) => {
    return async (dispatch, getState) => {
        try {
            const { data } = await axiosInstance.post("/auth/login", {
                username,
                password,
            });

            const newUser = {
                user: {
                    id: data.id,
                    username: data.username,
                    email: data.email,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    gender: data.gender,
                },
                token: data.token,
            };

            localStorage.setItem("token", JSON.stringify(newUser));

            dispatch(
                login({
                    user: {
                        id: data.id,
                        username: data.username,
                        email: data.email,
                        firstName: data.firstName,
                        lastName: data.lastName,
                        gender: data.gender,
                    },
                    token: data.token,
                })
            );
            Swal.fire({
                title: "Logueado correctamente",
                text: `Bienvenido/a ${data.username}`,
                icon: "success",
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const checkToken = () => {
    return (dispatch) => {
        const token = localStorage.getItem("token");
        const dataToken = JSON.parse(token);

        if (!token) {
            dispatch(logout());
        }

        dispatch(
            login({
                user: {
                    id: dataToken.user.id,
                    username: dataToken.user.username,
                    email: dataToken.user.email,
                    firstName: dataToken.user.firstName,
                    lastName: dataToken.user.lastName,
                    gender: dataToken.user.gender,
                },
                token: dataToken.token,
            })
        );
    };
};
