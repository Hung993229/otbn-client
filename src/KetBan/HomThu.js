import "./HomThu.scss";
import YeuCauBiTuChoi from "./GuiYeuCau/YeuCauBiTuChoi";
import YeuCauDuocDongY from "./GuiYeuCau/YeuCauDuocDongY";
import ChonVaGuiYeuCau from "./GuiYeuCau/ChonVaGuiYeuCau";
import YourDangKetNoi from "./GuiYeuCau/YourDangKetNoi";
import TiepNhanYeuCauKetNoi from "./PhanHoiYeuCau/TiepNhanYeuCauKetNoi";
import DongYKetNoi from "./PhanHoiYeuCau/DongYKetNoi";
import MyDangKetNoi from "./PhanHoiYeuCau/MyDangKetNoi";

import {
    yourPost,
    getStatus,
    getPost,
    getYourStatus,
    getAllPosts,
} from "../redux/apiRequest";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import MoiDangKi2 from "../GiaoDienChung/MoiDangKi2";
import FormRegister from "../Tao Thong Tin/FormRegister";
const HomThu = () => {
    const dispatch = useDispatch();
    const myDetail = useSelector((state) => state.post.post?.myDetail);
    const user = useSelector((state) => state.auth.login?.currentUser);
    const status = useSelector((state) => state.status.status.status?.status);
    const allYourStatus = useSelector(
        (state) => state.yourStatus.yourStatus.allYourStatus?.yourStatus
    );
    const yourDetail = useSelector((state) => state.post.post?.yourDetail);
    const [vitri, setvitri] = useState(0);
    useEffect(() => {
        if (user) {
            getYourStatus(user?._id, dispatch);
        }
    }, [user]);
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

    const myStatus = myDetail?.myStatus;
    const yourStatus = yourDetail?.myStatus;

    const yourIdDangKetNoi = status?.yourIdDangKetNoi;
    const dienThoai = status?.dienThoai;
    // yeu cau ket noi di
    const yourIdYeuCauKetNoidi = allYourStatus?.filter(
        (item) => item.yourIdYeuCauKetNoi === user._id
    );
    // yeu cau ket noi den
    const yourIdYeuCauKetNoi = allYourStatus?.filter(
        (item) => item.yourIdYeuCauKetNoi && item.user === user._id
    );
    // dong y ket noi
    const yourStatusdongYKetNoi = allYourStatus?.filter(
        (item) => item.dongYKetNoi
    );
    // tu choi ket noi
    const yourStatustuChoiKetNoi = allYourStatus?.filter(
        (item) => item.tuChoiKetNoi
    );
    const yourStatushuyKetNoi = allYourStatus?.filter((item) => item.huyKetNoi);
    return !user ? (
        <MoiDangKi2 />
    ) : (
        <>
            {!status ? (
                <FormRegister />
            ) : (
                <div className="container-homthu">
                    <div className="homThu">HÒM THƯ</div>
                    <div>
                        {+myStatus === 0 &&
                        yourIdYeuCauKetNoi &&
                        yourIdYeuCauKetNoi?.length !== 0 &&
                        !dienThoai ? (
                            <TiepNhanYeuCauKetNoi />
                        ) : (
                            <></>
                        )}
                    </div>
                    {/* Dong Y */}
                    <div>
                        {+myStatus === 1 &&
                        dienThoai &&
                        yourIdDangKetNoi &&
                        yourIdDangKetNoi?.length !== 0 &&
                        yourIdYeuCauKetNoi?.length === 0 &&
                        yourStatustuChoiKetNoi?.length === 0 &&
                        yourIdYeuCauKetNoidi?.length === 0 ? (
                            <DongYKetNoi />
                        ) : (
                            <></>
                        )}
                    </div>

                    {/* Tu Choi */}
                    <div>
                        {+myStatus === 0 &&
                        !dienThoai &&
                        yourIdDangKetNoi?.length === 0 &&
                        yourIdYeuCauKetNoi?.length === 0 &&
                        yourStatustuChoiKetNoi?.length === 0 &&
                        yourIdYeuCauKetNoidi?.length === 0 ? (
                            <></>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};
export default HomThu;
