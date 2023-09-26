import axios from "axios";
import {
    loginFailed,
    loginStart,
    loginSuccess,
    registerFailed,
    registerStart,
    registerSuccess,
    logOutFailed,
    logOutStart,
    logOutSuccess,
} from "./authSlice";
import {
    deleteUserFailed,
    deleteUsersSuccess,
    deleteUserStart,
    getUsersFailed,
    getUsersStart,
    getUsersSuccess,
} from "./userSlice";
import {
    registerPostStart,
    registerPostSuccess,
    registerPostFailed,
    getPostStart,
    getPostSuccess,
    getPostFailed,
    yourPostStart,
    yourPostSuccess,
    yourPostFailed,
} from "./postSlice";
export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("/v1/auth/login", user);
        dispatch(loginSuccess(res.data));
        navigate("/ket-ban");
    } catch (err) {
        dispatch(loginFailed());
    }
};
export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        await axios.post("/v1/auth/register", user);
        dispatch(registerSuccess());
        navigate("/dang-nhap");
    } catch (err) {
        dispatch(registerFailed());
    }
};
export const getAllUsers = async (accessToken, dispatch, axiosJWT) => {
    dispatch(getUsersStart());
    try {
        const res = await axiosJWT.get("/v1/user", {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(getUsersSuccess(res.data));
    } catch (err) {
        dispatch(getUsersFailed());
    }
};
export const deleteUser = async (accessToken, dispatch, id, axiosJWT) => {
    dispatch(deleteUserStart());
    try {
        const res = await axiosJWT.delete(`/v1/user/${id}`, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(deleteUsersSuccess(res.data));
    } catch (err) {
        dispatch(deleteUserFailed(err.response.data));
    }
};
export const logOut = async (dispatch, id, navigate, accessToken, axiosJWT) => {
    dispatch(logOutStart());
    try {
        await axiosJWT.post("/v1/auth/logout", id, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(logOutSuccess());
        navigate("/dang-nhap");
    } catch (err) {
        dispatch(logOutFailed());
    }
};
export const registerPost = async (post, dispatch, navigate) => {
    dispatch(registerPostStart());
    try {
        await axios.post("/v1/post/add-post", post);
        dispatch(registerPostSuccess());
        navigate("/ca-nhan");
    } catch (err) {
        dispatch(registerPostFailed());
    }
};

export const getPost = async (userId, dispatch) => {
    dispatch(getPostStart());
    try {
        const res = await axios.get(`/v1/post/${userId}`);
        dispatch(getPostSuccess(res.data));
    } catch (err) {
        dispatch(getPostFailed());
    }
};
export const yourPost = async (yourId, dispatch) => {
    dispatch(yourPostStart());
    try {
        const res = await axios.get(`/v1/post/your-post/${yourId}`);
        dispatch(yourPostSuccess(res.data));
    } catch (err) {
        dispatch(yourPostFailed());
    }
};
