import "./App.css";
import Header from "./GiaoDienChung/Header";
import Nav from "./GiaoDienChung/Nav";
import YourDetail from "./KetBan/YourDetail";
import MiniGame from "./MiniGame/MiniGame";
import Instruct from "./HuongDan/Instruct";
import MyDetail from "./ThongTinCaNhan/MyDetail";
import FormRegister from "./Tao Thong Tin/FormRegister";
import DangNhap from "./DangNhap/DangNhap";
import DangKi from "./DangKi/DangKi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Nav />
                <Routes>
                    <Route path="/ket-ban" element={<YourDetail />} />
                    <Route path="/mini-game" element={<MiniGame />} />
                    <Route path="/huong-dan" element={<Instruct />} />
                    <Route path="/ca-nhan" element={<MyDetail />} />
                    <Route path="/tao-thong-tin" element={<FormRegister />} />
                    <Route path="/dang-ki" element={<DangKi />} />
                    <Route path="/dang-nhap" element={<DangNhap />} />
                    {/* <Route path="/dang-xuat" element={<FormRegister />} /> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
