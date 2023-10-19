import "./HeaderShop.scss";
import bannerShop from "../assets/images/bannerShop.jpg";
import zaloLogo from "../assets/images/zaloLogo.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    getPost,
    deleteYourStatus,
    yourPost,
    getYourStatus,
    updateStatusUser,
    getStatus,
    deleteAllYourStatus,
    updatePost,
    logOut,
} from "../redux/apiRequest";
const HeaderShop = (props) => {
    const { quanLyShop, setquanLyShop } = props;
    const [moihoptac, setmoihoptac] = useState(0);
    const myDetail = useSelector((state) => state.post.post?.myDetail);
    const user = useSelector((state) => state.auth.login?.currentUser);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!user) {
            console.log("chua co userId");
        }
        if (user) {
            getStatus(user?._id, dispatch);
            getPost(user?._id, dispatch);
        }
    }, [user]);
    const handleQuanLyShop = () => {
        setquanLyShop(1);
    };
    return (
        <div className="container-header-shop">
            <div>
                <img src={bannerShop} alt="timtim" className="bannerShop" />
            </div>
            <div>--- CHÚC MỌI NGƯỜI SĂN SALE VUI VẺ! ---</div>
            <div>Quy Đổi: 1Gold = 1 VNĐ</div>
            <div className="hoptac-sanpham">
                <button onClick={() => setmoihoptac(1)} className="moihoptac">
                    Mời Hợp Tác
                </button>
                {+myDetail?.vaiTro === 0 || !myDetail.vaiTro ? (
                    <button
                        className="themSanPham"
                        onClick={() => setmoihoptac(2)}
                    >
                        Thêm Sản Phẩm
                    </button>
                ) : (
                    <></>
                )}
                {+myDetail?.vaiTro === 1 || +myDetail?.vaiTro === 2 ? (
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
                        <a href={`https://zalo.me/0976993229`} target="_blank">
                            <img src={zaloLogo} width="150" height="150" />
                        </a>
                        <div>
                            Mời Kết Bạn Zalo, để được mở tính năng bán hàng miễn
                            phí!
                        </div>
                        <button onClick={() => setmoihoptac(0)}>Close</button>
                    </div>
                </div>
            ) : (
                <></>
            )}
            {+moihoptac === 2 ? (
                <div>
                    <div>Đăng kí nhà bán hàng mới có quyền Thêm Sản Phẩm</div>
                    <button onClick={() => setmoihoptac(0)}>Close</button>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};
export default HeaderShop;
