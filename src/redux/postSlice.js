import { createSlice } from "@reduxjs/toolkit";
const postSlice = createSlice({
    name: "post",
    initialState: {
        post: {
            myDetail: null,
            yourDetail: null,
            isFetching: false,
            error: false,
            success: false,
        },
    },
    reducers: {
        registerPostStart: (state) => {
            state.post.isFetching = true;
        },
        registerPostSuccess: (state) => {
            state.post.isFetching = false;
            state.post.error = false;
            state.post.success = true;
        },
        registerPostFailed: (state) => {
            state.post.isFetching = false;
            state.post.error = true;
            state.post.success = false;
        },
        getPostStart: (state) => {
            state.post.isFetching = true;
        },
        getPostSuccess: (state, action) => {
            state.post.isFetching = false;
            state.post.myDetail = action.payload;
            state.post.success = true;
        },
        getPostFailed: (state) => {
            state.post.isFetching = false;
            state.post.error = true;
        },
        yourPostStart: (state) => {
            state.post.isFetching = true;
        },
        yourPostSuccess: (state, action) => {
            state.post.isFetching = false;
            state.post.yourDetail = action.payload;
            state.post.success = true;
        },
        yourPostFailed: (state) => {
            state.post.isFetching = false;
            state.post.error = true;
        },
    },
});

export const {
    registerPostStart,
    registerPostSuccess,
    registerPostFailed,
    getPostStart,
    getPostSuccess,
    getPostFailed,
    yourPostStart,
    yourPostSuccess,
    yourPostFailed
} = postSlice.actions;

export default postSlice.reducer;
