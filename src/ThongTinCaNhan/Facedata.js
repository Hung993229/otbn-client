import "./Facedata.scss";
import CommonUtils from "../component/CommonUtils";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerPost } from "../redux/apiRequest";
import { useEffect } from "react";

const Facedata = (props) => {
    const { taodata, settaodata } = props;
    const user = useSelector((state) => state.auth.login.currentUser);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [previewAvatar, setpreviewAvatar] = useState();
    const [previewBanner, setpreviewBanner] = useState();

    // newPost
    const [banner, setBanner] = useState();
    const [avatar, setAvatar] = useState();
    const [hoTen, sethoTen] = useState("Họ Và Tên Ngẫu Nhiên");
    const [cauNoiTamDac, setcauNoiTamDac] = useState(
        "Thời gian thích hợp gặp một người thích hợp là Hạnh Phúc"
    );
    const [gioiTinh, setgioiTinh] = useState();
    const [tinhTrangHonNhan, settinhTrangHonNhan] = useState();
    // ngay sinh
    const [ngaySinh, setngaySinh] = useState();
    const [thangSinh, setthangSinh] = useState();
    const [namSinh, setnamSinh] = useState();
    // Que Quan
    const [tinhQq, settinhQq] = useState();
    const [huyenQq, sethuyenQq] = useState();
    const [xaQq, setxaQq] = useState();
    // Hien Dang Song
    const [tinhDs, settinhDs] = useState();
    const [huyenDs, sethuyenDs] = useState();
    const [xaDs, setxaDs] = useState();

    const [tonGiao, settonGiao] = useState();
    const [ngheNghiep, setngheNghiep] = useState();
    const [thuNhap, setthuNhap] = useState();
    const [chieuCao, setchieuCao] = useState();
    const [canNang, setcanNang] = useState();
    const [gioiThieuThem, setgioiThieuThem] = useState(
        "Không mong gì nhiều chỉ mong gặp được người biết yêu thương, tôn trọng nhau!"
    );

    // Mau nguoi yeu ly tuong
    const [gioiTinh2, setgioiTinh2] = useState();
    const [tinhTrangHonNhan2, settinhTrangHonNhan2] = useState();
    const [khuVucLamQuen2, setkhuVucLamQuen2] = useState();
    const [tonGiao2, settonGiao2] = useState();
    const [ngheNghiep2, setngheNghiep2] = useState();
    const [thuNhap2, setthuNhap2] = useState();
    const [tuoiHop2, settuoiHop2] = useState();
    const [tuoiHop3, settuoiHop3] = useState();
    const [yeucaukhac2, setyeucaukhac2] = useState(
        "Không mong gì nhiều chỉ mong gặp được người biết yêu thương, tôn trọng nhau!"
    );

    // avatar
    useEffect(() => {
        return () => {
            previewAvatar && URL.revokeObjectURL(previewAvatar.preview);
        };
    }, [previewAvatar]);

    const handleOnchangeImage = async (e) => {
        const file = e.target.files[0];
        let avatarBase64 = await CommonUtils.getBase64(file);

        file.preview = URL.createObjectURL(file);

        setAvatar(avatarBase64);
        setpreviewAvatar(file);
    };
    // avatar
    // banner
    useEffect(() => {
        return () => {
            previewBanner && URL.revokeObjectURL(previewBanner.preview);
        };
    }, [previewBanner]);
    const handleOnchangeImageBanner = async (e) => {
        const fileBanner = e.target.files[0];
        let bannerBase64 = await CommonUtils.getBase64(fileBanner);

        fileBanner.preview = URL.createObjectURL(fileBanner);

        setBanner(bannerBase64);
        setpreviewBanner(fileBanner);
    };
    // banner
    // Danh sach ten
    const DanhSachTenNam = [
        "Phạm Đình Chí Kiên",
        "Phạm Quốc Nhật Anh",
        "Phạm Nhật Đăng Anh",
        "Phạm Quốc Thiên Bảo",
        "Phạm Đình Gia Bảo",
        "Nguyễn Quang Mạnh",
        "Nguyễn Minh Triết",
        "Nguyễn Anh Minh",
        "Nguyễn Thành Nam",
        "Nguyễn Đức Tài",
        "Lê Trần Trung Đức",
        "Lê Trần Chí Kiên",
        "Lê Đình Phúc Hưng",
        "Lê Trịnh Bá Hoàng",
        "Lê Danh Khôi Nguyên",
        "Trần Hưng Thịnh",
        "Trần Thành Đạt",
        "Trần Quang Đạt",
        "Trần Tuấn Kiệt",
        "Trần Thế Hùng",
        " Bùi Tuấn Tú",
        "Bùi Thiện Tâm",
        "Bùi Phúc Khang",
        "Bùi Phúc Hưng",
        "Bùi Phúc Điền",
        "Đặng Duy An",
        "Đặng Anh Dũng",
        "Đặng Đức Thắng",
        "Đặng Tuấn Kiệt",
        "Đặng Tường An",
        "Huỳnh Trọng Nghĩa",
        "Huỳnh Đức Nhân",
        "Huỳnh Sơn Lâm",
        "Huỳnh Duy Minh",
        "Huỳnh Chí Bảo",
        "Vũ Thái Sơn",
        "Vũ Anh Tú",
        "Vũ Toàn Thắng",
        "Vũ Thiên Phú",
        "Vũ Gia Khiêm",
        "Dương Nguyễn Công Vinh",
        "Dương Minh Dũng Việt",
        "Dương Minh Bảo Vinh",
        "Dương Lê Việt Dũng",
        "Dương Huỳnh Phúc Trọng",
        "Lương Minh Tài",
        "Lương Chấn Khang",
        "Lương Tuấn Kiệt",
        "Lương Tiến Sang",
        "Lương Khải Ân",
        "Lâm Quốc Nghiệp",
        "Lâm Đức Vương",
        "Lâm Kim Trí",
        "Lâm Trường Phát",
        "Lâm Vinh Quang",
        "Trương Phúc An",
        "Trương Phúc Bạch",
        "Trương An Cơ",
        "Trương Quang Đăng",
        "Trương Minh Hiếu",
        "Phan Trường Gia Nguyên",
        "Phan Trung Hữu Thiện",
        "Phan Trọng Đắc An",
        "Phan Hiếu Toàn Phúc",
        "Phan Quốc Hữu Tâm",
        "Hoàng Mạnh Quân",
        "Hoàng Minh Nguyên",
        "Hoàng Bảo Long",
        "Hoàng Gia Minh",
        "Hoàng Bảo Quốc",
        "Đinh Hiển Đạt",
        "Đinh Quý Lý",
        "Đinh Ngọc Phát",
        "Đinh Phú Quý",
        "Đinh Kim Ấn",
        "Ngô Gia Bảo",
        "Ngô Bảo Bình",
        "Ngô Gia Minh",
        "Ngô Bình An",
        "Ngô An Khang",
        "Võ Hữu Phước",
        "Võ Quốc Trung",
        "Võ Uy Vũ",
        "Võ Trung Kiên",
        "Võ Phúc Lâm",
        "Đỗ Đức Thiên Ân",
        "Đỗ Duy Bảo An",
        "Đỗ Ngọc Tường Minh",
        "Đỗ Ngọc Chí Thiện",
        "Đỗ Bảo Thiên Phú",
        "Bình Bảo",
        "Bửu Bảo",
        "Công Bảo",
        "Cường Bảo",
        "Chí Bảo",
    ];
    const DanhSachTenNu = [
        "Trần Bảo Ngọc",
        "Trần Ánh Ngọc",
        "Trần Diệu Ngọc",
        "Trần Bích Liên",
        "Trần Bích Khuê",
        "Bùi Linh Chi",
        "Bùi Thanh Thúy",
        "Bùi Hoài An",
        "Bùi Bảo Vy",
        "Bùi Bích Hà",
        "Bùi Khánh Ngân",
        "Bùi Gia Hân",
        "Nguyễn Bảo Anh",
        "Nguyễn Nguyệt Ánh",
        "Nguyễn Diệu Anh",
        "Nguyễn Thục Khuê",
        "Nguyễn Thu Diệp",
        "Nguyễn Bích Diệp",
        "Nguyễn Ngọc Trâm",
        "Lê Quỳnh Anh",
        "Lê An Nhiên",
        "Lê Phương Linh",
        "Lê Hoài Thương",
        "Lê Thiên Bình",
        "Lê Thanh Thảo",
        "Lê Ngọc Mai",
        "Lê Mai Ngọc",
        "Lê Hiền Châu",
        "Phạm Ngọc Bích",
        "Phạm Hồng Bích",
        "Phạm Như Ngọc",
        "Phạm Khánh Ngọc",
        "Phạm Minh Châu",
        "Phạm Quỳnh Châu",
        "Hoàng Ái Nhi",
        "Hoàng Thu Minh",
        "Hoàng Khánh An",
        "Hoàng Minh Tuệ",
        "Hoàng Ngọc Bích",
        "Hoàng Bảo Ngọc",
        "Hoàng Ngọc Liên",
        "Hoàng Quỳnh Chi",
        "Hoàng Ngọc Tú Uyên",
        "Thùy Anh",
        "Tú Anh",
        "An Chi",
        "Anh Thư",
        "Uyên Thư",
        "Tố Như",
        "Ái Phương",
        "Tuyết Lan",
        "Hương Tràm",
        "Lệ Hằng",
        "Minh Tuệ",
        "Minh Khuê",
        "Minh Anh",
        "Minh Nguyệt",
        "Tuệ Mẫn",
        "Tuệ Nhi",
        "Tuệ Lâm",
        "Mẫn Nhi",
        "Tú Uyên",
        "Gia Linh",
        "Bảo Quyên",
        "Tú Linh",
        "Vân Trang",
        "Bích Liên",
        "Hồng Nhung",
        "Ngọc Bích",
        "Ngọc Trâm",
        "Ngọc Hoa",
        "Ngọc Mai",
        "Mỹ Ngọc",
        "Diễm My",
        "Ngọc Diệp",
        "Ngọc Khuê",
        "Diễm Kiều",
        "Diễm Thảo",
        "Kim Oanh",
    ];

    // Danh sach ten

    const tenNamRandoom = DanhSachTenNam[Math.floor(Math.random() * 95)];
    const tenNuRandoom = DanhSachTenNu[Math.floor(Math.random() * 79)];
    const numberRandom = Math.floor(Math.random() * 999999);
    const userRandom = `${user._id},${numberRandom}`;
    console.log("userRandom", userRandom);

    useEffect(() => {
        if (gioiTinh) {
            if (gioiTinh === "Nam") {
                sethoTen(tenNamRandoom);
            }
            if (gioiTinh === "Nữ") {
                sethoTen(tenNuRandoom);
            }
        }
    }, [gioiTinh]);

    const handleRegisterPost = (e) => {
        e.preventDefault();
        if (!banner || !avatar || gioiTinh) {
            alert("Hãy điền thông tin còn thiếu");

            try {
                const newPost = {
                    banner: banner,
                    avatar: avatar,
                    hoTen: hoTen,
                    cauNoiTamDac: cauNoiTamDac,
                    gioiTinh: gioiTinh,

                    gioiThieuThem: gioiThieuThem,

                    yeucaukhac2: yeucaukhac2,
                    myStatus: 0,
                    vaiTro: 2,
                    user: user._id,
                };

                registerPost(newPost, dispatch, navigate);
                setpreviewBanner("");
                setpreviewAvatar("");
                setgioiTinh("");
                sethoTen("");
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <div>
            <div className="container-banner-facedata">
                <label hidden>Banner</label>
                <div>
                    <input
                        id="banner"
                        type="file"
                        hidden
                        onChange={handleOnchangeImageBanner}
                    />
                    <label htmlFor="banner">
                        <div className="banner">
                            {previewBanner && (
                                <img
                                    src={previewBanner.preview}
                                    className="banner2"
                                />
                            )}
                        </div>
                    </label>
                </div>
            </div>
            <div className="container-avatar-facedata">
                <div>
                    <label hidden>avatar</label>
                    <div className="container-avatar">
                        <input
                            id="avatar"
                            type="file"
                            hidden
                            onChange={handleOnchangeImage}
                        />
                        <label htmlFor="avatar">
                            <div className="avatar">
                                {previewAvatar && (
                                    <img
                                        src={previewAvatar.preview}
                                        className="avatar2"
                                    />
                                )}
                            </div>
                        </label>
                    </div>
                </div>
                <div className="containerTieuChi-facedata">
                    <div className="noiDung">{hoTen}</div>
                </div>
            </div>

            <div>
                <div className="containerTieuChi-facedata">
                    <label hidden className="tieuChi" htmlFor="gioi-tinh">
                        Giới Tính
                    </label>
                    <select
                        className="noiDung"
                        name="gioi-tinh"
                        id="gioi-tinh"
                        onChange={(e) => setgioiTinh(e.target.value)}
                    >
                        <option value="">---Chọn Gioi Tinh---</option>
                        <option>Nam</option>
                        <option>Nữ</option>
                    </select>
                </div>
            </div>
            <button
                className="boQua"
                type="submit"
                onClick={handleRegisterPost}
            >
                Lưu Thông Tin
            </button>
            <button
                className="boQua"
                type="submit"
                onClick={() => settaodata(0)}
            >
                Đóng Lại
            </button>
        </div>
    );
};
export default Facedata;
