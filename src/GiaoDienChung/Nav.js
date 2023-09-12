import "./Nav.scss";
import { NavLink } from "react-router-dom";
const Nav = () => {
    return (
        <>
            <div className="container-nav">
                <NavLink activeClassName="active1" to="/ket-ban" exact>
                    Kết Bạn
                </NavLink>
                <NavLink activeClassName="active1" to="/mini-game">
                    Mini Game
                </NavLink>
                <NavLink activeClassName="active1" to="/huong-dan">
                    Hướng Dẫn
                </NavLink>
                <NavLink activeClassName="active1" to="/ca-nhan">
                    Cá Nhân
                </NavLink>
                <NavLink activeClassName="active1" to="/dang-ki">
                    Dang Ki
                </NavLink>
                <NavLink activeClassName="active1" to="/dang-nhap">
                    Dang Nhap
                </NavLink>
                <NavLink activeClassName="active1" to="/tao-thong-tin">
                    Tao Thong Tin
                </NavLink>
            </div>
        </>
    );
};
export default Nav;
