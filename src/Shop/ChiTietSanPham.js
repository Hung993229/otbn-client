import "./ChiTietSanPham.scss";
import HeaderShop from "./HeaderShop";
import SanPham from "./SanPham";
import currency from "currency.js";

const ChiTietSanPham = (props) => {
    const { detailSanPham, setdetailSanPham, allshop } = props;

    const thongTinSp = allshop?.find((item) => item._id === detailSanPham);
    const VND = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    });

    return (
        <div className="container-ChiTietSanPhamTo">
            <div className="container-ChiTietSanPham">
                <div className="close">
                    <button onClick={() => setdetailSanPham(0)}>Close</button>
                </div>
                <div>
                    <img
                        src={thongTinSp?.AnhSanPham}
                        className="anhSanPham"
                        alt="timtim"
                    />
                    <div className="tenSanPham">{thongTinSp?.TenSanPham}</div>
                    <div className="giaBan">
                        <div className="giaBanMoi">
                            {VND.format(thongTinSp?.giaKhuyenMai)}
                        </div>
                        <div className="giabanCu">
                            {VND.format(thongTinSp?.giaNiemYet)}
                        </div>
                    </div>
                    <a href={thongTinSp?.thongTinNguoiBan} target="_blank">
                        <button className="muaHang">MUA HÀNG</button>
                    </a>
                    <div className="viTriSanPham">
                        <i className="fa-solid fa-location-dot"></i>
                        <div className="diachisanpham">{thongTinSp?.xa}</div>
                        <div className="diachisanpham">{thongTinSp?.huyen}</div>
                        <div className="diachisanpham">{thongTinSp?.tinh}</div>
                    </div>
                    <div className="thongtinSanPham">
                        {thongTinSp?.thongTinSanPham}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ChiTietSanPham;
