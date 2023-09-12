import "./FormRegister.scss";
const FormRegister = () => {
    return (
        <div className="FormRegister-container">
            <form className="">
                <table>
                    <tr>
                        <td>
                            <label for="gioi-tinh" className="form-label">
                                Giới Tính
                            </label>
                        </td>
                        <td>
                            <select
                                name="gioi-tinh"
                                id="gioi-tinh"
                                class="form-select"
                            >
                                <option value="nam">Nam</option>
                                <option value="nu">Nữ</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label
                                for="tinh-trang-hon-nhan"
                                className="form-label"
                            >
                                Tình trang hôn nhân
                            </label>
                        </td>
                        <td>
                            <select
                                name="tinh-trang-hon-nhan"
                                id="tinh-trang-hon-nhan"
                                class="form-select"
                            >
                                <option value="doc-than">Độc Thân</option>
                                <option value="ly-hon">Ly Hôn Có Con</option>
                                <option value="da-ket-hon">
                                    Ly Hôn Chưa Con
                                </option>
                                <option value="da-ket-hon">Đã Kết Hôn</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Năm Sinh</label>
                        </td>
                        <td>
                            <select>
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
                            <label for="ton-giao" className="form-label">
                                Tôn Giáo
                            </label>
                        </td>
                        <td>
                            <select
                                name="ton-giao"
                                id="ton-giao"
                                class="form-select"
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
                    <tr>
                        <td>
                            <label>Điện Thoại</label>
                        </td>
                        <td>
                            <select>
                                <option></option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Zalo</label>
                        </td>
                        <td>
                            <select>
                                <option></option>
                            </select>
                        </td>
                    </tr>
                </table>
                <div className="detail-2">Mẫu Người Yêu Lý Tưởng</div>
                <table>
                    <tr>
                        <td>
                            <label>Giới Tính</label>
                        </td>
                        <td>
                            <select>
                                <option></option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Năm Sinh</label>
                        </td>
                        <td>
                            <select>
                                <option></option>
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
                </table>
                <button type="submit" class="btn btn-success">
                    Luu Thong Tin
                </button>
            </form>
        </div>
    );
};
export default FormRegister;
