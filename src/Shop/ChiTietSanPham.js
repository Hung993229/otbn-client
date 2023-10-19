import "./ChiTietSanPham.scss";
import HeaderShop from "./HeaderShop";
import SanPham from "./SanPham";

const ChiTietSanPham = (props) => {
    const { detailSanPham, setdetailSanPham, allshop } = props;

    const thongTinSp = allshop?.find((item) => item._id === detailSanPham);

    console.log("thongTinSp", thongTinSp);
    return (
        <div className="container-ChiTietSanPham">
            <button onClick={() => setdetailSanPham(0)}>Close</button>
            <div>
                <img
                    src={thongTinSp?.AnhSanPham}
                    className="anhSanPham"
                    alt="timtim"
                />
                <div className="tenSanPham">{thongTinSp?.TenSanPham}</div>
                <div className="giaBan">
                    <div className="giabanCu">{thongTinSp?.giaNiemYet} </div>
                    <div className="giaBanMoi">{thongTinSp?.giaKhuyenMai} </div>
                </div>
                <a href={thongTinSp?.thongTinNguoiBan} target="_blank">
                    <button className="muaHang">MUA HÀNG</button>
                </a>
                <div className="viTriSanPham">
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
