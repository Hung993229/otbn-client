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
import ShopOnline from "./Shop/ShopOnline";
import HomThu from "./KetBan/HomThu";
import { useSelector } from "react-redux";

function App() {
    const user = useSelector((state) => state.auth.login.currentUser);
    return (
        <Router>
            <div className="App">
                <Header className="header" />

                <Routes>
                    <Route
                        path="/ket-ban"
                        element={
                            <>
                                <KetBan />
                                <Nav />
                            </>
                        }
                    />
                    <Route
                        path="/mini-game"
                        element={
                            <>
                                <MiniGame />
                                <Nav />
                            </>
                        }
                    />
                    <Route
                        path="/huong-dan"
                        element={
                            <>
                                <Instruct />
                                <Nav />
                            </>
                        }
                    />
                    <Route
                        path="/ca-nhan"
                        element={
                            <>
                                <ThongTinCaNhan />
                                <Nav />
                            </>
                        }
                    />
                    <Route path="/tao-thong-tin" element={<FormRegister />} />
                    <Route path="/dang-ki" element={<DangKi />} />
                    <Route path="/dang-nhap" element={<DangNhap />} />
                    <Route path="/quan-ly-user" element={<QuanLyUser />} />
                    <Route
                        path="/shop-online"
                        element={
                            <>
                                <ShopOnline /> <Nav />
                            </>
                        }
                    />
                    <Route
                        path="/hom-thu"
                        element={
                            <>
                                <HomThu /> <Nav />
                            </>
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <>
                                <MiniGame />
                                <Nav />
                            </>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
