import { axiosInstance } from "../../../config/axiosInstance";
import { setProducts } from "./productSlice";

export const getAllProducts = () => {
    return async (dispatch) => {
        try {
            const urlProducts = "products";
            const { data } = await axiosInstance.get(urlProducts);
            const { products } = data;
            dispatch(setProducts({ products }));
        } catch (error) {
            console.log(error);
        }
    };
};
