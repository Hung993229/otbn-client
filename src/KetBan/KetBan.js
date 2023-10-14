import "./KetBan.scss";
import DangHenHo from "./DangHenHo";
import ChonDanhSach from "./ChonDanhSach";
import {
    yourPost,
    getAllPosts,
    updateStatusUser,
    registerStatus,
    getStatus,
    getPost,
    registerYourStatus,
    getYourStatus,
    deleteYourStatus,
    updatePost,
} from "../redux/apiRequest";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const KetBan = () => {
    const dispatch = useDispatch();
    const myDetail = useSelector((state) => state.post.post?.myDetail);
    const user = useSelector((state) => state.auth.login?.currentUser);
    const status = useSelector((state) => state.status.status.status?.status);
    const yourIdDangKetNoi = status?.yourIdDangKetNoi;
    useEffect(() => {
        if (user) {
            getStatus(user?._id, dispatch);
            getYourStatus(user?._id, dispatch);
        }
    }, [user]);
    useEffect(() => {
        if (user) {
            getPost(user?._id, dispatch);
        }
    }, [user]);
    useEffect(() => {
        if (yourIdDangKetNoi && yourIdDangKetNoi.length !== 0) {
            yourPost(yourIdDangKetNoi, dispatch);
        }
    }, [yourIdDangKetNoi]);
    return <div>{!yourIdDangKetNoi ? <ChonDanhSach /> : <DangHenHo />}</div>;
};
export default KetBan;
