import "./ChiTietSanPham.scss";
import HeaderShop from "./HeaderShop";
import SanPham from "./SanPham";
import currency from "currency.js";

const ChiTietSanPham = (props) => {
    const { detailSanPham, setdetailSanPham, allshop } = props;

    const thongTinSp = allshop?.find((item) => item._id === detailSanPham);

    console.log("thongTinSp", thongTinSp);
    return (
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
                    <div className="giabanCu">
                        {currency(thongTinSp?.giaNiemYet, {
                            symbol: "VNĐ ",
                            separator: ".",
                            decimal: ",",
                        })
                            .format()
                            .slice(0, -3)}
                    </div>
                    <div className="giaBanMoi">
                        {currency(thongTinSp?.giaKhuyenMai, {
                            symbol: "VNĐ ",
                            separator: ".",
                            decimal: ",",
                        })
                            .format()
                            .slice(0, -3)}{" "}
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
    );
};
export default ChiTietSanPham;
