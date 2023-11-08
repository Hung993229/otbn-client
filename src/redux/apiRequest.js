import axios from "./apiCustomize";
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
    updatePostStart,
    updatePostSuccess,
    updatePostFailed,
    getPostStart,
    getPostSuccess,
    getPostFailed,
    yourPostStart,
    yourPostSuccess,
    yourPostFailed,
    getAllPostsStart,
    getAllPostsSuccess,
    getAllPostsFailed,
} from "./postSlice";

import {
    updateStatusStart,
    updateStatusSuccess,
    updateStatusFailed,
    registerStatusStart,
    registerStatusSuccess,
    registerStatusFailed,
    getStatusStart,
    getStatusSuccess,
    getStatusFailed,
} from "./statusSlice";

import {
    updateyourStatusStart,
    updateyourStatusSuccess,
    updateyourStatusFailed,
    registeryourStatusStart,
    registeryourStatusSuccess,
    registeryourStatusFailed,
    getyourStatusStart,
    getyourStatusSuccess,
    getyourStatusFailed,
    deleteyourStatusStart,
    deleteyourStatusSuccess,
    deleteyourStatusFailed,
    deleteAllYourStatusStart,
    deleteAllYourStatusSuccess,
    deleteAllYourStatusFailed,
} from "./yourStatusSlice";
import {
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
} from "./shopSlice";

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("/v1/auth/login", user);
        dispatch(loginSuccess(res.data));
        navigate("/mini-game");
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
        const res = await axios.post("/v1/post/add-post", post);
        dispatch(registerPostSuccess(res.data));
        navigate("/ca-nhan");
    } catch (err) {
        dispatch(registerPostFailed());
    }
};

export const updatePost = async (newPost, id, dispatch, setsuaPost) => {
    dispatch(updatePostStart());
    try {
        const res = await axios.put(`/v1/post/${id}`, newPost);
        dispatch(updatePostSuccess(res.data));
        if (res) {
            setsuaPost(0);
        }
    } catch (err) {
        dispatch(updatePostFailed(err));
    }
};

export const getPost = async (id, dispatch) => {
    dispatch(getPostStart());
    try {
        const res = await axios.get(`/v1/post/${id}`);
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

export const getAllPosts = async (
    dispatch,
    gioiTinh2,
    tinhTrangHonNhan2,
    tonGiao2,
    thuNhap2,
    tuoiHop2,
    tuoiHop3,
    huyenDs,
    huyenQq
) => {
    dispatch(getAllPostsStart());
    try {
        const res = await axios.get(
            `/v1/post/?gioiTinh2=${gioiTinh2}&tinhTrangHonNhan2=${tinhTrangHonNhan2}&tonGiao2=${tonGiao2}&thuNhap2=${thuNhap2}&tuoiHop2=${tuoiHop2}&tuoiHop3=${tuoiHop3}&huyenDs=${huyenDs}&huyenQq=${huyenQq}
            `
        );
        dispatch(getAllPostsSuccess(res.data));
    } catch (err) {
        dispatch(getAllPostsFailed());
    }
};
export const updateStatusUser = async (statusUser, id, dispatch) => {
    dispatch(updateStatusStart());
    try {
        const res = await axios.put(`/v1/status/${id}`, statusUser);
        dispatch(updateStatusSuccess(res.data));
    } catch (err) {
        dispatch(updateStatusFailed(err.response.data));
    }
};
export const registerStatus = async (statusUser, dispatch) => {
    dispatch(registerStatusStart());
    try {
        const res = await axios.post("/v1/status/add-status", statusUser);
        dispatch(registerStatusSuccess(res.data));
    } catch (err) {
        dispatch(registerStatusFailed());
    }
};
export const getStatus = async (id, dispatch) => {
    dispatch(getStatusStart());
    try {
        const res = await axios.get(`/v1/status/${id}`);
        dispatch(getStatusSuccess(res.data));
    } catch (err) {
        dispatch(getStatusFailed());
    }
};

export const updateYourStatusUser = async (statusUser, id, dispatch) => {
    dispatch(updateyourStatusStart());
    try {
        const res = await axios.put(`/v1/your-status/${id}`, statusUser);
        dispatch(updateyourStatusSuccess(res.data));
    } catch (err) {
        dispatch(updateyourStatusFailed(err.response.data));
    }
};
export const registerYourStatus = async (statusUser, dispatch) => {
    dispatch(registeryourStatusStart());
    try {
        const res = await axios.post("/v1/your-status/add-status", statusUser);
        dispatch(registeryourStatusSuccess(res.data));
    } catch (err) {
        dispatch(registeryourStatusFailed());
    }
};
export const getYourStatus = async (id, dispatch) => {
    dispatch(getyourStatusStart());
    try {
        const res = await axios.get(`/v1/your-status/${id}`);
        dispatch(getyourStatusSuccess(res.data));
    } catch (err) {
        dispatch(getyourStatusFailed());
    }
};
export const deleteYourStatus = async (id, dispatch) => {
    dispatch(deleteyourStatusStart());
    try {
        const res = await axios.delete(`/v1/your-status/${id}`);
        dispatch(deleteyourStatusSuccess(res.data));
    } catch (err) {
        dispatch(deleteyourStatusFailed());
    }
};

export const deleteAllYourStatus = async (id, dispatch) => {
    dispatch(deleteAllYourStatusStart());
    try {
        const res = await axios.delete(`/v1/your-status//delete-many/${id}`);
        dispatch(deleteAllYourStatusSuccess(res.data));
    } catch (err) {
        dispatch(deleteAllYourStatusFailed());
    }
};

export const registerShop = async (newSanPham, dispatch) => {
    dispatch(registershopStart());
    try {
        const res = await axios.post("/v1/shop/add-shop", newSanPham);
        dispatch(registershopSuccess(res.data));
    } catch (err) {
        dispatch(registershopFailed());
    }
};
export const getShop = async (dispatch, huyenDs, huyenQq) => {
    dispatch(getshopStart());
    try {
        const res = await axios.get(
            `/v1/shop/?huyenDs=${huyenDs}&huyenQq=${huyenQq}`
        );
        dispatch(getshopSuccess(res.data));
    } catch (err) {
        dispatch(getshopFailed());
    }
};
export const deleteShop = async (id, dispatch) => {
    dispatch(deleteshopStart());
    try {
        const res = await axios.delete(`/v1/shop/${id}`);
        dispatch(deleteshopSuccess(res.data));
    } catch (err) {
        dispatch(deleteshopFailed());
    }
};
export const updateShop = async (statusUser, id, dispatch) => {
    dispatch(updateshopStart());
    try {
        const res = await axios.put(`/v1/shop/${id}`, statusUser);
        dispatch(updateshopSuccess(res.data));
    } catch (err) {
        dispatch(updateshopFailed(err.response.data));
    }
};
