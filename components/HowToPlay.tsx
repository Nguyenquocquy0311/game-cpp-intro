import { motion } from "framer-motion";

const HowToPlay = () => {
    return (
        <section id="how-to-play" className="py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">Cách Chơi</h2>
                <p className="text-gray-500 mb-14 mx-auto w-3/4">Trong game, bạn sẽ điều khiển nhân vật chính vượt qua các thử thách, thu thập vật phẩm và chiến đấu chống lại kẻ thù. Hãy khám phá bí mật của hòn đảo và sống sót trong hành trình đầy khó khăn này.</p>
                <motion.div
                    className="space-y-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <img
                            src="https://png.pngtree.com/png-vector/20240322/ourlarge/pngtree-cartoon-of-keyboard-control-button-police-png-image_12189675.png"
                            alt="Control Keys"
                            className="mx-auto w-[520px] h-96 object-cover rounded-xl"
                        />
                        <div className="text-left">
                            <h3 className="text-2xl font-bold mb-2">Các nút điều khiển</h3>
                            <ul className="mb-4 w-3/4">
                                <li className="font-bold">Nút ↑: <span className="font-normal">Khi đang ở trạng thái bình thường thì sẽ có chức năng nhảy, khi đang ở trạng thái bay thì sẽ điều chỉnh độ cao, thấp của nhân vật.</span></li>
                                <li className="font-bold">Nút ↓: <span className="font-normal">Khi đang ở trạng thái bay nút này sẽ hạ độ cao của nhân vật.</span></li>
                                <li className="font-bold">Nút ←: <span className="font-normal">Di chuyển sang trái</span></li>
                                <li className="font-bold">Nút →: <span className="font-normal">Di chuyển sang phải</span></li>
                                <li className="font-bold">Nút Space: <span className="font-normal">Nút này dùng để bắn thổ dân và quái.</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="text-left">
                            <h3 className="text-2xl font-bold mb-2">Di chuyển và né</h3>
                            <p className="mb-4 w-3/4">
                                Sử dụng các phím mũi tên để di chuyển nhân vật và né tránh các vật cản cũng như kẻ địch. Kỹ năng di chuyển tốt sẽ giúp bạn sống sót lâu hơn và thu thập nhiều vật phẩm hơn.
                            </p>
                        </div>
                        <img
                            src="img/run.jpeg"
                            alt="Dodge and Move"
                            className="mx-auto w-[520px] h-96 object-cover order-1 md:order-2 rounded-xl"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <img
                            src="img/collect.jpeg"
                            alt="Collect Items"
                            className="mx-auto w-[520px] h-96 object-cover rounded-xl"
                        />
                        <div className="text-left">
                            <h3 className="text-2xl font-bold mb-2">Thu thập vật phẩm</h3>
                            <p className="mb-4 w-3/4">
                                Thu thập các vật phẩm như rìu, thực phẩm, và bản đồ sẽ giúp bạn tăng cơ hội sống sót và mở khóa thêm các kỹ năng đặc biệt trong hành trình khám phá.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="text-left order-2 md:order-1">
                            <h3 className="text-2xl font-bold mb-2">Tấn công kẻ địch</h3>
                            <p className="mb-4 w-3/4">
                                Sử dụng kỹ năng và vũ khí để tiêu diệt thổ dân và quái vật. Đừng quên canh thời gian và chiến thuật hợp lý để đánh bại kẻ địch và bảo vệ bản thân.
                            </p>
                        </div>
                        <img
                            src="img/shoot.jpeg"
                            alt="Attack Enemies"
                            className="mx-auto w-[520px] h-96 object-cover order-1 md:order-2 rounded-xl"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HowToPlay;
