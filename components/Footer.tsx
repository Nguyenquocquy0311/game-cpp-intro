import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto text-center">
                <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">Conqueror&rsquo;s Journey</h3>
                    <p className="text-sm">
                        © 2024 &quot;Conqueror&rsquo;s Journey&quot;. Tất cả các quyền được bảo lưu.
                    </p>
                </div>
                <div className="flex justify-center space-x-6 mb-6">
                    <a href="https://www.facebook.com/quocquy.nguyen.1023" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://youtu.be/PtOxfNqXwfk" target="_blank" rel="noopener noreferrer" className="hover:text-red-700">
                        <FaYoutube size={24} />
                    </a>
                    <a href="https://www.instagram.com/quyy.isme/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://github.com/Nguyenquocquy0311/game_cpp" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaGithub size={24} />
                    </a>
                </div>
                <div className="text-sm">
                    <p>
                        Được tạo bởi <a href="https://nguyenquocquy.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Nguyễn Quốc Quý</a>
                    </p>
                    <p>
                        Tham gia cuộc phiêu lưu và chinh phục những điều chưa biết!
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
