import "./FormRegister.scss";
import CommonUtils from "../component/CommonUtils";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerPost } from "../redux/apiRequest";
import { useEffect } from "react";
const FormRegister = () => {
    const user = useSelector((state) => state.auth.login.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [hoTen, sethoTen] = useState("");
    const [banner, setBanner] = useState("");
    const [avatar, setAvatar] = useState("");
    const [chieuCao, setchieuCao] = useState("");
    const [previewAvatar, setpreviewAvatar] = useState("");
    const [previewBanner, setpreviewBanner] = useState("");

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
    console.log("avatar", avatar);
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
    console.log("banner", banner);
    // banner

    const handleRegisterPost = (e) => {
        e.preventDefault();
        if (!hoTen) {
            alert("Khong duoc bo trong Ho Va Ten");
            return;
        }
        try {
            const newPost = {
                hoTen: hoTen,
                banner: banner,
                avatar: avatar,
                chieuCao: chieuCao,
                user: user._id,
            };
            registerPost(newPost, dispatch, navigate);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="register-container">
            <div>
                {/* banner */}

                <label>Banner</label>
                <div className="preview-img-container">
                    <input
                        id="banner"
                        type="file"
                        hidden
                        onChange={handleOnchangeImageBanner}
                    />
                    <label htmlFor="banner" className="label-upload">
                        Tai Anh
                        <i className="fas fa-upload"></i>
                    </label>
                    <div className="preview-image">
                        {previewBanner && (
                            <img
                                src={previewBanner.preview}
                                width="250px"
                                height="150px"
                            />
                        )}
                    </div>
                </div>

                {/* banner */}
            </div>
            <div>
                {/* avatar */}
                <label>avatar</label>
                <div className="preview-img-container">
                    <input
                        id="avatar"
                        type="file"
                        hidden
                        onChange={handleOnchangeImage}
                    />
                    <label htmlFor="avatar" className="label-upload">
                        Tai Anh
                        <i className="fas fa-upload"></i>
                    </label>
                    <div className="preview-image">
                        {previewAvatar && (
                            <img
                                src={previewAvatar.preview}
                                width="250px"
                                height="150px"
                            />
                        )}
                    </div>
                </div>
                {/* avatar */}
            </div>
            <div>
                <label>Ho Va Ten</label>
                <input type="text" onChange={(e) => sethoTen(e.target.value)} />
            </div>
            <div>
                <label>Chieu Cao</label>
                <input
                    type="number"
                    onChange={(e) => setchieuCao(e.target.value)}
                />
            </div>
            <button type="submit" onClick={handleRegisterPost}>
                Luu Thong Tin
            </button>
        </div>
    );
};
export default FormRegister;
