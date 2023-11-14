import "./ChonVaGuiYeuCau.scss";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    getAllPosts,
    updateStatusUser,
    getStatus,
    getPost,
    registerYourStatus,
    getYourStatus,
    updatePost,
} from "../../redux/apiRequest";
const ChonVaGuiYeuCau = () => {
    const dispatch = useDispatch();
    const myDetail = useSelector((state) => state.post.post?.myDetail);
    const user = useSelector((state) => state.auth.login?.currentUser);
    const allPosts = useSelector((state) => state.post.post?.allPosts);
    const status = useSelector((state) => state.status.status.status?.status);
    const yourStatus = useSelector(
        (state) => state.yourStatus.yourStatus.yourStatus?.yourstatus
    );
    const [indexId, setindexId] = useState(0);
    const [ketnoi, setketnoi] = useState(0);
    const [yourDetail, setyourDetail] = useState("");
    const [suaPost, setsuaPost] = useState(1);

    useEffect(() => {
        if (user) {
            getYourStatus(user?._id, dispatch);
        }
    }, [user, status]);
    useEffect(() => {
        if (user) {
            getStatus(user?._id, dispatch);
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
    useEffect(() => {
        const loadYourDetail = () => {
            if (allPosts) {
                setyourDetail(allPosts[indexId]);
            }
        };

        loadYourDetail();
    }, [indexId, allPosts]);
    // Ngau nhien

    const handleNgauNhien = () => {
        const a = allPosts.length;
        const e = Math.floor(Math.random() * a);

        setindexId(e);
    };

    // Quay Lai

    // const handleQuayLai = () => {
    //     const a = allPosts.length - 1;
    //     if (indexId > 0) {
    //         setindexId(indexId - 1);
    //     } else {
    //         setindexId(a);
    //     }
    // };
    // const indexIdTiepTheo = () => {
    //     const a = allPosts.length - 1;
    //     if (indexId < a) {
    //         setindexId(indexId + 1);
    //     } else {
    //         setindexId(0);
    //     }
    // };

    // Tiep Theo
    const handleKetNoi = () => {
        setketnoi(1);
        const statusId = status?._id;
        if (statusId) {
            const statusUser = {
                dienThoai: "",
                yourIdDangKetNoi: allPosts[indexId]?.user,
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
        if (allPosts) {
            const yourstatusUser = {
                yourIdYeuCauKetNoi: user?._id,
                user: allPosts[indexId]?.user,
                hoTen: hoTen,
                namSinh: namSinh,
                queQuan: tinhQq,
                dienThoai: user?.username,
            };
            console.log("yourstatusUser", yourstatusUser);
            registerYourStatus(yourstatusUser, dispatch);
            
        }
        
    };
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
    const vaiTro = yourDetail?.vaiTro;
    const ngaySinhRandoom = Math.floor(Math.random() * 29) + 1;
    const thangSinhRandoom = Math.floor(Math.random() * 11) + 1;
    const tuoiMin = +myDetail?.tuoiHop2;
    const tuoiMax = +myDetail?.tuoiHop3;
    const a = tuoiMax - tuoiMin;
    console.log("a", a);
    const namSinhRandoom = Math.floor(Math.random() * a) + tuoiMin;
    console.log("namSinhRandoom", namSinhRandoom);
    const chieuCaoRandom = Math.floor(Math.random() * 20) + 150;
    const canNangRandoom = Math.floor(Math.random() * 30) + 45;
    const tuoiHop3Random = +myDetail?.namSinh + 3;
    const tuoiHop2Random = +myDetail?.namSinh - 5;
    console.log("allPosts", allPosts);
    console.log("indexId", indexId);

    return (
        <div className="container-yourDetail">
            {allPosts && allPosts.length !== 0 ? (
                <div>
                    {(vaiTro && +vaiTro === 0) || (vaiTro && +vaiTro === 1) ? (
                        <div className="thongTinCaNhan">
                            <div>
                                <img
                                    src={banner}
                                    className="bannerThongTinCaNhan"
                                />
                            </div>
                            <div className="myDetail-avatar-hoTen-cauNoiTamDac">
                                <img src={avatar} className="myDetail-avatar" />
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
                                    {xaQq}&nbsp;-&nbsp;{huyenQq}&nbsp;-&nbsp;
                                    {tinhQq}
                                </div>
                            </div>
                            <div className="Container-myTieuChi-myNoiDung">
                                <div className="myTieuChi">
                                    Hiện Đang Sinh Sống
                                </div>
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
                                <div className="myNoiDung">{ngheNghiep2}</div>
                            </div>
                            <div className="Container-myTieuChi-myNoiDung">
                                <div className="myTieuChi">Thu Nhập</div>
                                <div className="myNoiDung">{thuNhap2}</div>
                            </div>
                            <div className="Container-myTieuChi-myNoiDung">
                                <div className="myTieuChi">Tuổi Hợp</div>
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
                                <div>
                                    <div>
                                        <div>
                                            {/* <button
                                    className="boQua"
                                    onClick={handleQuayLai}
                                >
                                    Quay Lại
                                </button> */}
                                            <button
                                                className="suaThongTin"
                                                onClick={handleNgauNhien}
                                            >
                                                Ghép Ngẫu Nhiên
                                            </button>
                                            <button
                                                className="dangXuat"
                                                onClick={handleKetNoi}
                                            >
                                                Mời Kết Nối
                                            </button>
                                            {/* <button
                                    className="boQua"
                                    onClick={indexIdTiepTheo}
                                >
                                    Tiếp Theo
                                </button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                    {vaiTro && +vaiTro === 2 ? (
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
                                <div className="myNoiDung">
                                    {myDetail?.gioiTinh2}
                                </div>
                            </div>
                            <div className="Container-myTieuChi-myNoiDung">
                                <div className="myTieuChi">
                                    Tình Trạng Hôn Nhân
                                </div>
                                <div className="myNoiDung">
                                    {myDetail?.tinhTrangHonNhan2}
                                </div>
                            </div>
                            <div className="Container-myTieuChi-myNoiDung">
                                <div className="myTieuChi">Ngày Sinh</div>
                                <div className="myNoiDung">
                                    <div>
                                        {ngaySinhRandoom}/{thangSinhRandoom}/
                                        {namSinhRandoom}
                                    </div>
                                </div>
                            </div>
                            <div className="Container-myTieuChi-myNoiDung">
                                <div className="myTieuChi">Quê Quán</div>
                                <div className="myNoiDung">
                                    {myDetail?.xaQq}&nbsp;-&nbsp;
                                    {myDetail?.huyenQq}&nbsp;-&nbsp;
                                    {myDetail?.tinhQq}
                                </div>
                            </div>
                            <div className="Container-myTieuChi-myNoiDung">
                                <div className="myTieuChi">
                                    Hiện Đang Sinh Sống
                                </div>
                                <div className="myNoiDung">
                                    {myDetail?.xaDs}&nbsp;-&nbsp;
                                    {myDetail?.huyenDs}&nbsp;-&nbsp;
                                    {myDetail?.tinhDs}
                                </div>
                            </div>
                            <div className="Container-myTieuChi-myNoiDung">
                                <div className="myTieuChi">Tôn Giáo</div>
                                <div className="myNoiDung">
                                    {myDetail?.tonGiao2}
                                </div>
                            </div>
                            <div className="Container-myTieuChi-myNoiDung">
                                <div className="myTieuChi">Nghề Nghiệp</div>
                                <div className="myNoiDung">
                                    {myDetail?.ngheNghiep2}
                                </div>
                            </div>
                            <div className="Container-myTieuChi-myNoiDung">
                                <div className="myTieuChi">Thu Nhập</div>
                                <div className="myNoiDung">
                                    {myDetail?.thuNhap2}
                                </div>
                            </div>
                            <div className="Container-myTieuChi-myNoiDung">
                                <div className="myTieuChi">Đặc Điểm</div>
                                <div className="myNoiDung2">
                                    <div>Chiều cao {chieuCaoRandom} (cm)</div>
                                    <div>&emsp;</div>
                                    <div>Cân nặng {canNangRandoom} (kg)</div>
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
                                <div className="myNoiDung">
                                    {myDetail?.gioiTinh}
                                </div>
                            </div>
                            <div className="Container-myTieuChi-myNoiDung">
                                <div className="myTieuChi">
                                    Tình trạng hôn nhân
                                </div>
                                <div className="myNoiDung">
                                    {myDetail?.tinhTrangHonNhan}
                                </div>
                            </div>
                            <div className="Container-myTieuChi-myNoiDung">
                                <div className="myTieuChi">
                                    Khu Vực Làm Quen
                                </div>
                                <div className="myNoiDung">
                                    {myDetail?.khuVucLamQuen2}
                                </div>
                            </div>
                            <div className="Container-myTieuChi-myNoiDung">
                                <div className="myTieuChi">Tôn Giáo</div>
                                <div className="myNoiDung">
                                    {myDetail?.tonGiao}
                                </div>
                            </div>
                            <div className="Container-myTieuChi-myNoiDung">
                                <div className="myTieuChi">Nghề Nghiệp</div>
                                <div className="myNoiDung">
                                    {myDetail?.ngheNghiep}
                                </div>
                            </div>
                            <div className="Container-myTieuChi-myNoiDung">
                                <div className="myTieuChi">Thu Nhập</div>
                                <div className="myNoiDung">
                                    {myDetail?.thuNhap}
                                </div>
                            </div>
                            <div className="Container-myTieuChi-myNoiDung">
                                <div className="myTieuChi">Tuổi Hợp</div>
                                <div className="myNoiDung2">
                                    <div>Từ Năm &emsp;</div>
                                    <div>{tuoiHop2Random}</div>
                                    <div> &emsp;Đến Năm&emsp;</div>
                                    <div>{tuoiHop3Random}</div>
                                </div>
                            </div>
                            <div className="Container-myTieuChi-myNoiDung">
                                <div className="myTieuChi">Yêu Cầu Khác</div>
                                <div className="myNoiDung">{yeucaukhac2}</div>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            {/* <button
                                    className="boQua"
                                    onClick={handleQuayLai}
                                >
                                    Quay Lại
                                </button> */}
                                            <button
                                                className="suaThongTin"
                                                onClick={handleNgauNhien}
                                            >
                                                Ghép Ngẫu Nhiên
                                            </button>
                                            <button
                                                className="dangXuat"
                                                onClick={handleKetNoi}
                                            >
                                                Mời Kết Nối
                                            </button>
                                            {/* <button
                                    className="boQua"
                                    onClick={indexIdTiepTheo}
                                >
                                    Tiếp Theo
                                </button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            ) : (
                <div className="LocDoituongxemmat">
                    <div >
                        Danh Sách Đối Tượng Xem Mắt Phù Hợp Yêu Cầu Của Bạn
                    </div>
                    <div>---Đang Cập Nhật---</div>
                </div>
            )}
        </div>
    );
};
export default ChonVaGuiYeuCau;
