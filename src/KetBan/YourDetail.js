import "./YourDetail.scss";

import { yourPost } from "../redux/apiRequest";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const YourDetail = () => {
    const yourDetail = useSelector((state) => state.post.post.yourDetail);
    const dispatch = useDispatch();

    // lọc user phu hop
    const yourId = "650aaa480273997bbfc50061";

    // Du Lieu Hien Thi
    const banner = yourDetail?.banner;
    const avatar = yourDetail?.avatar;
    const hoTen = yourDetail?.hoTen;
    const cauNoiTamDac = yourDetail?.cauNoiTamDac;
    const gioiTinh = yourDetail?.gioiTinh;
    const tinhTrangHonNhan = yourDetail?.tinhTrangHonNhan;
    const ngaySinh = yourDetail?.ngaySinh;
    const thangSinh = yourDetail?.thangSinh;
    const namSinh = yourDetail?.namSinh;
    const tinhQq = yourDetail?.tinhQq;
    const huyenQq = yourDetail?.huyenQq;
    const xaQq = yourDetail?.xaQq;
    const tinhDs = yourDetail?.tinhDs;
    const huyenDs = yourDetail?.huyenDs;
    const xaDs = yourDetail?.xaDs;
    const tonGiao = yourDetail?.tonGiao;
    const ngheNghiep = yourDetail?.ngheNghiep;
    const thuNhap = yourDetail?.thuNhap;
    const chieuCao = yourDetail?.chieuCao;
    const canNang = yourDetail?.canNang;
    const gioiThieuThem = yourDetail?.gioiThieuThem;
    const gioiTinh2 = yourDetail?.gioiTinh2;
    const tinhTrangHonNhan2 = yourDetail?.tinhTrangHonNhan2;
    const khuVucLamQuen2 = yourDetail?.khuVucLamQuen2;
    const tonGiao2 = yourDetail?.tonGiao2;
    const ngheNghiep2 = yourDetail?.ngheNghiep2;
    const thuNhap2 = yourDetail?.thuNhap2;
    const tuoiHop2 = yourDetail?.tuoiHop2;
    const yeucaukhac2 = yourDetail?.yeucaukhac2;

    useEffect(() => {
        if (!yourId) {
            return console.log("chua co userId");
        }
        if (yourId) {
            yourPost(yourId, dispatch);
        }
    }, []);

    return (
        <div className="container-yourDetail">
            <div className="banner">
                <div>
                    <img src={banner} />
                </div>
            </div>
            <div className="yourDetail-avatar-hoTen-cauNoiTamDac">
                <img src={avatar} className="yourDetail-avatar" />
                <div className="yourDetail-hoTen-cauNoiTamDac">
                    <div className="yourDetail-hoTen">{hoTen}</div>
                    <div className="yourdetail-cauNoiTamDac">
                        {cauNoiTamDac}
                    </div>
                </div>
            </div>
            <div className="Container-yourTieuChi-yourNoiDung">
                <div className="yourTieuChi">Giới Tính</div>
                <div className="yourNoiDung">{gioiTinh}</div>
            </div>
            <div className="Container-yourTieuChi-yourNoiDung">
                <div className="yourTieuChi">Tình Trạng Hôn Nhân</div>
                <div className="yourNoiDung">{tinhTrangHonNhan}</div>
            </div>
            <div className="Container-yourTieuChi-yourNoiDung">
                <div className="yourTieuChi">Ngày Sinh</div>
                <div className="yourNoiDung">
                    <div>
                        {ngaySinh}/{thangSinh}/{namSinh}
                    </div>
                </div>
            </div>
            <div className="Container-yourTieuChi-yourNoiDung">
                <div className="yourTieuChi">Quê Quán</div>
                <div className="yourNoiDung">
                    {xaQq}-{huyenQq}-{tinhQq}
                </div>
            </div>
            <div className="Container-yourTieuChi-yourNoiDung">
                <div className="yourTieuChi">Hiện Đang Sinh Sống</div>
                <div className="yourNoiDung">
                    {xaDs}-{huyenDs}-{tinhDs}
                </div>
            </div>
            <div className="Container-yourTieuChi-yourNoiDung">
                <div className="yourTieuChi">Tôn Giáo</div>
                <div className="yourNoiDung">{tonGiao}</div>
            </div>
            <div className="Container-yourTieuChi-yourNoiDung">
                <div className="yourTieuChi">Nghề Nghiệp</div>
                <div className="yourNoiDung">{ngheNghiep}</div>
            </div>
            <div className="Container-yourTieuChi-yourNoiDung">
                <div className="yourTieuChi">Thu Nhập</div>
                <div className="yourNoiDung">{thuNhap}</div>
            </div>
            <div className="Container-yourTieuChi-yourNoiDung">
                <div className="yourTieuChi">Đặc Điểm</div>
                <div className="yourNoiDung">
                    <div>Chiều cao {chieuCao} (cm)</div>
                    <div>Cân nặng {canNang} (kg)</div>
                </div>
            </div>
            <div className="Container-yourTieuChi-yourNoiDung">
                <div className="yourTieuChi">Giới thiệu thêm</div>
                <div className="yourNoiDung">{gioiThieuThem}</div>
            </div>
            <div className="yourMauNguoiYeuLyTuong">Mẫu Người Yêu Lý Tưởng</div>
            <div className="Container-yourTieuChi-yourNoiDung">
                <div className="yourTieuChi">Giới Tính</div>
                <div className="yourNoiDung">{gioiTinh2}</div>
            </div>
            <div className="Container-yourTieuChi-yourNoiDung">
                <div className="yourTieuChi">Tình trạng hôn nhân</div>
                <div className="yourNoiDung">{tinhTrangHonNhan2}</div>
            </div>
            <div className="Container-yourTieuChi-yourNoiDung">
                <div className="yourTieuChi">Khu Vực Làm Quen</div>
                <div className="yourNoiDung">{khuVucLamQuen2}</div>
            </div>
            <div className="Container-yourTieuChi-yourNoiDung">
                <div className="yourTieuChi">Tôn Giáo</div>
                <div className="yourNoiDung">{tonGiao2}</div>
            </div>
            <div className="Container-yourTieuChi-yourNoiDung">
                <div className="yourTieuChi">Nghề Nghiệp</div>
                <div className="yourNoiDung">{tonGiao2}</div>
            </div>
            <div className="Container-yourTieuChi-yourNoiDung">
                <div className="yourTieuChi">Thu Nhập</div>
                <div className="yourNoiDung">{thuNhap2}</div>
            </div>
            <div className="Container-yourTieuChi-yourNoiDung">
                <div className="yourTieuChi">Tuổi Hợp</div>
                <div className="yourNoiDung">{tuoiHop2}</div>
            </div>
            <div className="Container-yourTieuChi-yourNoiDung">
                <div className="yourTieuChi">Yêu Cầu Khác</div>
                <div className="yourNoiDung">{yeucaukhac2}</div>
            </div>
            <div>
                <button className="xinLamQuen">Xin Làm Quen</button>
                <button className="boQua">Bỏ Qua</button>
            </div>
        </div>
    );
};
export default YourDetail;
