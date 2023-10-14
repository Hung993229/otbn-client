import "./YourDetail.scss";

import {
    yourPost,
    getAllPosts,
    updateStatusUser,
    registerStatus,
    getStatus,
    getPost,
    registerYourStatus,
    getYourStatus,
    deleteYourStatus,
    updatePost,
} from "../redux/apiRequest";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";

const YourDetail = () => {
    const myDetail = useSelector((state) => state.post.post?.myDetail);
    const yourDetail2 = useSelector((state) => state.post.post?.yourDetail);
    const user = useSelector((state) => state.auth.login?.currentUser);
    const status = useSelector((state) => state.status.status.status?.status);
    const yourStatus = useSelector(
        (state) => state.yourStatus.yourStatus.yourStatus?.yourstatus
    );
    const [indexId, setindexId] = useState(0);

    const [yourDetail, setyourDetail] = useState("");
    const [ketnoi, setketnoi] = useState(0);
    const allPosts = useSelector((state) => state.post.post?.allPosts);
    const [suaPost, setsuaPost] = useState(1);
    const dispatch = useDispatch();
    console.log("yourDetail2", yourDetail2);
    console.log("yourDetail", yourDetail);
    // const navigate = useNavigate();

    // loc user
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
        const getTatCaPostPhuHop = () => {
            const gioiTinh2 = myDetail?.gioiTinh2;
            const tinhTrangHonNhan2 = myDetail?.tinhTrangHonNhan2;
            const tonGiao2 = myDetail?.tonGiao2;
            const thuNhap2 = myDetail?.thuNhap2;
            const tuoiHop2 = myDetail?.tuoiHop2;
            const tuoiHop3 = myDetail?.tuoiHop3;
            const huyenDs = myDetail?.huyenDs;
            const huyenQq = myDetail?.huyenQq;
            getAllPosts(
                dispatch,
                gioiTinh2,
                tinhTrangHonNhan2,
                tonGiao2,
                thuNhap2,
                tuoiHop2,
                tuoiHop3,
                huyenDs,
                huyenQq
            );
        };
        getTatCaPostPhuHop();
    }, [myDetail]);

    // Du Lieu Hien Thi
    const yourIdDangKetNoi = status?.yourIdDangKetNoi;
    useEffect(
        () => {
            const loadYourDetail = () => {
                if (yourIdDangKetNoi) {
                    yourPost(yourIdDangKetNoi, dispatch);
                    if (yourDetail2) {
                        setyourDetail(yourDetail2);
                    }
                } else {
                    if (allPosts) {
                        setyourDetail(allPosts[indexId]);
                    }
                }
            };

            loadYourDetail();
        },
        [status, indexId, allPosts, yourDetail2]
       
    );

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
    // Quay Lai
    const handleQuayLai = () => {
        const a = allPosts.length - 1;
        if (indexId > 0) {
            setindexId(indexId - 1);
        } else {
            setindexId(a);
        }
    };
    const indexIdTiepTheo = () => {
        const a = allPosts.length - 1;
        if (indexId < a) {
            setindexId(indexId + 1);
        } else {
            setindexId(0);
        }
    };
    // Tiep Theo
    const handleKetNoi = () => {
        setketnoi(1);
        const statusId = status?._id;
        if (statusId) {
            const statusUser = {
                dienThoai: "",
                yourIdDangKetNoi: allPosts[indexId]?._id,
                user: user?._id,
            };
            const id = status?._id;
            updateStatusUser(statusUser, id, dispatch);
            const newPost = {
                myStatus: 1,
            };
            const id3 = myDetail?._id;
            updatePost(newPost, id3, dispatch, setsuaPost);
        }
        if (!statusId) {
            const statusUser = {
                dienThoai: "",
                yourIdDangKetNoi: allPosts[indexId]?._id,
                user: user?._id,
            };
            registerStatus(statusUser, dispatch);
            const newPost = {
                myStatus: 1,
            };
            const id3 = myDetail?._id;
            updatePost(newPost, id3, dispatch, setsuaPost);
        }

        const yourstatusUser = {
            yourIdYeuCauKetNoi: user?._id,
            user: allPosts[indexId]?.user,
            hoTen: hoTen,
            namSinh: namSinh,
            queQuan: tinhQq,
            dienThoai: user?.username,
        };
        registerYourStatus(yourstatusUser, dispatch);

        // updateStatusUser(statusUser, id, dispatch);
    };
    const handleHuyKetNoi = () => {
        setketnoi(0);
        const statusUser = {
            dienThoai: "",
            yourIdDangKetNoi: "",
            user: user._id,
        };
        const id = status._id;
        updateStatusUser(statusUser, id, dispatch);
        if (!yourStatus._id) {
            const id2 = yourStatus?._id;
            deleteYourStatus(id2, dispatch);
        }
        const newPost = {
            myStatus: 0,
        };
        const id3 = myDetail?._id;
        updatePost(newPost, id3, dispatch, setsuaPost);
    };
    console.log("yourStatus", yourStatus);

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
                    {!yourIdDangKetNoi ? (
                        <div>
                            {ketnoi === 0 ? (
                                <div>
                                    <button
                                        className="boQua"
                                        onClick={handleQuayLai}
                                    >
                                        Quay Lại
                                    </button>
                                    <button
                                        className="xinLamQuen"
                                        onClick={handleKetNoi}
                                    >
                                        Kết Nối
                                    </button>
                                    <button
                                        className="boQua"
                                        onClick={indexIdTiepTheo}
                                    >
                                        Tiếp Theo
                                    </button>
                                </div>
                            ) : (
                                <button
                                    className="xinLamQuen"
                                    onClick={handleHuyKetNoi}
                                >
                                    Huỷ Kết Nối
                                </button>
                            )}
                        </div>
                    ) : (
                        <button
                            className="xinLamQuen"
                            onClick={handleHuyKetNoi}
                        >
                            Huỷ Kết Nối
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
export default YourDetail;
