import "./Header.scss";
import logo from "../assets/images/logo.jpg";
import gold from "../assets/images/Gold.png";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getStatus, getPost } from "../redux/apiRequest";
import currency from "currency.js";
const Header = () => {
    const user = useSelector((state) => state.auth.login?.currentUser);
    const status = useSelector((state) => state.status.status.status?.status);
    const myDetail = useSelector((state) => state.post.post?.myDetail);
    const dispatch = useDispatch();
    useEffect(() => {
        if (user) {
            getStatus(user?._id, dispatch);
        }
    }, [user, dispatch]);
    useEffect(() => {
        if (user) {
            getPost(user?._id, dispatch);
        }
    }, [user, dispatch]);

    const cash = currency(status?.cash, {
        symbol: "$",
        separator: ".",
        decimal: ",",
    })
        .format()
        .slice(0, -3);

    return (
        <>
            <div className="container-header">
                <div className="container-logo">
                    <img src={logo} alt="he" className="logo" />
                    <div className="my-cash2">TimTim.Vn</div>
                </div>

                <div className="title"></div>
                <div className="my-detail">
                    <img
                        src={myDetail?.avatar}
                        alt="he"
                        className="my-avatar"
                    />
                    <div className="my-cash">
                        <div className="my-cash-title">{cash}</div>
                        <img src={gold} className="gold" alt="timtim" />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Header;
