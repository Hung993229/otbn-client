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
} from "../redux/apiRequest";
import zaloLogo from "../assets/images/zaloLogo.png";
import DangHenHo from "../KetBan/DangHenHo";

const MyDetail = (props) => {
    const { suaPost, setsuaPost } = props;
    const user = useSelector((state) => state.auth.login?.currentUser);
    const myDetail = useSelector((state) => state.post.post?.myDetail);
    const yourDetail = useSelector((state) => state.post.post?.yourDetail);

    const allYourStatus = useSelector(
        (state) => state.yourStatus.yourStatus.allYourStatus?.yourStatus
    );
    const allYourStatusDongY = useSelector(
        (state) => state.yourStatus.yourStatus.allYourStatus?.message
    );
    const status = useSelector((state) => state.status.status.status?.status);
    const [yourStatusUserId, setyourStatusUserId] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log("allYourStatus", allYourStatus);
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
    const handleTuChoiKetNoi = (id) => {
        console.log("id", id);
        deleteYourStatus(id, dispatch);

        getYourStatus(user?._id, dispatch);
    };
    const handleDongYKetNoi = (userId) => {
        const yourzalo = allYourStatus.find((item) => item.user === userId);
        const id = status?._id;
        const statusUser = {
            dienThoai: yourzalo.dienThoai,
            yourIdDangKetNoi: yourzalo.yourIdYeuCauKetNoi,
            user: user._id,
        };
        console.log("yourzalo", yourzalo);
        updateStatusUser(statusUser, id, dispatch);
        const id2 = user?._id;
        deleteAllYourStatus(id2, dispatch);
        setyourStatusUserId(0);
        const newPost = {
            myStatus: 1,
        };
        const id3 = myDetail?._id;

        updatePost(newPost, id3, dispatch, setsuaPost);
    };
    const handleXemChiTiet = (userId) => {
        console.log("id", userId);
        yourPost(userId, dispatch);
        setyourStatusUserId(userId);
    };
    const dienThoai = status?.dienThoai;
    return (
        <div>
            {dienThoai && dienThoai.length !== 0 ? (
                <div>
                    <div>Chúc Mừng 2 Bạn Đã Đồng Ý Tìm Hiểu Thêm Về Nhau!</div>
                    <div>Hãy Kết Bạn ZaLo Để Trò Chuyện Nhiều Hơn Nhé!</div>
                    <div>
                        <a
                            href={`https://zalo.me/${dienThoai}`}
                            target="_blank"
                        >
                            <img src={zaloLogo} width="150" height="150" />
                        </a>
                    </div>
                    <div>
                        Mong Rằng 2 Bạn Sẽ Có Một Tình Yêu Đẹp Và Sớm Về Chung
                        Một Nhà!
                    </div>
                    <div>
                        Ngày Hạnh Phúc Nhớ Thông Báo Tới Chúng Mình Để Cùng Chia
                        Sẻ Niềm Vui Nhé!
                    </div>
                    <DangHenHo />
                </div>
            ) : (
                <div>
                    {allYourStatus && allYourStatus.length !== 0 ? (
                        <div>
                            <div>DANH SÁCH LỜI MỜI KẾT BẠN</div>
                            {allYourStatus?.map((item) => {
                                return (
                                    <div key={item._id}>
                                        <div className="detail-your-list">
                                            <div>{item.hoTen}</div>
                                            <div>Sinh Năm: {item.namSinh}</div>
                                            <div>Quê: {item.queQuan}</div>
                                            <button
                                                className="boQua"
                                                onClick={() =>
                                                    handleXemChiTiet(
                                                        item.yourIdYeuCauKetNoi
                                                    )
                                                }
                                            >
                                                Xem Chi Tiết
                                            </button>

                                            <button
                                                className="xinLamQuen"
                                                onClick={() =>
                                                    handleDongYKetNoi(item.user)
                                                }
                                            >
                                                Đồng Ý Kết Nối
                                            </button>
                                            <button
                                                className="boQua"
                                                onClick={() =>
                                                    handleTuChoiKetNoi(item._id)
                                                }
                                            >
                                                Từ Chối Kết Nối
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="container-myDetail">
                            <div className="banner">
                                <div>
                                    <img src={banner} />
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
                                <div className="myNoiDung">
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
                                <div className="myTieuChi">
                                    Khoảng Tuổi Muốn Làm Quen
                                </div>
                                <div className="myNoiDung">
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
                            <button
                                className="xinLamQuen"
                                onClick={() => setsuaPost(1)}
                            >
                                Sửa Thông Tin
                            </button>
                        </div>
                    )}
                </div>
            )}

            <div>
                {yourStatusUserId === 0 ? (
                    <div></div>
                ) : (
                    <div className="container-yourDetail">
                        <div className="banner">
                            <div>
                                <img src={ybanner} />
                            </div>
                        </div>
                        <div className="yourDetail-avatar-hoTen-cauNoiTamDac">
                            <img src={yavatar} className="yourDetail-avatar" />
                            <div className="yourDetail-hoTen-cauNoiTamDac">
                                <div className="yourDetail-hoTen">{yhoTen}</div>
                                <div className="yourdetail-cauNoiTamDac">
                                    {ycauNoiTamDac}
                                </div>
                            </div>
                        </div>
                        <div className="Container-yourTieuChi-yourNoiDung">
                            <div className="yourTieuChi">Giới Tính</div>
                            <div className="yourNoiDung">{ygioiTinh}</div>
                        </div>
                        <div className="Container-yourTieuChi-yourNoiDung">
                            <div className="yourTieuChi">
                                Tình Trạng Hôn Nhân
                            </div>
                            <div className="yourNoiDung">
                                {ytinhTrangHonNhan}
                            </div>
                        </div>
                        <div className="Container-yourTieuChi-yourNoiDung">
                            <div className="yourTieuChi">Ngày Sinh</div>
                            <div className="yourNoiDung">
                                <div>
                                    {yngaySinh}/{ythangSinh}/{ynamSinh}
                                </div>
                            </div>
                        </div>
                        <div className="Container-yourTieuChi-yourNoiDung">
                            <div className="yourTieuChi">Quê Quán</div>
                            <div className="yourNoiDung">
                                {yxaQq}&nbsp;-&nbsp;{yhuyenQq}&nbsp;-&nbsp;
                                {ytinhQq}
                            </div>
                        </div>
                        <div className="Container-yourTieuChi-yourNoiDung">
                            <div className="yourTieuChi">
                                Hiện Đang Sinh Sống
                            </div>
                            <div className="yourNoiDung">
                                {yxaDs}&nbsp;-&nbsp;{yhuyenDs}&nbsp;-&nbsp;
                                {ytinhDs}
                            </div>
                        </div>
                        <div className="Container-yourTieuChi-yourNoiDung">
                            <div className="yourTieuChi">Tôn Giáo</div>
                            <div className="yourNoiDung">{ytonGiao}</div>
                        </div>
                        <div className="Container-yourTieuChi-yourNoiDung">
                            <div className="yourTieuChi">Nghề Nghiệp</div>
                            <div className="yourNoiDung">{yngheNghiep}</div>
                        </div>
                        <div className="Container-yourTieuChi-yourNoiDung">
                            <div className="yourTieuChi">Thu Nhập</div>
                            <div className="yourNoiDung">{ythuNhap}</div>
                        </div>
                        <div className="Container-yourTieuChi-yourNoiDung">
                            <div className="yourTieuChi">Đặc Điểm</div>
                            <div className="yourNoiDung">
                                <div>Chiều cao {ychieuCao} (cm)</div>
                                <div>&emsp;</div>
                                <div>Cân nặng {ycanNang} (kg)</div>
                            </div>
                        </div>
                        <div className="Container-yourTieuChi-yourNoiDung">
                            <div className="yourTieuChi">Giới thiệu thêm</div>
                            <div className="yourNoiDung">{ygioiThieuThem}</div>
                        </div>
                        <div className="yourMauNguoiYeuLyTuong">
                            Mẫu Người Yêu Lý Tưởng
                        </div>
                        <div className="Container-yourTieuChi-yourNoiDung">
                            <div className="yourTieuChi">Giới Tính</div>
                            <div className="yourNoiDung">{ygioiTinh2}</div>
                        </div>
                        <div className="Container-yourTieuChi-yourNoiDung">
                            <div className="yourTieuChi">
                                Tình trạng hôn nhân
                            </div>
                            <div className="yourNoiDung">
                                {ytinhTrangHonNhan2}
                            </div>
                        </div>
                        <div className="Container-yourTieuChi-yourNoiDung">
                            <div className="yourTieuChi">Khu Vực Làm Quen</div>
                            <div className="yourNoiDung">{ykhuVucLamQuen2}</div>
                        </div>
                        <div className="Container-yourTieuChi-yourNoiDung">
                            <div className="yourTieuChi">Tôn Giáo</div>
                            <div className="yourNoiDung">{ytonGiao2}</div>
                        </div>
                        <div className="Container-yourTieuChi-yourNoiDung">
                            <div className="yourTieuChi">Nghề Nghiệp</div>
                            <div className="yourNoiDung">{yngheNghiep2}</div>
                        </div>
                        <div className="Container-yourTieuChi-yourNoiDung">
                            <div className="yourTieuChi">Thu Nhập</div>
                            <div className="yourNoiDung">{ythuNhap2}</div>
                        </div>
                        <div className="Container-yourTieuChi-yourNoiDung">
                            <div className="yourTieuChi">Tuổi Hợp</div>
                            <div className="yourNoiDung">
                                <div>Từ Năm &emsp;</div>
                                <div>{ytuoiHop2}</div>
                                <div> &emsp;Đến Năm&emsp;</div>
                                <div>{ytuoiHop3}</div>
                            </div>
                        </div>
                        <div className="Container-yourTieuChi-yourNoiDung">
                            <div className="yourTieuChi">Yêu Cầu Khác</div>
                            <div className="yourNoiDung">{yyeucaukhac2}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default MyDetail;
