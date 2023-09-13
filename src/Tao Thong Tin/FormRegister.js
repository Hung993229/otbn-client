import "./FormRegister.scss";
const FormRegister = () => {
    return (
        <div className="FormRegister-container">
            <form className="">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label
                                    htmlFor="gioi-tinh"
                                    className="form-label"
                                >
                                    Giới Tính
                                </label>
                            </td>
                            <td>
                                <select
                                    name="gioi-tinh"
                                    id="gioi-tinh"
                                    className="form-select"
                                >
                                    <option value="nam">Nam</option>
                                    <option value="nu">Nữ</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label
                                    htmlFor="tinh-trang-hon-nhan"
                                    className="form-label"
                                >
                                    Tình trang hôn nhân
                                </label>
                            </td>
                            <td>
                                <select
                                    name="tinh-trang-hon-nhan"
                                    id="tinh-trang-hon-nhan"
                                    className="form-select"
                                >
                                    <option value="doc-than">Độc Thân</option>
                                    <option value="ly-hon">
                                        Ly Hôn Có Con
                                    </option>
                                    <option value="da-ket-hon">
                                        Ly Hôn Chưa Con
                                    </option>
                                    <option value="da-ket-hon">
                                        Đã Kết Hôn
                                    </option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label
                                    htmlFor="nam-sinh"
                                    className="form-label"
                                >
                                    Năm Sinh
                                </label>
                            </td>
                            <td>
                                <select
                                    name="nam-sinh"
                                    id="nam-sinh"
                                    className="form-select"
                                >
                                    <option>1991</option>
                                    <option>1992</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Địa Chỉ</label>
                            </td>
                            <td>
                                <label>Tỉnh</label>
                                <select>
                                    <option>Hà Nam</option>
                                    <option>Nam Định</option>
                                </select>
                                <label>Huyện</label>
                                <select>
                                    <option>Lý Nhân</option>
                                    <option>Bắc Lý</option>
                                </select>
                                <label>Xã</label>
                                <select>
                                    <option>Hoà Hậu</option>
                                    <option>Tiến Thắng</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label
                                    htmlFor="ton-giao"
                                    className="form-label"
                                >
                                    Tôn Giáo
                                </label>
                            </td>
                            <td>
                                <select
                                    name="ton-giao"
                                    id="ton-giao"
                                    className="form-select"
                                >
                                    <option value="khong">Không</option>
                                    <option value="phat-giao">Phật Giáo</option>
                                    <option value="kito-giao">Kito Giáo</option>
                                    <option value="cong-giao">Công Giáo</option>
                                    <option value="tin-lanh">Tin Lành</option>
                                    <option value="hoa-hao">Hoà Hảo</option>
                                    <option value="cao-dai">Cao Đài</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label>Nghề Nghiệp</label>
                            </td>
                            <td>
                                <select>
                                    <option>Làm Tự Do</option>
                                    <option>Công Nhân</option>
                                    <option>Bán Hàng</option>
                                    <option>Kinh Doanh</option>
                                    <option>Công An</option>
                                    <option>Bộ Đội</option>
                                    <option>Khác</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Thu Nhập</label>
                            </td>
                            <td>
                                <select>
                                    <option>Dưới 5 Triệu Đồng</option>
                                    <option>5-10 Triệu Đồng</option>
                                    <option>10-20 Triệu Đồng</option>
                                    <option>20-30 Triệu Đồng</option>
                                    <option>Trên 30 Triệu Đồng</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Chiều Cao</label>
                            </td>
                            <td>
                                <select>
                                    <option>165 cm</option>
                                    <option>170 cm</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Cân Nặng</label>
                            </td>
                            <td>
                                <select>
                                    <option>50kg</option>
                                    <option>60kg</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Sở Thích</label>
                            </td>
                            <td>
                                <select>
                                    <option>Du Lịch</option>
                                    <option>Thể Thao</option>
                                    <option>Nấu Ăn</option>
                                    <option>Hội Hoạ</option>
                                    <option>Âm Nhạc</option>
                                    <option>Xem Phim</option>
                                    <option>Khác</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Sở Ghét</label>
                            </td>
                            <td>
                                <select>
                                    <option>Ghét Trễ Hẹn</option>
                                    <option>Ghét ăn Hành</option>
                                    <option>Ghét Nói Dối</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Giới thiệu thêm</label>
                            </td>
                            <td>
                                <select>
                                    <option>Nói gì thì nói</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Điện Thoại</label>
                            </td>
                            <td>
                                <select>
                                    <option>0911459929</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Zalo</label>
                            </td>
                            <td>
                                <select>
                                    <option>0911459929</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="detail-2">Mẫu Người Yêu Lý Tưởng</div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label
                                    htmlFor="gioi-tin-2"
                                    className="form-label"
                                >
                                    Giới Tính
                                </label>
                            </td>
                            <td>
                                <select
                                    name="gioi-tinh-2"
                                    id="gioi-tinh-2"
                                    className="form-select"
                                >
                                    <option value="nam">Nam</option>
                                    <option value="nu">Nữ</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label
                                    htmlFor="nam-sinh"
                                    className="form-label"
                                >
                                    Năm Sinh
                                </label>
                            </td>
                            <td>
                                <select
                                    name="nam-sinh"
                                    id="nam-sinh"
                                    className="form-select"
                                >
                                    <option>1991</option>
                                    <option>1992</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Địa Chỉ</label>
                            </td>
                            <td>
                                <select>
                                    <option></option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label>Tình trang hôn nhân</label>
                            </td>
                            <td>
                                <select>
                                    <option></option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Tôn Giáo</label>
                            </td>
                            <td>
                                <select>
                                    <option></option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Nghề Nghiệp</label>
                            </td>
                            <td>
                                <select>
                                    <option></option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Thu Nhập</label>
                            </td>
                            <td>
                                <select>
                                    <option></option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Chiều Cao</label>
                            </td>
                            <td>
                                <select>
                                    <option></option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Cân Nặng</label>
                            </td>
                            <td>
                                <select>
                                    <option></option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Sở Thích</label>
                            </td>
                            <td>
                                <select>
                                    <option></option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Sở Ghét</label>
                            </td>
                            <td>
                                <select>
                                    <option></option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Giới thiệu thêm</label>
                            </td>
                            <td>
                                <select>
                                    <option></option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit" className="btn btn-success">
                    Lưu Thông Tin
                </button>
            </form>
        </div>
    );
};
export default FormRegister;
