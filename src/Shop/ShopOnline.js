import "./ShopOnline.scss";
import HeaderShop from "./HeaderShop";
import SanPham from "./SanPham";
import ChiTietSanPham from "./ChiTietSanPham";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getShop } from "../redux/apiRequest";
import { useDispatch } from "react-redux";
import SuaSanPham from "./SuaSanPham";

const ShopOnline = () => {
    const user = useSelector((state) => state.auth.login?.currentUser);
    const [detailSanPham, setdetailSanPham] = useState(0);
    const allshop = useSelector((state) => state.shop.shop.allshop?.sanpham);
    const myDetail = useSelector((state) => state.post.post?.myDetail);
    const dispatch = useDispatch();

    const [quanLyShop, setquanLyShop] = useState(0);
    const [loadingShop, setloadingShop] = useState(1);
    // useEffect(() => {
    //     const myTimeout = setTimeout(setloadingShop(1), 3000)
    //     clearTimeout(myTimeout);
    // }, []);
    useEffect(() => {
        const huyenDs = myDetail?.huyenDs;
        const huyenQq = myDetail?.huyenQq;
        getShop(dispatch, huyenDs, huyenQq);
    }, [user]);
    return (
        <div className="container-shopOnline">
            {+loadingShop === 0 ? (
                <div>
                    <span class="loader"></span>
                </div>
            ) : (
                <div>
                    {detailSanPham !== 0 ? (
                        <ChiTietSanPham
                            detailSanPham={detailSanPham}
                            setdetailSanPham={setdetailSanPham}
                            allshop={allshop}
                        />
                    ) : (
                        <div>
                            {+quanLyShop === 0 && detailSanPham === 0 ? (
                                <div>
                                    <HeaderShop
                                        quanLyShop={quanLyShop}
                                        setquanLyShop={setquanLyShop}
                                    />
                                    <SanPham
                                        detailSanPham={detailSanPham}
                                        setdetailSanPham={setdetailSanPham}
                                    />
                                </div>
                            ) : (
                                <></>
                            )}
                            {+quanLyShop === 1 ? (
                                <SuaSanPham
                                    quanLyShop={quanLyShop}
                                    setquanLyShop={setquanLyShop}
                                />
                            ) : (
                                <></>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
export default ShopOnline;
