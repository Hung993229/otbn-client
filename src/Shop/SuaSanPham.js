import "./SuaSanPham.scss";

import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { updateShop, getShop, deleteShop } from "../redux/apiRequest";
import { useDispatch } from "react-redux";
import CommonUtils from "../component/CommonUtils";
import ThemSanPham from "./ThemSanPham";
import currency from "currency.js";
const SuaSanPham = (props) => {
    const { quanLyShop, setquanLyShop } = props;
    const user = useSelector((state) => state.auth.login?.currentUser);
    const allshop = useSelector((state) => state.shop.shop.allshop?.sanpham);
    const shop = useSelector((state) => state.shop.shop?.shop);
    const myDetail = useSelector((state) => state.post.post?.myDetail);
    const dispatch = useDispatch();
    const [suaSp, setsuaSp] = useState(0);
    const [idSpSua, setidSpSua] = useState(0);
    useEffect(() => {
        const huyenDs = myDetail?.huyenDs;
        const huyenQq = myDetail?.huyenQq;
        getShop(dispatch, huyenDs, huyenQq);
    }, [user, dispatch]);
    const handleSuaSanPham = (id) => {
        setsuaSp(1);
        setidSpSua(id);
    };

    const detailidSpSua = allshop?.find((item) => item._id === idSpSua);

    const sanPhamGianHang = allshop?.filter((item) => item.user === user?._id);

    const [previewSanPham, setpreviewSanPham] = useState(
        detailidSpSua?.AnhSanPham
    );
    const [AnhSanPham, setAnhSanPham] = useState(detailidSpSua?.AnhSanPham);
    const [TenSanPham, setTenSanPham] = useState(detailidSpSua?.TenSanPham);
    const [giaNiemYet, setgiaNiemYet] = useState(detailidSpSua?.giaNiemYet);
    const [giaKhuyenMai, setgiaKhuyenMai] = useState(
        detailidSpSua?.giaKhuyenMai
    );
    const [thongTinNguoiBan, setthongTinNguoiBan] = useState(
        detailidSpSua?.thongTinNguoiBan
    );
    const [thongTinSanPham, setthongTinSanPham] = useState(
        detailidSpSua?.thongTinSanPham
    );
    const handleLuuSanPham = (id) => {
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
        updateShop(newSanPham, id, dispatch);
        setsuaSp(0);
    };
    const handleOnchangeImagesuaSanPham = async (e) => {
        console.log("e", e);
        const fileSanPham = e.target.files[0];
        let SanPhamBase64 = await CommonUtils.getBase64(fileSanPham);

        fileSanPham.preview = URL.createObjectURL(fileSanPham);

        setAnhSanPham(SanPhamBase64);
        setpreviewSanPham(fileSanPham);
    };

    const handleXoaSanPham = (id) => {
        deleteShop(id, dispatch);
        const huyenDs = myDetail?.huyenDs;
        const huyenQq = myDetail?.huyenQq;
        getShop(dispatch, huyenDs, huyenQq);
    };

    console.log("sanPhamGianHang", sanPhamGianHang?.length);
    return (
        <div className="suaSanPham">
            <div>
                <button
                    className="quayLaiShopping"
                    onClick={() => setquanLyShop(0)}
                >
                    Quay Lại Shoping
                </button>
                {+sanPhamGianHang?.length < 10 ? (
                    <button className="themSanPham" onClick={() => setsuaSp(2)}>
                        Thêm Sản Phẩm
                    </button>
                ) : (
                    <div>Bạn Được Đăng Tối Đa 5 Sản Phẩm</div>
                )}
            </div>

            {+suaSp === 0 ? (
                <div className="container-SuaSanPham">
                    {sanPhamGianHang &&
                        sanPhamGianHang?.map((item) => {
                            return (
                                <div key={item._id} className="sanPham">
                                    <div className="suaxoa">
                                        <button
                                            className="sua"
                                            onClick={() =>
                                                handleSuaSanPham(item._id)
                                            }
                                        >
                                            Sửa Sản Phẩm
                                        </button>
                                        <button
                                            className="xoa"
                                            onClick={() =>
                                                handleXoaSanPham(item._id)
                                            }
                                        >
                                            Xoá Sản Phẩm
                                        </button>
                                    </div>
                                    <div>
                                        <img
                                            src={item?.AnhSanPham}
                                            className="anhSanPham"
                                            alt="timtim"
                                        />
                                        <div className="tenSanPham">
                                            {item?.TenSanPham}
                                        </div>
                                        <div className="giaBan">
                                            <div className="giabanCu">
                                                {currency(item?.giaNiemYet, {
                                                    symbol: "VNĐ ",
                                                    separator: ".",
                                                    decimal: ",",
                                                })
                                                    .format()
                                                    .slice(0, -3)}
                                            </div>
                                            <div className="giaBanMoi">
                                                {currency(item?.giaKhuyenMai, {
                                                    symbol: "VNĐ ",
                                                    separator: ".",
                                                    decimal: ",",
                                                })
                                                    .format()
                                                    .slice(0, -3)}
                                            </div>
                                        </div>

                                        <button className="muaHang">
                                            MUA HÀNG
                                        </button>

                                        <div className="thongtinSanPham">
                                            {item?.thongTinSanPham}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            ) : (
                <></>
            )}
            {+suaSp === 1 ? (
                <div className="container-themSanPham">
                    <div className="close">
                        <button onClick={() => setsuaSp(0)}>Đóng Lại</button>
                    </div>
                    <div className="sanPham">
                        <div>
                            <input
                                id="anhsuasanpham"
                                type="file"
                                hidden
                                onChange={handleOnchangeImagesuaSanPham}
                            />
                            <label htmlFor="anhsuasanpham">
                                <div>
                                    {previewSanPham ? (
                                        <img
                                            src={previewSanPham?.preview}
                                            className="anhsuasanpham"
                                        />
                                    ) : (
                                        <img
                                            src={detailidSpSua?.AnhSanPham}
                                            className="anhsuasanpham"
                                        />
                                    )}
                                </div>
                            </label>
                        </div>
                        <div>
                            <div>
                                <label>Tên Sản Phẩm</label>
                                <input
                                    onChange={(e) =>
                                        setTenSanPham(e.target.value)
                                    }
                                    className="tenSanPham"
                                    placeholder={detailidSpSua?.TenSanPham}
                                />
                            </div>
                        </div>
                        <div className="giaBan">
                            <div>
                                <label>Giá Niêm Yết</label>
                                <input
                                    onChange={(e) =>
                                        setgiaNiemYet(e.target.value)
                                    }
                                    className="giabanCu"
                                    placeholder={detailidSpSua?.giaNiemYet}
                                    type="Number"
                                />
                            </div>
                            <div>
                                <label>Giá Khuyến Mại</label>
                                <input
                                    onChange={(e) =>
                                        setgiaKhuyenMai(e.target.value)
                                    }
                                    className="giaBanMoi"
                                    placeholder={detailidSpSua?.giaKhuyenMai}
                                    type="Number"
                                />
                            </div>
                        </div>

                        <div>
                            <label>Thông Tin Sản Phẩm</label>
                            <input
                                onChange={(e) =>
                                    setthongTinSanPham(e.target.value)
                                }
                                className="thongTinSanPham"
                                placeholder={detailidSpSua?.thongTinSanPham}
                            />
                        </div>
                        <div>
                            <label>Thông Tin Liên Hệ</label>
                            <input
                                onChange={(e) =>
                                    setthongTinNguoiBan(e.target.value)
                                }
                                className="muaHang"
                                placeholder={detailidSpSua?.thongTinNguoiBan}
                            />
                        </div>
                        <button
                            className="luuSanPham"
                            onClick={() => handleLuuSanPham(detailidSpSua._id)}
                        >
                            Lưu Sản Phẩm
                        </button>
                    </div>
                </div>
            ) : (
                <></>
            )}
            {+suaSp === 2 ? (
                <div>
                    {/* <button onClick={() => setsuaSp(0)}>Đóng Lại</button> */}
                    <ThemSanPham suaSp={suaSp} setsuaSp={setsuaSp} />
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};
export default SuaSanPham;
