import "./ThemSanPham.scss";
import CommonUtils from "../component/CommonUtils";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerShop, getShop } from "../redux/apiRequest";

const ThemSanPham = (props) => {
    const { suaSp, setsuaSp } = props;
    const user = useSelector((state) => state.auth.login?.currentUser);
    const myDetail = useSelector((state) => state.post.post?.myDetail);
    const allshop = useSelector((state) => state.shop.shop.allshop?.sanpham);
    const sanPhamGianHang = allshop?.filter((item) => item.user === user?._id);
    const dispatch = useDispatch();
    const [previewSanPham, setpreviewSanPham] = useState();
    const [AnhSanPham, setAnhSanPham] = useState();
    const [TenSanPham, setTenSanPham] = useState();
    const [giaNiemYet, setgiaNiemYet] = useState();
    const [giaKhuyenMai, setgiaKhuyenMai] = useState();
    const [thongTinNguoiBan, setthongTinNguoiBan] = useState();
    const [thongTinSanPham, setthongTinSanPham] = useState();
    const handleLuuSanPham = () => {
        if (+sanPhamGianHang.length < 10) {
            if (
                !AnhSanPham ||
                !TenSanPham ||
                !giaNiemYet ||
                !giaKhuyenMai ||
                !thongTinNguoiBan ||
                !thongTinSanPham
            ) {
                alert("Hãy nhập đủ thông tin");
            } else {
                const newSanPham = {
                    AnhSanPham: AnhSanPham,
                    TenSanPham: TenSanPham,
                    giaNiemYet: giaNiemYet,
                    giaKhuyenMai: giaKhuyenMai,
                    thongTinNguoiBan: thongTinNguoiBan,
                    thongTinSanPham: thongTinSanPham,
                    xa: myDetail.xaDs,
                    huyen: myDetail.huyenDs,
                    tinh: myDetail.tinhDs,
                    vaiTro: myDetail.vaiTro,
                    user: user._id,
                };
                console.log("newSanPham", newSanPham);
                registerShop(newSanPham, dispatch);
                setsuaSp(0);
                const huyenDs = myDetail?.huyenDs;
                const huyenQq = myDetail?.huyenQq;
                getShop(dispatch, huyenDs, huyenQq);
            }
        } else {
            alert("Bạn Được Đăng Tối Đa 5 Sản Phẩm");
        }
    };
    const handleOnchangeImageSanPham = async (e) => {
        const fileSanPham = e.target.files[0];
        let SanPhamBase64 = await CommonUtils.getBase64(fileSanPham);

        fileSanPham.preview = URL.createObjectURL(fileSanPham);

        setAnhSanPham(SanPhamBase64);
        setpreviewSanPham(fileSanPham);
    };

    return (
        <div className="container-themSanPham">
            <div className="sanPham">
                <div>
                    <input
                        id="anhsanpham"
                        type="file"
                        hidden
                        onChange={handleOnchangeImageSanPham}
                    />
                    <label htmlFor="anhsanpham">
                        <div className="anhsanpham">
                            {previewSanPham && (
                                <img src={previewSanPham.preview} />
                            )}
                        </div>
                    </label>
                </div>
                <div>
                    <div>
                        <label>Tên Sản Phẩm</label>
                        <input
                            onChange={(e) => setTenSanPham(e.target.value)}
                            className="tenSanPham"
                            placeholder="Tên Sản Phẩm"
                        />
                    </div>
                </div>
                <div className="giaBan">
                    <div>
                        <label>Giá Niêm Yết</label>
                        <input
                            onChange={(e) => setgiaNiemYet(e.target.value)}
                            className="giabanCu"
                            placeholder="Giá niêm yết (VNĐ)"
                            type="Number"
                        />
                    </div>
                    <div>
                        <label>Giá Khuyến Mại</label>
                        <input
                            onChange={(e) => setgiaKhuyenMai(e.target.value)}
                            className="giaBanMoi"
                            placeholder="Giá khuyến mại (VNĐ)"
                            type="Number"
                        />
                    </div>
                </div>

                <div>
                    <label>Thông Tin Sản Phẩm</label>
                    <input
                        onChange={(e) => setthongTinSanPham(e.target.value)}
                        className="muaHang"
                        placeholder="Thông Tin Chi Tiết Sản Phẩm"
                    />
                </div>
                <div>
                    <label>Thông Tin Liên Hệ</label>
                    <input
                        onChange={(e) => setthongTinNguoiBan(e.target.value)}
                        className="muaHang"
                        placeholder="Liên Hệ Người Bán (Zalo/Facebook/... )"
                    />
                </div>
                <button className="luuSanPham" onClick={handleLuuSanPham}>
                    Lưu Sản Phẩm
                </button>
            </div>
        </div>
    );
};
export default ThemSanPham;
