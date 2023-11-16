import { createSlice } from "@reduxjs/toolkit";
const shopSlice = createSlice({
    name: "shop",
    initialState: {
        shop: {
            shop: null,
            isFetching: false,
            error: false,
            success: false,
            allshop: null,
        },
    },
    reducers: {
        logOutSuccessShop: (state) => {
            state.shop.shop= null;
            state.shop.isFetching= false;
            state.shop.error= false;
            state.shop.success= false;
            state.shop.allshop= null;
        },
        updateshopStart: (state) => {
            state.shop.isFetching = true;
        },
        updateshopSuccess: (state, action) => {
            state.shop.isFetching = false;
            state.shop.shop = action.payload;
            state.shop.success = true;
        },
        updateshopFailed: (state) => {
            state.shop.isFetching = false;
            state.shop.error = true;
        },

        registershopStart: (state) => {
            state.shop.isFetching = true;
        },
        registershopSuccess: (state, action) => {
            state.shop.isFetching = false;
            state.shop.error = false;
            state.shop.shop = action.payload;
            state.shop.success = true;
        },
        registershopFailed: (state) => {
            state.shop.isFetching = false;
            state.shop.error = true;
            state.shop.success = false;
        },
        getshopStart: (state) => {
            state.shop.isFetching = true;
        },
        getshopSuccess: (state, action) => {
            state.shop.isFetching = false;
            state.shop.allshop = action.payload;
            state.shop.success = true;
        },
        getshopFailed: (state) => {
            state.shop.isFetching = false;
            state.shop.error = true;
        },
        deleteshopStart: (state) => {
            state.shop.isFetching = true;
        },
        deleteshopSuccess: (state, action) => {
            state.shop.isFetching = false;
            state.shop.shop = action.payload;
            state.shop.success = true;
        },
        deleteshopFailed: (state) => {
            state.shop.isFetching = false;
            state.shop.error = true;
            state.shop.success = false;
        },
    },
});

export const {
    updateshopStart,
    updateshopSuccess,
    updateshopFailed,
    registershopStart,
    registershopSuccess,
    registershopFailed,
    getshopStart,
    getshopSuccess,
    getshopFailed,
    deleteshopStart,
    deleteshopSuccess,
    deleteshopFailed,
    logOutSuccessShop
} = shopSlice.actions;

export default shopSlice.reducer;
