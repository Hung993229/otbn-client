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
            if (+giaNiemYet < +giaKhuyenMai) {
                alert("Giá Khuyến Mại Phải Nhỏ Hơn Giá Niêm Yết");
            } else {
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
        <div>
            <div className="container-themSanPham">
            <div className="close">
                <button onClick={() => setsuaSp(0)}>Close</button>
            </div>
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
                                <img
                                    src={previewSanPham.preview}
                                    className="anhsanpham"
                                />
                            )}
                        </div>
                    </label>
                </div>
                <div>
                    <div>
                        <label>Tên Sản Phẩm</label>
                        <div>
                            <input
                                onChange={(e) => setTenSanPham(e.target.value)}
                                className="tenSanPham"
                                placeholder="Tên Sản Phẩm"
                            />
                        </div>
                    </div>
                </div>
                <div className="giaBan">
                    <div className="giabanCu">
                        <label>Giá Niêm Yết</label>
                        <div>
                            <input
                                onChange={(e) => setgiaNiemYet(e.target.value)}
                                placeholder="Giá niêm yết (VNĐ)"
                                type="Number"
                            />
                        </div>
                    </div>
                    <div className="giaBanMoi">
                        <label>Giá Khuyến Mại</label>
                        <div>
                            <input
                                onChange={(e) =>
                                    setgiaKhuyenMai(e.target.value)
                                }
                                placeholder="Giá khuyến mại (VNĐ)"
                                type="Number"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <label>Thông Tin Sản Phẩm</label>
                    <div>
                        <input
                            onChange={(e) => setthongTinSanPham(e.target.value)}
                            className="thongTinSanPham"
                            placeholder="Thông Tin Chi Tiết Sản Phẩm"
                        />
                    </div>
                </div>
                <div>
                    <label>Thông Tin Liên Hệ</label>
                    <div>
                        <input
                            onChange={(e) =>
                                setthongTinNguoiBan(e.target.value)
                            }
                            className="tenSanPham"
                            placeholder="Liên Hệ Người Bán (Zalo/Facebook/... )"
                        />
                    </div>
                </div>
                <button className="luuSanPahm" onClick={handleLuuSanPham}>
                    Lưu Sản Phẩm
                </button>
            </div>
            
            </div>
            <div className="luuYThemSp">
                Lưu Ý: <br />
                - Shopping có tác dụng tạo phễu dẫn khách hàng cho Đại lý về
                Facebook, Zalo, Website, ... <br />
                - Mục liên hệ người bán là link dẫn đến Zalo/Facebook/Website,
                ... của Đại lý
                <br />
                - Mỗi Đại lý được đăng 9 sản phẩm miễn phí. Vì vậy hãy chọn sản
                phẩm nổi bật hoặc ưu đãi nhất để đăng! <br />
                - Nếu sản phẩm đa dạng Đại lý hãy đăng ở Zalo, Facebook,
                Website,... Khi khách hàng có hứng thú với sản phẩm ưu đãi rồi,
                lúc chốt đơn có thể gợi ý khách hàng mua kèm sản phẩm! <br />-
                Tránh đăng nhiều sản phẩm không có gì thu hút sẽ làm mất hứng
                thú Săn Sale của khách hàng!
            </div>
        </div>
        
    );
};
export default ThemSanPham;
