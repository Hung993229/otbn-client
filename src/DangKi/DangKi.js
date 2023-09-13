import "./DangKi.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../redux/apiRequest";

const DangKi = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        const newUser = {
            email: email,
            password: password,
            username: username,
        };
        registerUser(newUser, dispatch, navigate);
    };
    return (
        <section className="register-container">
            <div className="register-title"> ĐĂNG KÍ </div>
            <form onSubmit={handleRegister}>
                <label>Số Điện Thoại</label>
                <input
                    type="text"
                    placeholder="Nhập số điện thoại"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label>Mật Khẩu</label>
                <input
                    type="text"
                    placeholder="Nhập mật khẩu"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Nhập Lại Mật Khẩu</label>
                <input
                    type="password"
                    placeholder="Nhập mật khẩu"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit"> Tạo Tài Khoản </button>
            </form>
        </section>
    );
};
export default DangKi;
