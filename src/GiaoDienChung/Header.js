import "./Header.scss";
import logo from "../assets/images/logo.jpg";
import avatar from "../assets/images/my-avatar.jpg";

const Header = () => {
    return (
        <>
            <div className="container-header">
                <img src={logo} alt="he" className="logo" />
                <div className="title"> Ket Noi Trai Tim</div>
                <div className="my-detail">
                    <img src={avatar} alt="he" className="my-avatar" />
                    <div className="my-cash">$120.000xu</div>
                </div>
            </div>
        </>
    );
};
export default Header;
