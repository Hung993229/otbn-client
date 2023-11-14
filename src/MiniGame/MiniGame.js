import "./MiniGame.scss";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import currency from "currency.js";
import gold from "../assets/images/Gold.png";
import hopqua from "../assets/images/hopqua.jpg";
import hopqua2 from "../assets/images/hopqua2.jpg";
import hopqua3 from "../assets/images/hopqua3.jpg";
import alrblade from "../assets/images/alrblade.png";
import dell from "../assets/images/dell.jpg";
import ssa54 from "../assets/images/ssa54.jpeg";
import vocher from "../assets/images/vocher.png";
import gau from "../assets/images/gau.jpg";
import { updateStatusUser, getStatus, getPost } from "../redux/apiRequest";
const MiniGame = () => {
    const user = useSelector((state) => state.auth.login?.currentUser);
    const status = useSelector((state) => state.status.status.status?.status);
    const myDetail = useSelector((state) => state.post.post?.myDetail);
    const [quay, setquay] = useState(0);
    const dispatch = useDispatch();
    const [countDown, setCountDown] = useState(10);
    const [a, seta] = useState(0);
    const [b, setb] = useState(0);
    const [c, setc] = useState(0);
    const [d, setd] = useState(0);
    const [e, sete] = useState(0);
    const randomInteger = (min, max) => {
        const a = Math.floor(Math.random() * 9) + 1;
        seta(a);
        const b = Math.floor(Math.random() * 9) + 1;
        setb(b);
        const c = Math.floor(Math.random() * 8) + 1;
        setc(c);
        const d = Math.floor(Math.random() * 9) + 1;
        setd(d);
        const e = Math.floor(Math.random() * 9) + 1;
        sete(e);
    };
    useEffect(() => {
        if (user) {
            getStatus(user?._id, dispatch);
        }
    }, [user, dispatch]);
    useEffect(() => {
        if (user) {
            getPost(user?._id, dispatch);
        }
    }, [user, dispatch]);

    useEffect(() => {
        let timerId;

        if (countDown > 0) {
            timerId = setInterval(() => {
                setCountDown((countDown) => countDown - 1);
            }, 1000);
        } else {
            clearInterval(timerId);
        }

        return () => clearInterval(timerId);
    }, [countDown]);

    const handleBatDau = () => {
        setquay(0);
        const statusId = status?._id;
        if (statusId) {
            const cash = +status?.cash + +phanThuong;
            const statusUser = {
                cash: cash,
                user: user?._id,
            };
            const id = status?._id;
            updateStatusUser(statusUser, id, dispatch);
        }
    };
    const handleQuaySo = () => {
        setquay(1);
        const random = () => {
            setquay(2);
            randomInteger();
        };
        setTimeout(random, 10000);

        setCountDown(10);
    };

    const danhSachPhanThuong = [
        15, 27, 38, 42, 89, 28, 28, 32, 69, 53, 58, 36, 85, 46, 89, 49, 5, 15,
        12, 72, 22, 23, 60, 57, 64, 38, 22, 58, 65, 55, 19, 82, 25, 87, 85, 69,
        91, 37, 45, 84, 32, 56, 44, 68, 55, 65, 85, 95, 75, 999,
    ];

    const indexPhanThuong = Math.floor(Math.random() * 49) + 1;
    const phanThuong = danhSachPhanThuong[indexPhanThuong];
    const cash = currency(phanThuong, {
        symbol: "$",
        separator: ".",
        decimal: ",",
    })
        .format()
        .slice(0, -3);
    const date = new Date();
    const gio = date.getHours();
    const phut = date.getMinutes();
    // const gio = 20;
    // const phut = 15;
    return (
        <div className="containerMiniGame">
            <div className="container-quayso-phanthuong">
                <div className="soMayMan-PhanThuong">
                    <div className="SoMayMan">
                        <div className="tieude">QUAY SỐ MAY MẮN</div>
                        <div>
                            {quay === 0 ? (
                                <div className="soMayMan1">
                                    <div>0</div>
                                    <div>0</div>
                                    <div>0</div>
                                    <div>0</div>
                                    <div>0</div>
                                </div>
                            ) : (
                                <></>
                            )}

                            <div>
                                {quay === 1 ? (
                                    <div className="soMayMan2">
                                        <div className="spinner-10"></div>
                                        <div className="spinner-10"></div>
                                        <div className="spinner-10"></div>
                                        <div className="spinner-10"></div>
                                        <div className="spinner-10"></div>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                            <div>
                                {quay === 2 ? (
                                    <div className="soMayMan1">
                                        <div>{a}</div>
                                        <div>{b}</div>
                                        <div>{c}</div>
                                        <div>{d}</div>
                                        <div>{e}</div>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="phanThuong">
                        <div className="tieude">PHẦN QUÀ MAY MẮN</div>
                        <div>
                            <div>
                                {quay === 0 ? (
                                    <div>
                                        <div className="phanThuong1">
                                            <div>
                                                <img
                                                    src={hopqua2}
                                                    alt="timtim"
                                                    className="phanThuong1HopQua"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                            <div>
                                {quay === 1 ? (
                                    <div>
                                        <div className="phanThuong2">
                                            <div className="spinner-10"></div>
                                            <div className="spinner-10"></div>
                                            <div className="spinner-10"></div>
                                            <div className="spinner-10"></div>
                                            <div className="spinner-10"></div>
                                        </div>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                            <div>
                                {quay === 2 ? (
                                    <div className="phanThuong3">
                                        <div className="phanThuongcash">
                                            <div>{cash}</div>
                                            <img
                                                src={gold}
                                                className="gold1"
                                                alt="timtim"
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nutQuaySo">
                    {(gio === 20) & (phut < 16) & (phut > 0) ||
                    (gio === 20) & (phut < 16) & (phut === 0) ? (
                        <div>
                            <div>
                                {quay === 0 ? (
                                    <button
                                        className="quaySo"
                                        onClick={handleQuaySo}
                                    >
                                        Quay Số
                                    </button>
                                ) : (
                                    <></>
                                )}
                            </div>
                            <div>
                                {quay === 1 ? (
                                    <button className="quaySo">
                                        <div>Đếm Ngược</div>
                                        <div>{countDown}</div>
                                    </button>
                                ) : (
                                    <></>
                                )}
                            </div>
                            <div>
                                {quay === 2 ? (
                                    <div>
                                        <button
                                            className="quaySo"
                                            onClick={handleBatDau}
                                        >
                                            Nhận Quà
                                        </button>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                    ) : (
                        <button className="quaySo2">
                            <div>Mở Quay Số</div>
                            <div>20h-20h15</div>
                        </button>
                    )}
                </div>
            </div>
            <h2>A. Giải Thưởng</h2>
            <div className="danhSachGiaiThuong">
                <div className="Danhmuc">
                    <div className="hang1">Danh Sách</div>
                    <div className="hang1">Mã Trúng Thưởng</div>
                    <div className="hang1">Giải Thưởng</div>
                </div>
                <div className="danhSach">
                    <div className="hang2 tenGiai">Giải Đặc Biệt</div>
                    <div className="hang2 sotrung">
                        99999 <br /> (1 Mã Trúng Thưởng Duy Nhất)
                    </div>
                    <div className="hang2">
                        <img
                            src={alrblade}
                            className="tengiaiThuong"
                            alt="timtim"
                        />
                        <div>
                            Xe Máy Honda AirBlade 150 2023 <br />
                            Trị Giá 55.000.000đ
                        </div>
                    </div>
                </div>
                <div className="danhSach">
                    <div className="hang2 tenGiai">Giải Nhất</div>
                    <div className="hang2 sotrung">
                        x9999 9999x <br /> (20 Mã Trúng Thưởng)
                    </div>
                    <div className="hang2">
                        <img
                            src={dell}
                            className="tengiaiThuong"
                            alt="timtim"
                        />
                        <div>
                            Laptop Dell Inspiron 15 3520 <br /> Trị Giá
                            15.000.000 Đồng
                        </div>
                    </div>
                </div>
                <div className="danhSach">
                    <div className="hang2 tenGiai">
                        Giải Nhì <br />
                    </div>
                    <div className="hang2 sotrung">
                        xx999 x999x 999xx <br /> (300 Mã Trúng Thưởng)
                    </div>
                    <div className="hang2">
                        <img
                            src={ssa54}
                            className="tengiaiThuong"
                            alt="timtim"
                        />
                        <div>
                            Điện Thoại Sam Sung Galaxy A54 5G
                            <br />
                            Trị Giá 9.000.000đ
                        </div>
                    </div>
                </div>
                <div className="danhSach">
                    <div className="hang2 tenGiai">Giải khuyến Khích</div>
                    <div className="hang2 sotrung">
                        Số Ngâu Nhiên <br /> (Hàng Vạn Mã Trúng Thưởng)
                    </div>
                    <div className="hang2">
                        <div>
                            <img
                                src={vocher}
                                className="tengiaiThuong"
                                alt="timtim"
                            />
                        </div>

                        <div>
                            Rất nhiều phần quà là Gold, <br /> hiện vật hoặc
                            phiếu mua hàng!
                        </div>
                    </div>
                </div>
            </div>
            <div className="huongDanMiniGame">
                <h2>B. Hướng Dẫn</h2>

                <p>
                    1. Thời Gian Quay Số: 20h - 20h15 hàng ngày <br />
                    2. Người Tham Gia: Tất cả thành viên sau khi đã cập nhật
                    thông tin cá nhân sẽ được nhận ngẫu nhiên 5.000 Gold -
                    100.000 Gold và có thể tham gia Quay Số May Mắn!
                    <br />
                    3. Nhận Thưởng: <br /> - Phần Thưởng là hiện vật được nhận
                    thưởng trong không quá 30 ngày. <br />
                    - Phần thưởng là Gold thì được cộng ngay vào tài khoản Gold.
                    <br />- Gold có thể dùng để mua hàng trong mục Shopping
                    (1Gold = 1Vnđ)
                </p>
                {myDetail && (myDetail.length !== 0) ? (
                    <div>
                        <a href={`https://yeuai.online/tao-thong-tin`}>
                            <button className="capnhatthongtin">
                                Cập Nhật Thông Tin
                            </button>
                        </a>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};
export default MiniGame;
