import "./YeuCauBiTuChoi.scss";
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
const YeuCauBiTuChoi = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.login?.currentUser);
    const myDetail = useSelector((state) => state.post.post?.myDetail);
    const allYourStatus = useSelector(
        (state) => state.yourStatus.yourStatus.allYourStatus?.yourStatus
    );
    const status = useSelector((state) => state.status.status.status?.status);
    const [suaPost, setsuaPost] = useState(1);
    const yourStatustuChoiKetNoi = allYourStatus?.find(
        (item) => item.tuChoiKetNoi || item.huyKetNoi
    );
    console.log("yourStatustuChoiKetNoi", yourStatustuChoiKetNoi);
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
    const handleYeuCauBiTuChoi = () => {
        const statusUser = {
            dienThoai: "",
            yourIdDangKetNoi: "",
            user: user._id,
        };
        const id = status._id;
        updateStatusUser(statusUser, id, dispatch);
        const newPost = {
            myStatus: 0,
        };
        const id3 = myDetail?._id;
        updatePost(newPost, id3, dispatch, setsuaPost);
        const id2 = user?._id;
        deleteAllYourStatus(id2, dispatch);
    };
    return (
        <div className="container">
            <div>Kết Nối Của Bạn Đã Bị Huỷ Bỏ</div>
            <div>
                <div>{yourStatustuChoiKetNoi?.hoTen}</div>
                <div>Sinh Năm: {yourStatustuChoiKetNoi?.namSinh}</div>
                <div>Quê: {yourStatustuChoiKetNoi?.queQuan}</div>
            </div>
            <div>
                Còn Rất Nhiều Người Để Bạn Có Thể Làm Quen, Hãy Tiếp Tục Kết Nối
                Với Người Khác Bạn Nhé!
            </div>
            <button className="xinLamQuen" onClick={handleYeuCauBiTuChoi}>
                Đồng Ý
            </button>
        </div>
    );
};
export default YeuCauBiTuChoi;
