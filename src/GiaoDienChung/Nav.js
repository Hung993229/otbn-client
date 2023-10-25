import "./Nav.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Fatimes from "react-icons/fa";

const Nav = () => {
    const user = useSelector((state) => state.auth.login.currentUser);
    return (
        <>
            <div className="container-nav">
                {user ? (
                    <>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active1" : ""
                            }
                            to="/ket-ban"
                        >
                            <div className="nav-detail">
                                <i className="fa-solid fa-people-group"></i>
                                <div>Hội FA</div>
                            </div>
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active1" : ""
                            }
                            to="/hom-thu"
                        >
                            <div>
                                <i className="fa-solid fa-envelope"></i>
                                <div>Hòm Thư</div>
                            </div>
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active1" : ""
                            }
                            to="/mini-game"
                        >
                            <div>
                                <i className="fa-solid fa-dice"></i>
                                <div> Mini Game</div>
                            </div>
                        </NavLink>

                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active1" : ""
                            }
                            to="/shop-online"
                        >
                            <div>
                                <i className="fa-solid fa-bag-shopping"></i>
                                <div>Shopping</div>
                            </div>
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active1" : ""
                            }
                            to="/huong-dan"
                        >
                            <div>
                                <i className="fa-solid fa-book-open-reader"></i>
                                <div> Hướng Dẫn</div>
                            </div>
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active1" : ""
                            }
                            to="/ca-nhan"
                        >
                            <div>
                                <i className="fa-solid fa-user"></i>
                                <div> Cá Nhân</div>
                            </div>
                        </NavLink>
                    </>
                ) : (
                    <>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active1" : ""
                            }
                            to="/dang-ki"
                        >
                            <div>
                                <i className="fa-solid fa-user-plus"></i>
                                <div> Đăng Kí</div>
                            </div>
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active1" : ""
                            }
                            to="/dang-nhap"
                        >
                            <div>
                                <i className="fa-solid fa-right-to-bracket"></i>
                                <div> Đăng Nhập</div>
                            </div>
                        </NavLink>
                    </>
                )}
            </div>
        </>
    );
};
export default Nav;
