import "./DangNhap.scss";
import { NavLink } from "react-router-dom";
const DangNhap = () => {
    return (
        <section className="login-container">
            <div className="login-title"> ĐĂNG NHẬP</div>
            <form onSubmit="">
                <label>Sô Điện Thoại</label>
                <input type="text" placeholder="Nhập số điện thoại" />
                <label>Mật Khẩu</label>
                <input type="password" placeholder="Nhập mật khẩu" />
                <button type="submit" class="btn btn-success">
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
