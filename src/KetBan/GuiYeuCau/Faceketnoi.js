import "./Faceketnoi.scss";

const Faceketnoi = (props) => {
    const { handleHuyKetNoi } = props;
    return (
        <div>
            <h1>Yêu Cầu Kết Nối Của Bạn Đã Được Gửi Đi</h1>
            <div>
                Xin Vui Lòng Đợi Trả Lời! <br /> Có thể đối phương đang bận và
                chưa kịp xem được yêu cầu kết nối của bạn!
            </div>
            <div>
                Nếu chờ lâu quá mà chưa có phản hồi! <br /> Bạn có thể huỷ Yêu
                Cầu Kết Nối để kết nối với người khác!
            </div>
            <div>Còn rất nhiều người để bạn có thể làm quen!</div>
            <div>
                Trong lúc chờ đợi bạn có thể giới thiệu iUiU.Online đến những
                người bạn độc thân của mình! Để có thể cùng nhau tìm người yêu
                hoặc chơi Mini Game quay số may mắn để nhận rất nhiều phần quà!
                <br />
                Cảm ơn bạn rất nhiều!
            </div>
            <div>CHÚC BẠN SỚM TÌM ĐƯỢC MỘT NỬA YÊU THƯƠNG</div>
            <button className="xinLamQuen" onClick={() => handleHuyKetNoi}>
                Huỷ Kết Nối
            </button>
        </div>
    );
};
export default Faceketnoi;
