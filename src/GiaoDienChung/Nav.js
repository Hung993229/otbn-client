import "./Nav.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/apiRequest";
import { createAxios } from "../createInstance";
import { logOutSuccess } from "../redux/authSlice";

const Nav = () => {
    const user = useSelector((state) => state.auth.login.currentUser);
    
    const accessToken = user?.accessToken;
    const id = user?._id;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let axiosJWT = createAxios(user, dispatch, logOutSuccess);

    const handleLogout = () => {
        logOut(dispatch, id, navigate, accessToken, axiosJWT);
    };
    return (
        <>
            <div className="container-nav">
                {user ? (
                    <>
                        <NavLink className="active1" to="/ket-ban" exact>
                            Kết Bạn
                        </NavLink>
                        <NavLink className="active1" to="/mini-game">
                            Mini Game
                        </NavLink>
                        <NavLink className="active1" to="/huong-dan">
                            Hướng Dẫn
                        </NavLink>
                        <NavLink className="active1" to="/ca-nhan">
                            Cá Nhân
                        </NavLink>
                        <NavLink className="active1" to="/quan-ly-user">
                            Quản Lý user
                        </NavLink>
                        {/* <NavLink className="active1" to="/tao-thong-tin">
                            Tao Thong Tin
                        </NavLink> */}
                        <NavLink
                            className="active1"
                            to="/dang-xuat"
                            onClick={handleLogout}
                        >
                            Dang Xuat
                        </NavLink>
                    </>
                ) : (
                    <>
                        <NavLink className="active1" to="/dang-ki">
                            Dang Ki
                        </NavLink>
                        <NavLink className="active1" to="/dang-nhap">
                            Dang Nhap
                        </NavLink>
                    </>
                )}
            </div>
        </>
    );
};
export default Nav;
