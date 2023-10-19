import "./FormRegister.scss";
import CommonUtils from "../component/CommonUtils";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerPost, registerStatus } from "../redux/apiRequest";
import { useEffect } from "react";
import {
    apiGetPublicProvinces,
    apiGetPublicDistrict,
    apiGetPublicWard,
} from "../redux/ApiProvince";

const FormRegister = () => {
    const user = useSelector((state) => state.auth.login.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [previewAvatar, setpreviewAvatar] = useState();
    const [previewBanner, setpreviewBanner] = useState();
    // Provinces
    const [provinces, setProvinces] = useState([]);
    const [provincesID, setprovincesID] = useState();

    const [districts, setDistricts] = useState([]);
    const [districtID, setDistrictID] = useState();

    const [wards, setWards] = useState([]);
    const [wardID, setWardID] = useState();
    // Provinces2
    const [provinces2, setProvinces2] = useState([]);
    const [provincesID2, setprovincesID2] = useState();

    const [districts2, setDistricts2] = useState([]);
    const [districtID2, setDistrictID2] = useState();

    const [wards2, setWards2] = useState([]);
    const [wardID2, setWardID2] = useState();

    // newPost
    const [banner, setBanner] = useState();
    const [avatar, setAvatar] = useState();
    const [hoTen, sethoTen] = useState();
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

    // ngay/thang/nam
    var presentDate = new Date();
    const year = presentDate.getFullYear();
    const arrYear = [];
    for (let i = 0; i <= 70; i++) {
        arrYear.push(year - i);
    }

    // thang
    const arrMonth = [];
    for (let i = 1; i <= 12; i++) {
        arrMonth.push(i);
    }

    // ngay
    const arrDate = [];
    for (let i = 1; i <= 31; i++) {
        arrDate.push(i);
    }

    //  Que Quan
    // Tinh
    useEffect(() => {
        const fetchPublicProvince = async () => {
            const response = await apiGetPublicProvinces();
            if (response.status === 200) {
                setProvinces(response?.data.results);
            }
        };
        fetchPublicProvince();
    }, []);
    // console.log("provincesID", provincesID);
    // console.log("provinces", provinces);
    // Huyen
    useEffect(() => {
        const fetchPublicDictrict = async () => {
            const response = await apiGetPublicDistrict(provincesID);
            if (response.status === 200) {
                setDistricts(response?.data.results);
            }
        };
        provincesID && fetchPublicDictrict();

        !provincesID && setDistricts([]);
    }, [provincesID]);
    // console.log("districtID", districtID);
    // console.log("districts", districts);
    // Xa
    useEffect(() => {
        const fetchPublicWard = async () => {
            const response = await apiGetPublicWard(districtID);
            if (response.status === 200) {
                setWards(response?.data.results);
            }
        };
        districtID && fetchPublicWard();

        !provincesID && setWards([]);

        !districtID && setWards([]);
    }, [districtID]);

    // console.log("wardID", wardID);
    // console.log("wards", wards);
    // Que Quan

    // Hien Dang Sinh Song
    // Tinh2
    useEffect(() => {
        const fetchPublicProvince = async () => {
            const response = await apiGetPublicProvinces();
            if (response.status === 200) {
                setProvinces2(response?.data.results);
            }
        };
        fetchPublicProvince();
    }, []);
    // console.log("provincesID2", provincesID2);
    // console.log("provinces2", provinces2);
    // Huyen2
    useEffect(() => {
        const fetchPublicDictrict = async () => {
            const response = await apiGetPublicDistrict(provincesID2);
            if (response.status === 200) {
                setDistricts2(response?.data.results);
            }
        };
        provincesID2 && fetchPublicDictrict();

        !provincesID2 && setDistricts2([]);
    }, [provincesID2]);
    // console.log("districtID2", districtID2);
    // console.log("districts2", districts2);
    // Xa2
    useEffect(() => {
        const fetchPublicWard = async () => {
            const response = await apiGetPublicWard(districtID2);
            if (response.status === 200) {
                setWards2(response?.data.results);
            }
        };
        districtID2 && fetchPublicWard();

        !provincesID2 && setWards2([]);

        !districtID2 && setWards2([]);
    }, [districtID2]);

    // console.log("wardID2", wardID2);
    // console.log("wards2", wards2);
    // Hien Dang Sinh Song

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

    const handleRegisterPost = (e) => {
        e.preventDefault();
        if (
            !banner ||
            !avatar ||
            !hoTen ||
            !gioiTinh ||
            !gioiTinh2 ||
            !tinhTrangHonNhan ||
            !tinhTrangHonNhan2 ||
            !namSinh ||
            !provincesID ||
            !provincesID2 ||
            !districtID ||
            !districtID2 ||
            !thuNhap ||
            !thuNhap2 ||
            !tonGiao2 ||
            !tonGiao
        ) {
            alert("Xin hãy điền đầy đủ các mục còn thiếu");
            return;
        }
        // Que Quan
        const tenTinh = provinces?.find(
            (item) => item.province_id === provincesID
        );
        const tenHuyen = districts?.find(
            (item) => item.district_id === districtID
        );
        const tenXa = wards?.find((item) => item.ward_id === wardID);
        // Hien Dang Song
        const tenTinh2 = provinces2?.find(
            (item) => item.province_id === provincesID2
        );
        const tenHuyen2 = districts2?.find(
            (item) => item.district_id === districtID2
        );
        const tenXa2 = wards2?.find((item) => item.ward_id === wardID2);
        try {
            const newPost = {
                banner: banner,
                avatar: avatar,
                hoTen: hoTen,
                cauNoiTamDac: cauNoiTamDac,
                gioiTinh: gioiTinh,
                tinhTrangHonNhan: tinhTrangHonNhan,
                // ngay sinh
                ngaySinh: ngaySinh,
                thangSinh: thangSinh,
                namSinh: namSinh,
                // Que Quan
                tinhQq: tenTinh?.province_name,
                huyenQq: tenHuyen?.district_name,
                xaQq: tenXa?.ward_name || "Xã ...",

                // Hien Dang Song
                tinhDs: tenTinh2?.province_name,
                huyenDs: tenHuyen2?.district_name,
                xaDs: tenXa2?.ward_name || "Xã ...",

                tonGiao: tonGiao,
                ngheNghiep: ngheNghiep,
                thuNhap: thuNhap,
                chieuCao: chieuCao,
                canNang: canNang,
                gioiThieuThem: gioiThieuThem,

                // Mau nguoi yeu ly tuong
                gioiTinh2: gioiTinh2,
                tinhTrangHonNhan2: tinhTrangHonNhan2,
                khuVucLamQuen2: khuVucLamQuen2,
                tonGiao2: tonGiao2,
                ngheNghiep2: ngheNghiep2,
                thuNhap2: thuNhap2,
                tuoiHop2: tuoiHop2,
                tuoiHop3: tuoiHop3,
                yeucaukhac2: yeucaukhac2,
                myStatus: 0,
                vaiTro: 0,
                user: user._id,
            };

            registerPost(newPost, dispatch, navigate);
            const statusUser = {
                cash: 25000,
                dienThoai: "",
                yourIdDangKetNoi: "",
                user: user._id,
            };
            console.log("statusUser", statusUser);
            registerStatus(statusUser, dispatch);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <div>
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
                                <img src={previewBanner.preview} />
                            )}
                        </div>
                    </label>
                </div>
            </div>
            <div className="avatar-hoTen">
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
                                    <img src={previewAvatar.preview} />
                                )}
                            </div>
                        </label>
                    </div>
                </div>
                <div>
                    <div className="hoTen">
                        <div>
                            <label hidden>Ho Va Ten</label>
                            <input
                                type="text"
                                placeholder="Nhập Họ Và Tên"
                                onChange={(e) => sethoTen(e.target.value)}
                            />
                        </div>
                        <div>
                            <label hidden>Câu Nói Tâm Đắc</label>
                            <input
                                onChange={(e) =>
                                    setcauNoiTamDac(e.target.value)
                                }
                                className="cauNoiTamDac"
                                placeholder="Câu Nói Tâm Đắc"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="containerTieuChi">
                <label className="tieuChi" htmlFor="gioi-tinh">
                    Giới Tính
                </label>

                <select
                    className="noiDung"
                    name="gioi-tinh"
                    id="gioi-tinh"
                    onChange={(e) => setgioiTinh(e.target.value)}
                >
                    <option value="">---Mời Chọn---</option>
                    <option>Nam</option>
                    <option>Nữ</option>
                    <option>Lesbian</option>
                    <option>Gay</option>
                </select>
            </div>
            <div className="containerTieuChi">
                <label className="tieuChi" htmlFor="tinh-trang-hon-nhan">
                    Tình Trạng Hôn Nhân
                </label>

                <select
                    className="noiDung"
                    name="tinh-divang-hon-nhan"
                    id="tinh-divang-hon-nhan"
                    onChange={(e) => settinhTrangHonNhan(e.target.value)}
                >
                    <option value="">---Mời Chọn---</option>
                    <option>Độc Thân</option>
                    <option>Ly Hôn Có Con</option>
                    <option>Ly Hôn Chưa Con</option>
                    <option>Đã Kết Hôn</option>
                </select>
            </div>
            <div className="containerTieuChi">
                <div className="tieuChi">Ngày Sinh</div>

                <div className="noiDung">
                    <label hidden>Ngày</label>
                    <select onChange={(e) => setngaySinh(e.target.value)}>
                        <option value="">---Chọn Ngày---</option>
                        {arrDate &&
                            arrDate.length > 0 &&
                            arrDate.map((item, index) => {
                                return <option key={index}>{item}</option>;
                            })}
                    </select>
                    <label hidden>Tháng</label>
                    <select onChange={(e) => setthangSinh(e.target.value)}>
                        <option value="">---Chọn Tháng---</option>
                        {arrMonth &&
                            arrMonth.length > 0 &&
                            arrMonth.map((item, index) => {
                                return <option key={index}>{item}</option>;
                            })}
                    </select>
                    <label hidden>Năm</label>
                    <select onChange={(e) => setnamSinh(e.target.value)}>
                        <option value="">---Chọn Năm---</option>
                        {arrYear &&
                            arrYear.length > 0 &&
                            arrYear.map((item, index) => {
                                return <option key={index}>{item}</option>;
                            })}
                    </select>
                </div>
            </div>

            <div className="containerTieuChi">
                <div className="tieuChi">Quê Quán</div>

                <div className="noiDung">
                    <label hidden>Tỉnh</label>
                    <select
                        id="provinces"
                        onChange={(e) => setprovincesID(e.target.value)}
                        // onChange={(e) => console.log("e", e)}
                    >
                        <option value="">---Chọn Tỉnh/TP---</option>
                        {provinces?.map((item) => {
                            return (
                                <option
                                    key={item.province_id}
                                    value={item.province_id}
                                >
                                    {item.province_name}
                                </option>
                            );
                        })}
                    </select>
                    <select onChange={(e) => setDistrictID(e.target.value)}>
                        <option value="">---Chọn Quận/Huyện---</option>
                        {districts?.map((item) => {
                            return (
                                <option
                                    value={item.district_id}
                                    key={item.district_id}
                                >
                                    {item.district_name}
                                </option>
                            );
                        })}
                    </select>
                    <select onChange={(e) => setWardID(e.target.value)}>
                        <option value="">---Chọn Xã/Phường---</option>
                        {wards?.map((item) => {
                            return (
                                <option value={item.ward_id} key={item.ward_id}>
                                    {item.ward_name}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>

            <div className="containerTieuChi">
                <div className="tieuChi">Hiện Đang Sinh Sống</div>

                <div className="noiDung">
                    <select
                        id="provinces"
                        onChange={(e) => setprovincesID2(e.target.value)}
                        // onChange={(e) => console.log("e", e)}
                    >
                        <option value="">---Chọn Tỉnh/TP---</option>
                        {provinces2?.map((item) => {
                            return (
                                <option
                                    key={item.province_id}
                                    value={item.province_id}
                                >
                                    {item.province_name}
                                </option>
                            );
                        })}
                    </select>
                    <select onChange={(e) => setDistrictID2(e.target.value)}>
                        <option value="">---Chọn Quận/Huyện---</option>
                        {districts2?.map((item) => {
                            return (
                                <option
                                    value={item.district_id}
                                    key={item.district_id}
                                >
                                    {item.district_name}
                                </option>
                            );
                        })}
                    </select>
                    <select onChange={(e) => setWardID2(e.target.value)}>
                        <option value="">---Chọn Xã/Phường---</option>
                        {wards2?.map((item) => {
                            return (
                                <option value={item.ward_id} key={item.ward_id}>
                                    {item.ward_name}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>

            <div className="containerTieuChi">
                <label className="tieuChi" htmlFor="ton-giao">
                    Tôn Giáo
                </label>

                <select
                    className="noiDung"
                    name="ton-giao"
                    id="ton-giao"
                    onChange={(e) => settonGiao(e.target.value)}
                >
                    <option value="">---Mời Chọn---</option>
                    <option>Không</option>
                    <option>Phật Giáo</option>
                    <option>Kito Giáo</option>
                    <option>Công Giáo</option>
                    <option>Tin Lành</option>
                    <option>Hoà Hảo</option>
                    <option>Cao Đài</option>
                </select>
            </div>

            <div className="containerTieuChi">
                <label className="tieuChi">Nghề Nghiệp</label>

                <select
                    className="noiDung"
                    onChange={(e) => setngheNghiep(e.target.value)}
                >
                    <option value="">---Mời Chọn---</option>
                    <option>Làm Tự Do</option>
                    <option>Công Nhân</option>
                    <option>Bán Hàng</option>
                    <option>Kinh Doanh</option>
                    <option>Công An</option>
                    <option>Bộ Đội</option>
                    <option>Khác</option>
                </select>
            </div>
            <div className="containerTieuChi">
                <label className="tieuChi">Thu Nhập</label>

                <select
                    className="noiDung"
                    onChange={(e) => setthuNhap(e.target.value)}
                >
                    <option value="">---Mời Chọn---</option>
                    <option>Dưới 20 Triệu Đồng</option>
                    <option>Trên 20 Triệu Đồng</option>
                </select>
            </div>
            <div className="containerTieuChi">
                <div className="tieuChi">Đặc Điểm</div>
                <div className="noiDung">
                    <div hidden>Chiều Cao</div>
                    <div className="containerTieuChi">
                        <input
                            className=""
                            onChange={(e) => setchieuCao(e.target.value)}
                            placeholder="Nhập chiều cao"
                            type="number"
                        />
                        <div className="donVi">(cm)</div>
                    </div>

                    <label hidden>Cân Nặng</label>
                    <div className="containerTieuChi">
                        <input
                            className=""
                            onChange={(e) => setcanNang(e.target.value)}
                            placeholder="Nhập Cân nặng"
                            type="number"
                        />
                        <div className="donVi">(kg)</div>
                    </div>
                </div>
            </div>

            <div className="containerTieuChi">
                <label className="tieuChi">Giới thiệu thêm</label>

                <div className="noiDung">
                    <input
                        className=""
                        onChange={(e) => setgioiThieuThem(e.target.value)}
                        placeholder="Hãy kể về: Sở thích, Sở ghét, Quan niệm sống, ... của bạn!"
                    />
                </div>
            </div>

            <div className="mauNguoiYeuLyTuong">Mẫu Người Yêu Lý Tưởng</div>

            <div className="containerTieuChi">
                <label className="tieuChi" htmlFor="gioi-tin-2">
                    Giới Tính
                </label>

                <select
                    className="noiDung"
                    name="gioi-tinh-2"
                    id="gioi-tinh-2"
                    onChange={(e) => setgioiTinh2(e.target.value)}
                >
                    <option value="">---Mời Chọn---</option>
                    <option>Nam</option>
                    <option>Nữ</option>
                    <option>Lesbian</option>
                    <option>Gay</option>
                </select>
            </div>

            <div className="containerTieuChi">
                <label className="tieuChi">Tình trạng hôn nhân</label>

                <select
                    className="noiDung"
                    onChange={(e) => settinhTrangHonNhan2(e.target.value)}
                >
                    <option value="">---Mời Chọn---</option>
                    <option>Độc Thân</option>
                    <option>Ly Hôn Có Con</option>
                    <option>Ly Hôn Chưa Con</option>
                    <option>Đã Kết Hôn</option>
                </select>
            </div>
            <div className="containerTieuChi">
                <label className="tieuChi">Khu Vực Làm Quen</label>

                <select
                    className="noiDung"
                    onChange={(e) => setkhuVucLamQuen2(e.target.value)}
                >
                    <option value="">---Mời Chọn---</option>
                    <option>Ưu Tiên Người Cùng Quê</option>
                    <option>Ưu Tiên Người Gần Nơi Đang Sinh Sống</option>
                    <option value="">Ở Đâu Cũng Được</option>
                </select>
            </div>
            <div className="containerTieuChi">
                <label className="tieuChi">Tôn Giáo</label>

                <select
                    className="noiDung"
                    onChange={(e) => settonGiao2(e.target.value)}
                >
                    <option value="">---Mời Chọn---</option>
                    <option>Không</option>
                    <option>Phật Giáo</option>
                    <option>Kito Giáo</option>
                    <option>Công Giáo</option>
                    <option>Tin Lành</option>
                    <option>Hoà Hảo</option>
                    <option>Cao Đài</option>
                </select>
            </div>
            <div className="containerTieuChi">
                <label className="tieuChi">Nghề Nghiệp</label>

                <select
                    className="noiDung"
                    onChange={(e) => setngheNghiep2(e.target.value)}
                >
                    <option value="">---Mời Chọn---</option>
                    <option>Làm Tự Do</option>
                    <option>Công Nhân</option>
                    <option>Bán Hàng</option>
                    <option>Kinh Doanh</option>
                    <option>Công An</option>
                    <option>Bộ Đội</option>
                    <option>Khác</option>
                </select>
            </div>
            <div className="containerTieuChi">
                <label className="tieuChi">Thu Nhập</label>

                <select
                    className="noiDung"
                    onChange={(e) => setthuNhap2(e.target.value)}
                >
                    <option value="">---Mời Chọn---</option>
                    <option>Dưới 20 Triệu Đồng</option>
                    <option>Trên 20 Triệu Đồng</option>
                </select>
            </div>
            <div className="containerTieuChi">
                <div className="tieuChi" htmlFor="nam-sinh">
                    Khoảng Tuổi Muốn Làm Quen
                </div>
                <div className="noiDung">
                    <label hidden>Từ Năm</label>
                    <select onChange={(e) => settuoiHop2(e.target.value)}>
                        <option value="">---Từ Năm---</option>
                        {arrYear &&
                            arrYear.length > 0 &&
                            arrYear.map((item, index) => {
                                return <option key={index}>{item}</option>;
                            })}
                    </select>
                    <label hidden>Đến Năm</label>
                    <select onChange={(e) => settuoiHop3(e.target.value)}>
                        <option value="">---Đến Năm---</option>
                        {arrYear &&
                            arrYear.length > 0 &&
                            arrYear.map((item, index) => {
                                return <option key={index}>{item}</option>;
                            })}
                    </select>
                </div>
            </div>
            <div className="containerTieuChi">
                <label className="tieuChi">Yêu Cầu Khác</label>

                <div className="noiDung">
                    <input
                        className=""
                        onChange={(e) => setyeucaukhac2(e.target.value)}
                        placeholder="Mong muốn của bạn về người bạn muốn làm quen"
                    />
                </div>
            </div>
            <p className="luuY">
                Lưu ý: Số điện thoại đăng kí tài khoản cũng là Số điện thoại và
                Zalo để liên lạc khi ghép đôi. <br /> Vì vậy không dùng Số điện
                thoại ảo để đăng kí!
            </p>

            <button type="submit" onClick={handleRegisterPost}>
                Lưu Thông Tin
            </button>
        </div>
    );
};
export default FormRegister;
