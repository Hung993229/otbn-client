import "./HeaderShop.scss";
import bannerShop from "../assets/images/bannerShop.jpg";
import facebookLogo from "../assets/images/Facebook_Logo.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPost, getStatus } from "../redux/apiRequest";
const HeaderShop = (props) => {
    const { quanLyShop, setquanLyShop } = props;
    const user = useSelector((state) => state.auth.login?.currentUser);
    const [moihoptac, setmoihoptac] = useState(0);
    const myDetail = useSelector((state) => state.post.post?.myDetail);

    const dispatch = useDispatch();
    useEffect(() => {
        getStatus(user?._id, dispatch);
        getPost(user?._id, dispatch);
    }, [dispatch]);
    const handleQuanLyShop = () => {
        setquanLyShop(1);
    };
    const vaiTro = +myDetail?.vaiTro;
    const handlegetMydetail = () => {
        getPost(user?._id, dispatch);
    };
    return (
        <div className="container-header-shop">
            <div>
                <img src={bannerShop} alt="timtim" className="bannerShop" />
            </div>
            <div className="wecomeShop">
                --- CHÚC MỌI NGƯỜI SĂN SALE VUI VẺ! ---
            </div>
            <div className="quyDoi">Quy Đổi: 1Gold = 1 VNĐ</div>

            <div className="hoptac-sanpham">
                <button onClick={() => setmoihoptac(1)} className="moihoptac">
                    Mời Hợp Tác
                </button>
                {vaiTro === 0 || !vaiTro ? (
                    <button
                        className="themSanPham"
                        onClick={() => setmoihoptac(2)}
                    >
                        Thêm Sản Phẩm
                    </button>
                ) : (
                    <></>
                )}
                {vaiTro === 1 || vaiTro === 2 ? (
                    <button onClick={handleQuanLyShop} className="themSanPham">
                        Quản Lý Shop
                    </button>
                ) : (
                    <></>
                )}
            </div>

            {+moihoptac === 1 ? (
                <div>
                    <div>
                        Quý Đại Lý có Sản Phẩm Tốt, Giá Tốt mong muốn đăng bán
                        sản phẩm!
                    </div>
                    <div>
                        <a href={`https://www.facebook.com/profile.php?id=61553364305734`} target="_blank">
                            <img src={facebookLogo} width="150" height="150" />
                        </a>
                        <div>
                            Mời Kết Bạn Zalo, để được mở tính năng bán hàng miễn
                            phí!
                        </div>
                        <button
                            className="CloseShop"
                            onClick={() => setmoihoptac(0)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            ) : (
                <></>
            )}
            {+moihoptac === 2 ? (
                <div>
                    <div>Đăng kí nhà bán hàng mới có quyền Thêm Sản Phẩm</div>
                    <button
                        className="CloseShop"
                        onClick={() => setmoihoptac(0)}
                    >
                        Close
                    </button>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};
export default HeaderShop;
