import { useEffect } from "react";
import "./QuanLyUser.scss";
import {
    getAllUsers,
    deleteUser,
    yourPost,
    updatePost,
} from "../redux/apiRequest";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAxios } from "../createInstance";
import { loginSuccess } from "../redux/authSlice";
import { useState } from "react";

const QuanLyUser = () => {
    const user = useSelector((state) => state.auth.login.currentUser);
    const userList = useSelector((state) => state.users.users?.allUsers);
    const msg = useSelector((state) => state.users?.msg);
    const allPosts = useSelector((state) => state.post?.post.allPosts);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let axiosJWT = createAxios(user, dispatch, loginSuccess);
    const yourDetail = useSelector((state) => state.post.post?.yourDetail);
    const [suaPost, setsuaPost] = useState();

    const handleDelete = (id) => {
        deleteUser(user?.accessToken, dispatch, id, axiosJWT);
    };

    useEffect(() => {
        if (!user) {
            navigate("/dang-nhap");
        }
        if (user?.accessToken) {
            getAllUsers(user?.accessToken, dispatch, axiosJWT);
        }
    }, [user, dispatch]);
    const handleThongTinUser = (id) => {
        yourPost(id, dispatch);
    };
    const handleSuaVaiTroUser = () => {
        const newPost = {
            vaiTro: 0,
        };
        const id = yourDetail._id;
        updatePost(newPost, id, dispatch, setsuaPost);
    };
    const handleSuaVaiTroBanHang = () => {
        const newPost = {
            vaiTro: 1,
        };
        const id = yourDetail._id;
        updatePost(newPost, id, dispatch, setsuaPost);
    };
    const handleSuaVaiTroQuanLy = () => {
        const newPost = {
            vaiTro: 2,
        };
        const id = yourDetail._id;
        updatePost(newPost, id, dispatch, setsuaPost);
    };

    return (
        <main className="home-container">
            <div>
                <div className="home-title">Tất Cả Tài Khoản</div>
                <div className="home-role">
                    {`Your role: ${user?.admin ? `Admin` : `User`}`}
                </div>
                <div className="home-userlist">
                    {userList?.map((user) => {
                        return (
                            <div className="user-container" key={user._id}>
                                <div
                                    className="home-user"
                                    onClick={()=>handleThongTinUser(user._id)}
                                >
                                    {user.username}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div>
                    {yourDetail && yourDetail.length !== 0 ? (
                        <div>
                            <div>{yourDetail?.hoTen}</div>
                            <div>
                                {+yourDetail?.vaiTro === 0 && <div>User</div>}
                            </div>
                            <div>
                                {+yourDetail?.vaiTro === 1 && (
                                    <div>Ban Hang</div>
                                )}
                            </div>
                            <div>
                                {+yourDetail?.vaiTro === 2 && (
                                    <div>Quan Ly</div>
                                )}
                            </div>
                            <div>Sửa Vai Trò</div>
                            <div>
                                <button onClick={handleSuaVaiTroUser}>
                                    User
                                </button>
                                <button onClick={handleSuaVaiTroBanHang}>
                                    Ban Hang
                                </button>
                                <button onClick={handleSuaVaiTroQuanLy}>
                                    Quan Ly
                                </button>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </main>
    );
};
export default QuanLyUser;
