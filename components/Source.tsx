import { FaArrowAltCircleRight } from "react-icons/fa";

const Source = () => {
    return (
        <section className="py-20 bg-slate-100">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">Nguồn tham khảo</h2>
                <p className="text-lg leading-relaxed mb-12 w-3/4 mx-auto text-gray-700">
                    Dưới đây là các nguồn tham khảo đã hỗ trợ cho việc phát triển trò chơi này. Chúng tôi xin chân thành cảm ơn sự hỗ trợ từ các tài nguyên quý giá này.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    <li className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <h3 className="text-xl font-bold mb-4 text-gray-800">Chia tách file</h3>
                        <p className="text-gray-600 mb-4">Sử dụng kỹ thuật chia tách file để tổ chức mã nguồn theo từng module, tham khảo ở kênh youtube Phát Triển Phần Mềm 123A-Z.</p>
                        <a href="https://www.youtube.com/@PhatTrienPhanMem123AZ" className="text-blue-500 font-bold flex items-center hover:text-blue-700 transition-colors">
                            <FaArrowAltCircleRight className="mr-2" /> Nguồn
                        </a>
                    </li>
                    <li className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <h3 className="text-xl font-bold mb-4 text-gray-800">SDL</h3>
                        <p className="text-gray-600 mb-4">Thư viện SDL (Simple DirectMedia Layer) đã hỗ trợ mạnh mẽ trong việc xử lý đồ họa, âm thanh và các tương tác người dùng. Tham khảo cách cài đặt và sử dụng ở trang Lazyfoo.</p>
                        <a href="https://lazyfoo.net/tutorials/SDL" className="text-blue-500 font-bold flex items-center hover:text-blue-700 transition-colors">
                            <FaArrowAltCircleRight className="mr-2" /> Nguồn
                        </a>
                    </li>
                    <li className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <h3 className="text-xl font-bold mb-4 text-gray-800">Ảnh</h3>
                        <p className="text-gray-600 mb-4">Các hình ảnh minh họa trong trò chơi được lấy từ nguồn tài nguyên ảnh chất lượng cao của trang CraftPix.</p>
                        <a href="https://craftpix.net" className="text-blue-500 font-bold flex items-center hover:text-blue-700 transition-colors">
                            <FaArrowAltCircleRight className="mr-2" /> Nguồn
                        </a>
                    </li>
                    <li className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <h3 className="text-xl font-bold mb-4 text-gray-800">Âm thanh</h3>
                        <p className="text-gray-600 mb-4">Âm thanh trong game được sử dụng từ nguồn miễn phí bản quyền, tạo nên trải nghiệm chân thực và sống động được lấy từ trang Mixkit.</p>
                        <a href="https://mixkit.co/free-sound-effects/game/" className="text-blue-500 font-bold flex items-center hover:text-blue-700 transition-colors">
                            <FaArrowAltCircleRight className="mr-2" /> Nguồn
                        </a>
                    </li>
                    <li className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <h3 className="text-xl font-bold mb-4 text-gray-800">Code</h3>
                        <p className="text-gray-600">Mã nguồn được xây dựng dựa trên kiến thức học được từ các khóa học và tài liệu lập trình uy tín.</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Source;
