import "./YourDetail.scss";
// import banner from "../assets/images/banner.jpg";
import yourAvatar from "../assets/images/your-avatar.jpg";
import { yourPost } from "../redux/apiRequest";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const YourDetail = () => {
    const yourDetail = useSelector((state) => state.post.post.yourDetail);
    const dispatch = useDispatch();

    const banner = yourDetail.banner;
    const avatar = yourDetail.avatar;
    const yourId = "650aa7cd8f10cc360af710d4";
    useEffect(() => {
        if (!yourId) {
            return console.log("chua co userId");
        }
        if (yourId) {
            yourPost(yourId, dispatch);
        }
    }, []);
    console.log("yourDetail", yourDetail);

    return (
        <div className="container-yourDetail">
            <div className="detail-3">
                <div>
                    <img src={banner} alt="hi" className="yourDetail-banner" />
                </div>
                <img src={avatar} alt="hi" className="yourDetail-logo" />
                <div className="yourDetail-name">Tran Quang Hoang</div>
            </div>
            <table>
                <tr>
                    <td>Giới Tính</td>
                    <td>Nam </td>
                </tr>
                <tr>
                    <td>Ngày sinh</td>
                    <td>20/5/1991</td>
                </tr>
                <tr>
                    <td>Địa Chỉ</td>
                    <td>Hoà Hậu - Lý Nhân - Hà Nam</td>
                </tr>
                <tr>
                    <td>Tình trang hôn nhân</td>
                    <td>Độc thân</td>
                </tr>
                <tr>
                    <td>Tôn Giáo</td>
                    <td>Không </td>
                </tr>
                <tr>
                    <td>Nghề Nghiệp</td>
                    <td>Bộ Đội </td>
                </tr>
                <tr>
                    <td>Thu Nhập (Triệu đồng)</td>
                    <td>5-10 </td>
                </tr>
                <tr>
                    <td>"Chiều Cao (cm)"</td>
                    <td>175 </td>
                </tr>
                <tr>
                    <td>"Cân Nặng (kg)"</td>
                    <td>60 </td>
                </tr>
                <tr>
                    <td>Sở Thích</td>
                    <td>"Thích du lịch/ thích xem phim/ Mua Sắm, …" </td>
                </tr>
                <tr>
                    <td>Sở Ghét</td>
                    <td>Không </td>
                </tr>
                <tr>
                    <td>Giới thiệu thêm</td>
                    <td>Không </td>
                </tr>
                <tr>
                    <td>Điện Thoại</td>
                    <td>911459929 </td>
                </tr>
                <tr>
                    <td>Zalo</td>
                    <td>911459929</td>
                </tr>
            </table>

            <div className="detail-2">Mẫu Người Yêu Lý Tưởng</div>
            <table>
                <tr>
                    <td>Giới Tính</td>
                    <td>1990,1993,1998 </td>
                </tr>
                <tr>
                    <td>Địa Chỉ</td>
                    <td>Cùng Quê,Hà Nội,Nam Định </td>
                </tr>
                <tr>
                    <td>Tình trang hôn nhân</td>
                    <td>Độc Thân, Ly Hôn Chưa con </td>
                </tr>
                <tr>
                    <td>Tôn Giáo</td>
                    <td>Tin Lành,Không </td>
                </tr>
                <tr>
                    <td>Company</td>
                    <td>Contact</td>
                </tr>
                <tr>
                    <td>Nghề Nghiệp</td>
                    <td>Công Nhân,Bán Hàng, Công An </td>
                </tr>
                <tr>
                    <td>"Thu Nhập (Triệu đồng)"</td>
                    <td>"5-10,15-20 (Gộp 5-20)" </td>
                </tr>
                <tr>
                    <td>"Chiều Cao (cm)"</td>
                    <td>"150-160,160-170 (Gộp 150-170)" </td>
                </tr>
                <tr>
                    <td>"Cân Nặng (kg)"</td>
                    <td>"50-60,70-80,80-90 (Gộp 50-90)" </td>
                </tr>
                <tr>
                    <td>Sở Thích</td>
                    <td>Du lịch,Thể Thao,Nấu Ăn </td>
                </tr>
                <tr>
                    <td>Sở Ghét</td>
                    <td>"Ghét Ăn Rau Rền (Khác thì tự nhập)" </td>
                </tr>
                <tr>
                    <td>Giới thiệu thêm</td>
                    <td>Không </td>
                </tr>
            </table>
        </div>
    );
};
export default YourDetail;
