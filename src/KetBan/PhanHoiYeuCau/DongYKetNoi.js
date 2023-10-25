import "./DongYKetNoi.scss";
import { useSelector } from "react-redux";
import YourDangKetNoi from "../GuiYeuCau/YourDangKetNoi";
import zaloLogo from "../../assets/images/zaloLogo.png";
const DongYKetNoi = () => {
    const status = useSelector((state) => state.status.status.status?.status);
    const dienThoai = status?.dienThoai;
    return (
        <div className="container">
            <div>
                <h1>
                    Chúc Mừng 2 Bạn <br />
                    Đã Đồng Ý Tìm Hiểu Thêm Về Nhau!
                </h1>
                <div>Hãy Kết Bạn ZaLo Để Trò Chuyện Nhiều Hơn Nhé!</div>
                <div>
                    <a href={`https://zalo.me/${dienThoai}`} target="_blank">
                        <img src={zaloLogo} width="150" height="150" />
                    </a>
                </div>
                <div>
                    Mong Rằng 2 Bạn Sẽ Có Một Tình Yêu Đẹp Và Sớm Về Chung Một
                    Nhà!
                </div>
                <div>
                    Ngày Hạnh Phúc Nhớ Thông Báo Tới Chúng Mình Để Cùng Chia Sẻ
                    Niềm Vui Nhé!
                </div>
            </div>
        </div>
    );
};
export default DongYKetNoi;
