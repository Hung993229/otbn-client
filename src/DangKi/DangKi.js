import "./DangKi.scss";
const DangKi = () => {
    return (
        <section className="register-container">
            <div className="register-title"> ĐĂNG KÍ </div>
            <form onSubmit="">
                <label>Số Điện Thoại</label>
                <input type="text" placeholder="Nhập số điện thoại" />
                <label>Mật Khẩu</label>
                <input type="text" placeholder="Nhập mật khẩu" />
                <label>Nhập Lại Mật Khẩu</label>
                <input type="password" placeholder="Nhập mật khẩu" />
                <button type="submit"> Tạo Tài Khoản </button>
            </form>
        </section>
    );
};
export default DangKi;
