import "./YeuCauDuocDongY.scss";
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
} from "../../redux/apiRequest";
const YeuCauDuocDongY = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.login?.currentUser);
    const allYourStatus = useSelector(
        (state) => state.yourStatus.yourStatus.allYourStatus?.yourStatus
    );
    const status = useSelector((state) => state.status.status.status?.status);
    const yourStatusdongYKetNoi = allYourStatus?.find(
        (item) => item.dongYKetNoi
    );

    console.log("yourStatusdongYKetNoi", yourStatusdongYKetNoi);
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
    const handleYeuCauDuocDongY = () => {
        const id = status?._id;
        const statusUser = {
            dienThoai: yourStatusdongYKetNoi?.dienThoai,
            yourIdDangKetNoi: yourStatusdongYKetNoi?.dongYKetNoi,
            user: user._id,
        };
        updateStatusUser(statusUser, id, dispatch);
        const id2 = user?._id;
        deleteAllYourStatus(id2, dispatch);
    };
    return (
        <div className="container-yeuCauDuocDongY">
            <h1>Yêu Cầu Kết Nối Của Bạn Đã Được Chấp Nhận</h1>
            <div className="thongtinNguoiDongY">
                <div>{yourStatusdongYKetNoi?.hoTen}</div>
                <div>Sinh Năm: {yourStatusdongYKetNoi?.namSinh}</div>
                <div>Quê: {yourStatusdongYKetNoi?.queQuan}</div>
            </div>
            <div>
                Giờ Đây 2 Bạn Có Thể Kết Bạn Zalo Và Tìm Hiểu Về Nhau Nhiều Hơn
                <br /> Bạn Hãy Truy Cập Hòm Thư Để Lấy Thông Tin Zalo Nhé!
            </div>
            <button className="okDongY" onClick={handleYeuCauDuocDongY}>
                Đồng Ý
            </button>
        </div>
    );
};
export default YeuCauDuocDongY;
