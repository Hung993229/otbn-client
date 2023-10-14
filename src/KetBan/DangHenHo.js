import "./DangHenHo.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
    updateStatusUser,
    updatePost,
    getPost,
    getYourStatus,
    getStatus,
    yourPost,
    deleteYourStatus,
} from "../redux/apiRequest";
import { useState } from "react";
import { useEffect } from "react";
const DangHenHo = () => {
    const dispatch = useDispatch();
    const yourDetail = useSelector((state) => state.post.post?.yourDetail);
    const status = useSelector((state) => state.status.status.status?.status);
    const user = useSelector((state) => state.auth.login?.currentUser);
    const myDetail = useSelector((state) => state.post.post?.myDetail);
    const yourStatus = useSelector(
        (state) => state.yourStatus.yourStatus.yourStatus?.yourstatus
    );
    const [suaPost, setsuaPost] = useState(1);
    const yourIdDangKetNoi = status?.yourIdDangKetNoi;

    // load
    useEffect(() => {
        if (user) {
            getStatus(user?._id, dispatch);
            getYourStatus(user?._id, dispatch);
        }
    }, [user]);
    useEffect(() => {
        if (user) {
            getPost(user?._id, dispatch);
        }
    }, [user]);
    useEffect(() => {
        if (yourIdDangKetNoi && yourIdDangKetNoi.length !== 0) {
            yourPost(yourIdDangKetNoi, dispatch);
        }
    }, [yourIdDangKetNoi]);

    // Chi Tiet
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
    const tuoiHop3 = yourDetail?.tuoiHop3;
    const yeucaukhac2 = yourDetail?.yeucaukhac2;
    const handleHuyKetNoi = () => {
        const statusUser = {
            dienThoai: "",
            yourIdDangKetNoi: "",
            user: user._id,
        };
        const id = status._id;
        updateStatusUser(statusUser, id, dispatch);
        const newPost = {
            myStatus: 0,
        };
        const id3 = myDetail?._id;
        updatePost(newPost, id3, dispatch, setsuaPost);
        if (yourStatus?._id && yourStatus?._id.length !== 0) {
            const id2 = yourStatus?._id;
            deleteYourStatus(id2, dispatch);
        }
    };
    return (
        <div>
            {!yourIdDangKetNoi ? (
                <div></div>
            ) : (
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
                            {xaQq}&nbsp;-&nbsp;{huyenQq}&nbsp;-&nbsp;{tinhQq}
                        </div>
                    </div>
                    <div className="Container-yourTieuChi-yourNoiDung">
                        <div className="yourTieuChi">Hiện Đang Sinh Sống</div>
                        <div className="yourNoiDung">
                            {xaDs}&nbsp;-&nbsp;{huyenDs}&nbsp;-&nbsp;{tinhDs}
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
                            <div>&emsp;</div>
                            <div>Cân nặng {canNang} (kg)</div>
                        </div>
                    </div>
                    <div className="Container-yourTieuChi-yourNoiDung">
                        <div className="yourTieuChi">Giới thiệu thêm</div>
                        <div className="yourNoiDung">{gioiThieuThem}</div>
                    </div>
                    <div className="yourMauNguoiYeuLyTuong">
                        Mẫu Người Yêu Lý Tưởng
                    </div>
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
                        <div className="yourNoiDung">{ngheNghiep2}</div>
                    </div>
                    <div className="Container-yourTieuChi-yourNoiDung">
                        <div className="yourTieuChi">Thu Nhập</div>
                        <div className="yourNoiDung">{thuNhap2}</div>
                    </div>
                    <div className="Container-yourTieuChi-yourNoiDung">
                        <div className="yourTieuChi">Tuổi Hợp</div>
                        <div className="yourNoiDung">
                            <div>Từ Năm &emsp;</div>
                            <div>{tuoiHop2}</div>
                            <div> &emsp;Đến Năm&emsp;</div>
                            <div>{tuoiHop3}</div>
                        </div>
                    </div>
                    <div className="Container-yourTieuChi-yourNoiDung">
                        <div className="yourTieuChi">Yêu Cầu Khác</div>
                        <div className="yourNoiDung">{yeucaukhac2}</div>
                    </div>
                    <div>
                        <div>
                            <button
                                className="xinLamQuen"
                                onClick={handleHuyKetNoi}
                            >
                                Huỷ Kết Nối
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default DangHenHo;
