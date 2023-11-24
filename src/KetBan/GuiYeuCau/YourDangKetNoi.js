import "./ChonVaGuiYeuCau.scss";
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
    registerYourStatus,
    deleteAllYourStatus,
} from "../../redux/apiRequest";
import { useState } from "react";
import { useEffect } from "react";
import Faceketnoi from "./Faceketnoi";
const YourDangKetNoi = () => {
    const dispatch = useDispatch();
    const yourDetail = useSelector((state) => state.post.post?.yourDetail);
    const status = useSelector((state) => state.status.status.status?.status);
    const user = useSelector((state) => state.auth.login?.currentUser);
    const myDetail = useSelector((state) => state.post.post?.myDetail);
    const yourStatus = useSelector(
        (state) => state.yourStatus.yourStatus.yourStatus?.yourstatus
    );
    const allYourStatus = useSelector(
        (state) => state.yourStatus.yourStatus.allYourStatus?.yourStatus
    );
    const [suaPost, setsuaPost] = useState(1);
    const yourIdDangKetNoi = status?.yourIdDangKetNoi;
    const [loading, setloading] = useState(1);

    // load
    useEffect(() => {
        if (user) {
            getYourStatus(user?._id, dispatch);
        }
    }, [user, status]);
    useEffect(() => {
        if (user) {
            getPost(user?._id, dispatch);
            getStatus(user?._id, dispatch);
        }
    }, [user]);
    useEffect(() => {
        if (yourIdDangKetNoi && yourIdDangKetNoi.length !== 0) {
            yourPost(yourIdDangKetNoi, dispatch, setloading);
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
    const vaiTro = yourDetail?.vaiTro;
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

        if (allYourStatus && allYourStatus.length !== 0) {
            const yourStatusGuiDi = allYourStatus.find(
                (item) => item.yourIdYeuCauKetNoi === user?._id
            );
            const id2 = yourStatusGuiDi?._id;
            deleteYourStatus(id2, dispatch);
        }

        const id2 = user?._id;
        deleteAllYourStatus(id2, dispatch);

        if (status?.dienThoai) {
            const yourstatusUser1 = {
                huyKetNoi: user?._id,
                hoTen: myDetail?.hoTen,
                namSinh: myDetail?.namSinh,
                queQuan: myDetail?.tinhQq,
                user: status?.yourIdDangKetNoi,
            };

            registerYourStatus(yourstatusUser1, dispatch);
        }
    };
    console.log("+vaiTro === 2", +vaiTro === 2);
    return (
        <div>
            <div>
                {!yourIdDangKetNoi ? (
                    <div></div>
                ) : (
                    <div className="container-yourDetail">
                        {+vaiTro === 2 ? (
                            <div className="ketNoiFake">
                                <h1>Yêu Cầu Kết Nối Của Bạn Đã Được Gửi Đi</h1>
                                <p>
                                    Xin Vui Lòng Đợi Trả Lời! <br /> Có thể đối
                                    phương đang bận và chưa kịp xem được yêu cầu
                                    kết nối của bạn!
                                </p>
                                <p>
                                    Nếu chờ lâu quá mà chưa có phản hồi! <br />
                                    Bạn có thể huỷ Yêu Cầu Kết Nối để kết nối
                                    với người khác!
                                </p>
                                <p>
                                    Còn rất nhiều người để bạn có thể làm quen!
                                </p>
                                <p>
                                    Trong lúc chờ đợi bạn có thể giới thiệu
                                    YeuAi.Online đến những người bạn độc thân
                                    của mình! Để có thể cùng nhau tìm người yêu
                                    hoặc chơi Mini Game quay số may mắn để nhận
                                    rất nhiều phần quà!
                                    <br />
                                    Cảm ơn bạn rất nhiều!
                                </p>
                                <h3 className="loinhanchophanhoi">
                                    CHÚC BẠN SỚM TÌM ĐƯỢC MỘT NỬA YÊU THƯƠNG !
                                </h3>
                                <button
                                    className="huyKetNoi"
                                    onClick={handleHuyKetNoi}
                                >
                                    Huỷ Kết Nối
                                </button>
                            </div>
                        ) : (
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
                                    <img
                                        src={avatar}
                                        className="myDetail-avatar"
                                    />
                                    <div className="myDetail-hoTen-cauNoiTamDac">
                                        <div className="myDetail-hoTen">
                                            {hoTen}
                                        </div>
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
                                    <div className="myTieuChi">
                                        Tình Trạng Hôn Nhân
                                    </div>
                                    <div className="myNoiDung">
                                        {tinhTrangHonNhan}
                                    </div>
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
                                        {xaQq}&nbsp;-&nbsp;{huyenQq}
                                        &nbsp;-&nbsp;
                                        {tinhQq}
                                    </div>
                                </div>
                                <div className="Container-myTieuChi-myNoiDung">
                                    <div className="myTieuChi">
                                        Hiện Đang Sinh Sống
                                    </div>
                                    <div className="myNoiDung">
                                        {xaDs}&nbsp;-&nbsp;{huyenDs}
                                        &nbsp;-&nbsp;
                                        {tinhDs}
                                    </div>
                                </div>
                                <div className="Container-myTieuChi-myNoiDung">
                                    <div className="myTieuChi">Tôn Giáo</div>
                                    <div className="myNoiDung">{tonGiao}</div>
                                </div>
                                <div className="Container-myTieuChi-myNoiDung">
                                    <div className="myTieuChi">Nghề Nghiệp</div>
                                    <div className="myNoiDung">
                                        {ngheNghiep}
                                    </div>
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
                                    <div className="myTieuChi">
                                        Giới thiệu thêm
                                    </div>
                                    <div className="myNoiDung">
                                        {gioiThieuThem}
                                    </div>
                                </div>
                                <div className="myMauNguoiYeuLyTuong">
                                    Mẫu Người Yêu Lý Tưởng
                                </div>
                                <div className="Container-myTieuChi-myNoiDung">
                                    <div className="myTieuChi">Giới Tính</div>
                                    <div className="myNoiDung">{gioiTinh2}</div>
                                </div>
                                <div className="Container-myTieuChi-myNoiDung">
                                    <div className="myTieuChi">
                                        Tình trạng hôn nhân
                                    </div>
                                    <div className="myNoiDung">
                                        {tinhTrangHonNhan2}
                                    </div>
                                </div>
                                <div className="Container-myTieuChi-myNoiDung">
                                    <div className="myTieuChi">
                                        Khu Vực Làm Quen
                                    </div>
                                    <div className="myNoiDung">
                                        {khuVucLamQuen2}
                                    </div>
                                </div>
                                <div className="Container-myTieuChi-myNoiDung">
                                    <div className="myTieuChi">Tôn Giáo</div>
                                    <div className="myNoiDung">{tonGiao2}</div>
                                </div>
                                <div className="Container-myTieuChi-myNoiDung">
                                    <div className="myTieuChi">Nghề Nghiệp</div>
                                    <div className="myNoiDung">
                                        {ngheNghiep2}
                                    </div>
                                </div>
                                <div className="Container-myTieuChi-myNoiDung">
                                    <div className="myTieuChi">Thu Nhập</div>
                                    <div className="myNoiDung">{thuNhap2}</div>
                                </div>
                                <div className="Container-myTieuChi-myNoiDung">
                                    <div className="myTieuChi">Tuổi Hợp</div>
                                    <div className="myNoiDung2">
                                        <div>Từ &nbsp;</div>
                                        <div>{tuoiHop2}</div>
                                        <div> &emsp;Đến &nbsp;</div>
                                        <div>{tuoiHop3}</div>
                                    </div>
                                </div>
                                <div className="Container-myTieuChi-myNoiDung">
                                    <div className="myTieuChi">
                                        Yêu Cầu Khác
                                    </div>
                                    <div className="myNoiDung">
                                        {yeucaukhac2}
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <button
                                            className="huyKetNoi"
                                            onClick={handleHuyKetNoi}
                                        >
                                            Huỷ Kết Nối
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
export default YourDangKetNoi;
