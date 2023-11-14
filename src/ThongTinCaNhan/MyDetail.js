import "./MyDetail.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import {
    getPost,
    deleteYourStatus,
    yourPost,
    getYourStatus,
    updateStatusUser,
    getStatus,
    deleteAllYourStatus,
    updatePost,
    logOut,
} from "../redux/apiRequest";

import { createAxios } from "../../src/createInstance";
import { logOutSuccess } from "../redux/authSlice";
import Facedata from "./Facedata";

const MyDetail = (props) => {
    const { suaPost, setsuaPost } = props;
    const [taodata, settaodata] = useState(0);
    const user = useSelector((state) => state.auth.login?.currentUser);
    const myDetail = useSelector((state) => state.post.post?.myDetail);

    const accessToken = user?.accessToken;
    const id = user?._id;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let axiosJWT = createAxios(user, dispatch, logOutSuccess);

    // Mydetail Chi tiet
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
    const tuoiHop3 = myDetail?.tuoiHop3;
    const yeucaukhac2 = myDetail?.yeucaukhac2;

    // yourDetai Chi Tiet

    useEffect(() => {
        if (!user) {
            console.log("chua co userId");
        }
        if (user) {
            getStatus(user?._id, dispatch);
            getPost(user?._id, dispatch);
        }
    }, [user]);
    useEffect(() => {
        getYourStatus(user?._id, dispatch);
    }, []);
    const handleLogout = () => {
        logOut(dispatch, id, navigate, accessToken, axiosJWT);
    };

    const Admin = () => {
        navigate("/quan-ly-user");
    };
    console.log("taodata", taodata);
    return (
        <div className="container-myDetail">
            {+taodata === 0 ? (
                <div className="thongTinCaNhan">
                    <div>
                        <div>
                            <img
                                src={banner}
                                className="bannerThongTinCaNhan"
                            />
                        </div>
                    </div>
                    <div className="myDetail-avatar-hoTen-cauNoiTamDac">
                        <img src={avatar} className="myDetail-avatar" />
                        <div className="myDetail-hoTen-cauNoiTamDac">
                            <div className="myDetail-hoTen">{hoTen}</div>
                            <div className="mydetail-cauNoiTamDac">
                                {cauNoiTamDac}
                            </div>
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
                            {xaQq}&nbsp;-&nbsp;{huyenQq}&nbsp;-&nbsp;
                            {tinhQq}
                        </div>
                    </div>
                    <div className="Container-myTieuChi-myNoiDung">
                        <div className="myTieuChi">Hiện Đang Sinh Sống</div>
                        <div className="myNoiDung">
                            {xaDs}&nbsp;-&nbsp;{huyenDs}&nbsp;-&nbsp;
                            {tinhDs}
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
                        <div className="myNoiDung2">
                            <div>Chiều cao {chieuCao} (cm)</div>
                            <div>&emsp;</div>
                            <div>Cân nặng {canNang} (kg)</div>
                        </div>
                    </div>
                    <div className="Container-myTieuChi-myNoiDung">
                        <div className="myTieuChi">Giới thiệu thêm</div>
                        <div className="myNoiDung">{gioiThieuThem}</div>
                    </div>
                    <div className="myMauNguoiYeuLyTuong">
                        Mẫu Người Yêu Lý Tưởng
                    </div>
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
                        <div className="myNoiDung">{ngheNghiep2}</div>
                    </div>
                    <div className="Container-myTieuChi-myNoiDung">
                        <div className="myTieuChi">Thu Nhập</div>
                        <div className="myNoiDung">{thuNhap2}</div>
                    </div>
                    <div className="Container-myTieuChi-myNoiDung">
                        <div className="myTieuChi">
                            Khoảng Tuổi Muốn Làm Quen
                        </div>
                        <div className="myNoiDung2">
                            <div>Từ Năm &emsp;</div>
                            <div>{tuoiHop2}</div>
                            <div> &emsp;Đến Năm&emsp;</div>
                            <div>{tuoiHop3}</div>
                        </div>
                    </div>
                    <div className="Container-myTieuChi-myNoiDung">
                        <div className="myTieuChi">Yêu Cầu Khác</div>
                        <div className="myNoiDung">{yeucaukhac2}</div>
                    </div>
                    <div>
                        
                        <button
                            className="suaThongTin"
                            onClick={() => setsuaPost(1)}
                        >
                            Sửa Thông Tin
                        </button>
                        <button className="dangXuat" onClick={handleLogout}>
                            Đăng Xuất
                        </button>
                    </div>
                    <div>
                        {+myDetail?.vaiTro === 2 || user?.admin === true ? (
                            <button
                                className="suaThongTin"
                                onClick={() => settaodata(1)}
                            >
                                Quản Lý
                            </button>
                        ) : (
                            <></>
                        )}
                        {user?.admin === true && (
                            <button className="dangXuat" onClick={Admin}>
                                Admin
                            </button>
                        )}
                    </div>
                </div>
            ) : (
                <></>
            )}
            {+taodata === 1 ? (
                <Facedata taodata={taodata} settaodata={settaodata} />
            ) : (
                <></>
            )}
        </div>
    );
};
export default MyDetail;
