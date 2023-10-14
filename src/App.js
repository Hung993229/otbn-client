import "./App.css";
import Header from "./GiaoDienChung/Header";
import Nav from "./GiaoDienChung/Nav";
import KetBan from "./KetBan/KetBan";
import MiniGame from "./MiniGame/MiniGame";
import Instruct from "./HuongDan/Instruct";
import ThongTinCaNhan from "./ThongTinCaNhan/ThongTinCaNhan";
import FormRegister from "./Tao Thong Tin/FormRegister";
import DangNhap from "./DangNhap/DangNhap";
import DangKi from "./DangKi/DangKi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuanLyUser from "./QuanLyUser/QuanLyUser";
function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Nav />
                <Routes>
                    <Route exact path="/ket-ban" element={<KetBan />} />
                    <Route exact path="/mini-game" element={<MiniGame />} />
                    <Route exact path="/huong-dan" element={<Instruct />} />
                    <Route exact path="/ca-nhan" element={<ThongTinCaNhan />} />
                    <Route
                        exact
                        path="/tao-thong-tin"
                        element={<FormRegister />}
                    />
                    <Route exact path="/dang-ki" element={<DangKi />} />
                    <Route exact path="/dang-nhap" element={<DangNhap />} />
                    <Route
                        exact
                        path="/quan-ly-user"
                        element={<QuanLyUser />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
