import "./Nav.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Nav = () => {
    const user = useSelector((state) => state.auth.login.currentUser);
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
                    </>
                ) : (
                    <>
                        <NavLink className="active1" to="/dang-ki">
                            Dang Ki
                        </NavLink>
                        <NavLink className="active1" to="/dang-nhap">
                            Dang Nhap
                        </NavLink>
                        <NavLink className="active1" to="/tao-thong-tin">
                            Tao Thong Tin
                        </NavLink>
                    </>
                )}
            </div>
        </>
    );
};
export default Nav;
