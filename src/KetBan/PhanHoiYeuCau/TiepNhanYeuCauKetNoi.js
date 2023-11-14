import "./TiepNhanYeuCauKetNoi.scss";
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
    registerYourStatus,
} from "../../redux/apiRequest";

const TiepNhanYeuCauKetNoi = () => {
    const user = useSelector((state) => state.auth.login?.currentUser);
    const status = useSelector((state) => state.status.status.status?.status);
    const allYourStatus = useSelector(
        (state) => state.yourStatus.yourStatus.allYourStatus?.yourStatus
    );
    const myDetail = useSelector((state) => state.post.post?.myDetail);
    const yourDetail = useSelector((state) => state.post.post?.yourDetail);
    const dispatch = useDispatch();
    const [yourStatusUserId, setyourStatusUserId] = useState(0);
    const { suaPost, setsuaPost } = useState(0);

    useEffect(() => {
        if (!user) {
            console.log("chua co userId");
        }
        if (user) {
            getStatus(user?._id, dispatch);
            getPost(user?._id, dispatch);
        }
    }, [user, dispatch]);
    useEffect(() => {
        getYourStatus(user?._id, dispatch);
    }, [dispatch, user]);

    const yourIdYeuCauKetNoi2 = allYourStatus?.filter(
        (item) => item.yourIdYeuCauKetNoi
    );
    console.log("yourIdYeuCauKetNoi2", yourIdYeuCauKetNoi2);
    const handleTuChoiKetNoi = (userId) => {
        const yourstatusUser1 = {
            yourIdYeuCauKetNoi: "",
            dongYKetNoi: "",
            tuChoiKetNoi: user?._id,
            user: userId,
            hoTen: myDetail.hoTen,
            namSinh: myDetail.namSinh,
            queQuan: myDetail.tinhQq,
            dienThoai: "",
        };

        registerYourStatus(yourstatusUser1, dispatch);
        const yourzalo = allYourStatus.find(
            (item) => item.yourIdYeuCauKetNoi === userId
        );
        const id = yourzalo._id;

        deleteYourStatus(id, dispatch);
    };
    const handleDongYKetNoi = (userId) => {
        const yourzalo = allYourStatus.find(
            (item) => item.yourIdYeuCauKetNoi === userId
        );
        const id = status?._id;
        const statusUser = {
            dienThoai: yourzalo.dienThoai,
            yourIdDangKetNoi: yourzalo.yourIdYeuCauKetNoi,
            user: user._id,
        };
        updateStatusUser(statusUser, id, dispatch);
        const id2 = user?._id;
        deleteAllYourStatus(id2, dispatch);
        setyourStatusUserId(0);
        const newPost = {
            myStatus: 1,
        };
        const id3 = myDetail?._id;

        updatePost(newPost, id3, dispatch, setsuaPost);

        const yourstatusUser = {
            yourIdYeuCauKetNoi: "",
            dongYKetNoi: user?._id,
            tuChoiKetNoi: "",
            user: userId,
            hoTen: myDetail.hoTen,
            namSinh: myDetail.namSinh,
            queQuan: myDetail.tinhQq,
            dienThoai: user?.username,
        };
        registerYourStatus(yourstatusUser, dispatch);
    };
    const handleXemChiTiet = (userId) => {
        console.log("id", userId);
        yourPost(userId, dispatch);
        setyourStatusUserId(userId);
    };
    // yourDetai Chi Tiet

    const ybanner = yourDetail?.banner;
    const yavatar = yourDetail?.avatar;
    const yhoTen = yourDetail?.hoTen;
    const ycauNoiTamDac = yourDetail?.cauNoiTamDac;
    const ygioiTinh = yourDetail?.gioiTinh;
    const ytinhTrangHonNhan = yourDetail?.tinhTrangHonNhan;
    const yngaySinh = yourDetail?.ngaySinh;
    const ythangSinh = yourDetail?.thangSinh;
    const ynamSinh = yourDetail?.namSinh;
    const ytinhQq = yourDetail?.tinhQq;
    const yhuyenQq = yourDetail?.huyenQq;
    const yxaQq = yourDetail?.xaQq;
    const ytinhDs = yourDetail?.tinhDs;
    const yhuyenDs = yourDetail?.huyenDs;
    const yxaDs = yourDetail?.xaDs;
    const ytonGiao = yourDetail?.tonGiao;
    const yngheNghiep = yourDetail?.ngheNghiep;
    const ythuNhap = yourDetail?.thuNhap;
    const ychieuCao = yourDetail?.chieuCao;
    const ycanNang = yourDetail?.canNang;
    const ygioiThieuThem = yourDetail?.gioiThieuThem;
    const ygioiTinh2 = yourDetail?.gioiTinh2;
    const ytinhTrangHonNhan2 = yourDetail?.tinhTrangHonNhan2;
    const ykhuVucLamQuen2 = yourDetail?.khuVucLamQuen2;
    const ytonGiao2 = yourDetail?.tonGiao2;
    const yngheNghiep2 = yourDetail?.ngheNghiep2;
    const ythuNhap2 = yourDetail?.thuNhap2;
    const ytuoiHop2 = yourDetail?.tuoiHop2;
    const ytuoiHop3 = yourDetail?.tuoiHop3;
    const yyeucaukhac2 = yourDetail?.yeucaukhac2;
    return (
        <div>
            <div>
                <h1>DANH SÁCH LỜI MỜI KẾT BẠN</h1>
                <div className="detail-your-list">
                    {yourIdYeuCauKetNoi2?.map((item) => {
                        return (
                            <div key={item._id} className="loiMoiKetNoi">
                                <div className="detail-your">
                                    <div>{item.hoTen}</div>
                                    <div>Sinh Năm: {item.namSinh}</div>
                                    <div>Quê: {item.queQuan}</div>
                                </div>
                                <div className="detail-your2">
                                    <button
                                        className="xemChiTietHomThu"
                                        onClick={() =>
                                            handleXemChiTiet(
                                                item.yourIdYeuCauKetNoi
                                            )
                                        }
                                    >
                                        Xem Chi Tiết
                                    </button>
                                    <button
                                        className="dongYKetNoiHomThu"
                                        onClick={() =>
                                            handleDongYKetNoi(
                                                item.yourIdYeuCauKetNoi
                                            )
                                        }
                                    >
                                        Đồng Ý Kết Nối
                                    </button>
                                    <button
                                        className="tuChoiKetNoiHomThu"
                                        onClick={() =>
                                            handleTuChoiKetNoi(
                                                item.yourIdYeuCauKetNoi
                                            )
                                        }
                                    >
                                        Từ Chối Kết Nối
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div>
                    {yourStatusUserId === 0 ? (
                        <div></div>
                    ) : (
                        <div className="container-yourDetail">
                            <div className="thongTinCaNhan">
                                <div>
                                    <img
                                        src={ybanner}
                                        className="bannerThongTinCaNhan"
                                    />
                                </div>
                                <div className="myDetail-avatar-hoTen-cauNoiTamDac yourDetail-avatar-hoTen-cauNoiTamDac-homThu">
                                    <img
                                        src={yavatar}
                                        className=" yourDetail-avatar-homThu"
                                    />
                                    <div className="myDetail-hoTen-cauNoiTamDac yourDetail-hoTen-cauNoiTamDac-homThu">
                                        <div className=" yourDetail-hoTen-homThu">
                                            {yhoTen}
                                        </div>
                                        <div className="yourdetail-cauNoiTamDac-homThu">
                                            {ycauNoiTamDac}
                                        </div>
                                    </div>
                                </div>
                                <div className="Container-myTieuChi-myNoiDung">
                                    <div className="myTieuChi">Giới Tính</div>
                                    <div className="myNoiDung">{ygioiTinh}</div>
                                </div>
                                <div className="Container-myTieuChi-myNoiDung">
                                    <div className="myTieuChi">
                                        Tình Trạng Hôn Nhân
                                    </div>
                                    <div className="myNoiDung">
                                        {ytinhTrangHonNhan}
                                    </div>
                                </div>
                                <div className="Container-myTieuChi-myNoiDung">
                                    <div className="myTieuChi">Ngày Sinh</div>
                                    <div className="myNoiDung">
                                        <div>
                                            {yngaySinh}/{ythangSinh}/{ynamSinh}
                                        </div>
                                    </div>
                                </div>
                                <div className="Container-myTieuChi-myNoiDung">
                                    <div className="myTieuChi">Quê Quán</div>
                                    <div className="myNoiDung">
                                        {yxaQq}&nbsp;-&nbsp;{yhuyenQq}
                                        &nbsp;-&nbsp;
                                        {ytinhQq}
                                    </div>
                                </div>
                                <div className="Container-myTieuChi-myNoiDung">
                                    <div className="myTieuChi">
                                        Hiện Đang Sinh Sống
                                    </div>
                                    <div className="myNoiDung">
                                        {yxaDs}&nbsp;-&nbsp;{yhuyenDs}
                                        &nbsp;-&nbsp;
                                        {ytinhDs}
                                    </div>
                                </div>
                                <div className="Container-myTieuChi-myNoiDung">
                                    <div className="myTieuChi">Tôn Giáo</div>
                                    <div className="myNoiDung">{ytonGiao}</div>
                                </div>
                                <div className="Container-myTieuChi-myNoiDung">
                                    <div className="myTieuChi">Nghề Nghiệp</div>
                                    <div className="myNoiDung">
                                        {yngheNghiep}
                                    </div>
                                </div>
                                <div className="Container-myTieuChi-myNoiDung">
                                    <div className="myTieuChi">Thu Nhập</div>
                                    <div className="myNoiDung">{ythuNhap}</div>
                                </div>
                                <div className="Container-myTieuChi-myNoiDung">
                                    <div className="myTieuChi">Đặc Điểm</div>
                                    <div className="myNoiDung2">
                                        <div>Chiều cao {ychieuCao} (cm)</div>
                                        <div>&emsp;</div>
                                        <div>Cân nặng {ycanNang} (kg)</div>
                                    </div>
                                </div>
                                <div className="Container-myTieuChi-myNoiDung">
                                    <div className="myTieuChi">
                                        Giới thiệu thêm
                                    </div>
                                    <div className="myNoiDung">
                                        {ygioiThieuThem}
                                    </div>
                                </div>
                                <div className="myMauNguoiYeuLyTuong">
                                    Mẫu Người Yêu Lý Tưởng
                                </div>
                                <div className="Container-myTieuChi-myNoiDung">
                                    <div className="myTieuChi">Giới Tính</div>
                                    <div className="myNoiDung">
                                        {ygioiTinh2}
                                    </div>
                                </div>
                                <div className="Container-myTieuChi-myNoiDung">
                                    <div className="myTieuChi">
                                        Tình trạng hôn nhân
                                    </div>
                                    <div className="myNoiDung">
                                        {ytinhTrangHonNhan2}
                                    </div>
                                </div>
                                <div className="Container-myTieuChi-myNoiDung">
                                    <div className="myTieuChi">
                                        Khu Vực Làm Quen
                                    </div>
                                    <div className="myNoiDung">
                                        {ykhuVucLamQuen2}
                                    </div>
                                </div>
                                <div className="Container-myTieuChi-myNoiDung">
                                    <div className="myTieuChi">Tôn Giáo</div>
                                    <div className="myNoiDung">{ytonGiao2}</div>
                                </div>
                                <div className="Container-myTieuChi-myNoiDung">
                                    <div className="myTieuChi">Nghề Nghiệp</div>
                                    <div className="myNoiDung">
                                        {yngheNghiep2}
                                    </div>
                                </div>
                                <div className="Container-myTieuChi-myNoiDung">
                                    <div className="myTieuChi">Thu Nhập</div>
                                    <div className="myNoiDung">{ythuNhap2}</div>
                                </div>
                                <div className="Container-myTieuChi-myNoiDung">
                                    <div className="myTieuChi">Tuổi Hợp</div>
                                    <div className="myNoiDung2">
                                        <div>Từ Năm &emsp;</div>
                                        <div>{ytuoiHop2}</div>
                                        <div> &emsp;Đến Năm&emsp;</div>
                                        <div>{ytuoiHop3}</div>
                                    </div>
                                </div>
                                <div className="Container-myTieuChi-myNoiDung">
                                    <div className="myTieuChi">
                                        Yêu Cầu Khác
                                    </div>
                                    <div className="myNoiDung">
                                        {yyeucaukhac2}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default TiepNhanYeuCauKetNoi;
