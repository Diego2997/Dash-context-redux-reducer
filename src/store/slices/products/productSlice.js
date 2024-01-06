import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    isLoading: true,
};
export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload.products;
            state.isLoading = false;
        },
    },
});

export const { setProducts } = productSlice.actions;
