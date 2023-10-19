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
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active1" : ""
                            }
                            to="/ket-ban"
                        >
                            <div>
                                <i className="fi fi-rr-users"></i>
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
                                <i className="fi fi-rr-users"></i>
                                <div>Hòm Thư</div>
                            </div>
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active1" : ""
                            }
                            to="/mini-game"
                        >
                            Mini Game
                        </NavLink>

                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active1" : ""
                            }
                            to="/shop-online"
                        >
                            Shopping
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active1" : ""
                            }
                            to="/huong-dan"
                        >
                            Hướng Dẫn
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active1" : ""
                            }
                            to="/ca-nhan"
                        >
                            Cá Nhân
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
                            Dang Ki
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active1" : ""
                            }
                            to="/dang-nhap"
                        >
                            Dang Nhap
                        </NavLink>
                    </>
                )}
            </div>
        </>
    );
};
export default Nav;
