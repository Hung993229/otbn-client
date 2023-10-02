import "./MyDetail.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { getPost } from "../redux/apiRequest";

const MyDetail = () => {
    const user = useSelector((state) => state.auth.login.currentUser);
    const myDetail = useSelector((state) => state.post.post.myDetail);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const banner = myDetail?.banner;
    const avatar = myDetail?.avatar;
    const hoTen = myDetail?.hoTen;
    const cauNoiTamDac = myDetail?.cauNoiTamDac;
    const gioiTinh = myDetail?.gioiTinh;
    const tinhTrangHonNhan = myDetail?.tinhTrangHonNhan;
    const ngaySinh = myDetail?.ngaySinh;
    const thangSinh = myDetail?.thangSinh;
    const namSinh = myDetail?.namSinh;
    const tinhQq = myDetail?.tinhQq;
    const huyenQq = myDetail?.huyenQq;
    const xaQq = myDetail?.xaQq;
    const tinhDs = myDetail?.tinhDs;
    const huyenDs = myDetail?.huyenDs;
    const xaDs = myDetail?.xaDs;
    const tonGiao = myDetail?.tonGiao;
    const ngheNghiep = myDetail?.ngheNghiep;
    const thuNhap = myDetail?.thuNhap;
    const chieuCao = myDetail?.chieuCao;
    const canNang = myDetail?.canNang;
    const gioiThieuThem = myDetail?.gioiThieuThem;
    const gioiTinh2 = myDetail?.gioiTinh2;
    const tinhTrangHonNhan2 = myDetail?.tinhTrangHonNhan2;
    const khuVucLamQuen2 = myDetail?.khuVucLamQuen2;
    const tonGiao2 = myDetail?.tonGiao2;
    const ngheNghiep2 = myDetail?.ngheNghiep2;
    const thuNhap2 = myDetail?.thuNhap2;
    const tuoiHop2 = myDetail?.tuoiHop2;
    const yeucaukhac2 = myDetail?.yeucaukhac2;

    useEffect(() => {
        if (!user) {
            console.log("chua co userId");
        }
        if (user) {
            getPost(user?._id, dispatch);
        }
    }, []);

    return (
        <div className="container-myDetail">
            <div className="banner">
                <div>
                    <img src={banner} />
                </div>
            </div>
            <div className="myDetail-avatar-hoTen-cauNoiTamDac">
                <img src={avatar} className="myDetail-avatar" />
                <div className="myDetail-hoTen-cauNoiTamDac">
                    <div className="myDetail-hoTen">{hoTen}</div>
                    <div className="mydetail-cauNoiTamDac">{cauNoiTamDac}</div>
                </div>
            </div>
            <div className="Container-myTieuChi-myNoiDung">
                <div className="myTieuChi">Giới Tính</div>
                <div className="myNoiDung">{gioiTinh}</div>
            </div>
            <div className="Container-myTieuChi-myNoiDung">
                <div className="myTieuChi">Tình Trạng Hôn Nhân</div>
                <div className="myNoiDung">{tinhTrangHonNhan}</div>
            </div>
            <div className="Container-myTieuChi-myNoiDung">
                <div className="myTieuChi">Ngày Sinh</div>
                <div className="myNoiDung">
                    <div>
                        {ngaySinh}/{thangSinh}/{namSinh}
                    </div>
                </div>
            </div>
            <div className="Container-myTieuChi-myNoiDung">
                <div className="myTieuChi">Quê Quán</div>
                <div className="myNoiDung">
                    {xaQq}-{huyenQq}-{tinhQq}
                </div>
            </div>
            <div className="Container-myTieuChi-myNoiDung">
                <div className="myTieuChi">Hiện Đang Sinh Sống</div>
                <div className="myNoiDung">
                    {xaDs}-{huyenDs}-{tinhDs}
                </div>
            </div>
            <div className="Container-myTieuChi-myNoiDung">
                <div className="myTieuChi">Tôn Giáo</div>
                <div className="myNoiDung">{tonGiao}</div>
            </div>
            <div className="Container-myTieuChi-myNoiDung">
                <div className="myTieuChi">Nghề Nghiệp</div>
                <div className="myNoiDung">{ngheNghiep}</div>
            </div>
            <div className="Container-myTieuChi-myNoiDung">
                <div className="myTieuChi">Thu Nhập</div>
                <div className="myNoiDung">{thuNhap}</div>
            </div>
            <div className="Container-myTieuChi-myNoiDung">
                <div className="myTieuChi">Đặc Điểm</div>
                <div className="myNoiDung">
                    <div>Chiều cao {chieuCao} (cm)</div>
                    <div>Cân nặng {canNang} (kg)</div>
                </div>
            </div>
            <div className="Container-myTieuChi-myNoiDung">
                <div className="myTieuChi">Giới thiệu thêm</div>
                <div className="myNoiDung">{gioiThieuThem}</div>
            </div>
            <div className="myMauNguoiYeuLyTuong">Mẫu Người Yêu Lý Tưởng</div>
            <div className="Container-myTieuChi-myNoiDung">
                <div className="myTieuChi">Giới Tính</div>
                <div className="myNoiDung">{gioiTinh2}</div>
            </div>
            <div className="Container-myTieuChi-myNoiDung">
                <div className="myTieuChi">Tình trạng hôn nhân</div>
                <div className="myNoiDung">{tinhTrangHonNhan2}</div>
            </div>
            <div className="Container-myTieuChi-myNoiDung">
                <div className="myTieuChi">Khu Vực Làm Quen</div>
                <div className="myNoiDung">{khuVucLamQuen2}</div>
            </div>
            <div className="Container-myTieuChi-myNoiDung">
                <div className="myTieuChi">Tôn Giáo</div>
                <div className="myNoiDung">{tonGiao2}</div>
            </div>
            <div className="Container-myTieuChi-myNoiDung">
                <div className="myTieuChi">Nghề Nghiệp</div>
                <div className="myNoiDung">{tonGiao2}</div>
            </div>
            <div className="Container-myTieuChi-myNoiDung">
                <div className="myTieuChi">Thu Nhập</div>
                <div className="myNoiDung">{thuNhap2}</div>
            </div>
            <div className="Container-myTieuChi-myNoiDung">
                <div className="myTieuChi">Tuổi Hợp</div>
                <div className="myNoiDung">{tuoiHop2}</div>
            </div>
            <div className="Container-myTieuChi-myNoiDung">
                <div className="myTieuChi">Yêu Cầu Khác</div>
                <div className="myNoiDung">{yeucaukhac2}</div>
            </div>
            <div>
                <button className="xinLamQuen">Sửa Thông Tin</button>
                <button className="boQua">Lưu Thông Tin</button>
            </div>
        </div>
    );
};
export default MyDetail;
