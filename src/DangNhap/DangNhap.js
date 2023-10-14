import "./DangNhap.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../redux/apiRequest";
import { useDispatch } from "react-redux";
const DangNhap = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const user = {
            username: username,
            password: password,
        };
        loginUser(user, dispatch, navigate);
    };
    return (
        <section className="login-container">
            <div className="login-title"> ĐĂNG NHẬP</div>
            <form onSubmit={handleLogin}>
                <label>Sô Điện Thoại</label>
                <input
                    type="text"
                    placeholder="Nhập số điện thoại"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label>Mật Khẩu</label>
                <input
                    type="password"
                    placeholder="Nhập mật khẩu"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="btn btn-success">
                    Đăng Nhập
                </button>
            </form>
            <div className="login-register"> Nếu chưa có tài khoản? </div>
            <NavLink className="login-register-link" to="/dang-ki">
                Đăng Kí Ngay
            </NavLink>
        </section>
    );
};
export default DangNhap;
