import "./SanPham.scss";
import { useState } from "react";
import { useEffect } from "react";
import { getShop, getStatus, getPost } from "../redux/apiRequest";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const SanPham = (props) => {
    const { detailSanPham, setdetailSanPham } = props;
    const allshop = useSelector((state) => state.shop.shop.allshop?.sanpham);
    const myDetail = useSelector((state) => state.post.post?.myDetail);
    const user = useSelector((state) => state.auth.login?.currentUser);
    const [moihoptac, setmoihoptac] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        const huyenDs = myDetail?.huyenDs;
        const huyenQq = myDetail?.huyenQq;
        getShop(dispatch, huyenDs, huyenQq);
    }, [user]);
    useEffect(() => {
        if (!user) {
            console.log("chua co userId");
        }
        if (user) {
            getStatus(user?._id, dispatch);
            getPost(user?._id, dispatch);
        }
    }, [user, dispatch]);
    const VND = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    });

    return (
        <div>
            <div className="container-sanPham">
                {allshop &&
                    allshop?.map((item) => {
                        return (
                            <div
                                className="sanPham"
                                key={item?._id}
                                onClick={() => setdetailSanPham(item?._id)}
                            >
                                <img
                                    src={item?.AnhSanPham}
                                    className="anhSanPham"
                                    alt="timtim"
                                />
                                <div className="tenSanPham">
                                    {item?.TenSanPham}
                                </div>
                                <div className="giaBan">
                                    <div className="giaBanMoi">
                                        {VND.format(item?.giaKhuyenMai)}
                                    </div>
                                    <div className="giabanCu">
                                        {VND.format(item?.giaNiemYet)}
                                    </div>

                                    <div>
                                        {}
                                </div>
                                </div>
                                <a
                                    href={item?.thongTinNguoiBan}
                                    target="_blank"
                                >
                                    <button className="muaHang">
                                        MUA HÀNG
                                    </button>
                                </a>

                                <div className="viTriSanPham">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <div className="diachisanpham">
                                        {item?.xa}
                                    </div>
                                    <div className="diachisanpham">
                                        {item?.huyen}
                                    </div>
                                    <div className="diachisanpham">
                                        {item?.tinh}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};
export default SanPham;
