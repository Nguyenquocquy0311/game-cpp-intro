import { motion } from "framer-motion";

const HowToPlay = () => {
    return (
        <section id="how-to-play" className="py-20 bg-gray-200">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">Cách Chơi</h2>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform">
                        <h3 className="text-2xl font-bold mb-2">Bước 1: Khám Phá</h3>
                        <p className="mb-4">
                            Bắt đầu hành trình của bạn bằng cách khám phá hòn đảo bí ẩn, tìm kiếm các tài nguyên và nơi trú ẩn an toàn.
                        </p>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3063/3063206.png"
                            alt="Explore"
                            className="mx-auto mt-4 h-24 object-cover"
                        />
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform">
                        <h3 className="text-2xl font-bold mb-2">Bước 2: Thu Thập Vật Phẩm</h3>
                        <p className="mb-4">
                            Tìm kiếm và thu thập các vật phẩm như rìu, bản đồ, và thực phẩm để hỗ trợ bạn trong cuộc hành trình sinh tồn.
                        </p>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2972/2972510.png"
                            alt="Collect Items"
                            className="mx-auto mt-4 h-24 object-cover"
                        />
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform">
                        <h3 className="text-2xl font-bold mb-2">Bước 3: Chiến Đấu và Sinh Tồn</h3>
                        <p className="mb-4">
                            Sử dụng kỹ năng chiến đấu để đánh bại thổ dân thù địch và sống sót qua những thử thách khắc nghiệt trên đảo.
                        </p>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3062/3062531.png"
                            alt="Fight"
                            className="mx-auto mt-4 h-24 object-cover"
                        />
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform">
                        <h3 className="text-2xl font-bold mb-2">Bước 4: Phát Triển Chiến Lược</h3>
                        <p className="mb-4">
                            Lập kế hoạch và phát triển chiến lược để khám phá các bí mật của hòn đảo và tìm đường trở về nhà.
                        </p>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3141/3141774.png"
                            alt="Strategy"
                            className="mx-auto mt-4 h-24 object-cover"
                        />
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform">
                        <h3 className="text-2xl font-bold mb-2">Bước 5: Hoàn Thành Nhiệm Vụ</h3>
                        <p className="mb-4">
                            Hoàn thành các nhiệm vụ, thách thức để tiến đến màn chơi cuối cùng và khám phá sự thật về hòn đảo.
                        </p>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/271/271005.png"
                            alt="Complete Missions"
                            className="mx-auto mt-4 h-24 object-cover"
                        />
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform">
                        <h3 className="text-2xl font-bold mb-2">Bước 6: Giải Mã Bí Ẩn</h3>
                        <p className="mb-4">
                            Giải mã các bí ẩn và khám phá sự thật về nguồn sức mạnh cổ xưa đang ẩn giấu trên hòn đảo.
                        </p>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2633/2633861.png"
                            alt="Decode Mysteries"
                            className="mx-auto mt-4 h-24 object-cover"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HowToPlay;
