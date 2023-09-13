import { useEffect } from "react";
import "./QuanLyUser.scss";
import { getAllUsers, deleteUser } from "../redux/apiRequest";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAxios } from "../createInstance";
import { loginSuccess } from "../redux/authSlice";

const QuanLyUser = () => {
    const user = useSelector((state) => state.auth.login.currentUser);
    const userList = useSelector((state) => state.users.users?.allUsers);
    const msg = useSelector((state) => state.users?.msg);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    let axiosJWT = createAxios(user, dispatch, loginSuccess);

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
    }, []);

    return (
        <main className="home-container">
            <div className="home-title">User List</div>
            <div className="home-role">
                {`Your role: ${user?.admin ? `Admin` : `User`}`}
            </div>
            <div className="home-userlist">
                {userList?.map((user) => {
                    return (
                        <div className="user-container" key={user._id}>
                            <div className="home-user">{user.username}</div>
                            <div
                                className="delete-user"
                                onClick={() => handleDelete(user._id)}
                            >
                                Delete
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="errorMsg">{msg}</div>
        </main>
    );
};
export default QuanLyUser;
