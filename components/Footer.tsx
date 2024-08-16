import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto text-center">
                <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">Conqueror's Journey</h3>
                    <p className="text-sm">
                        © 2024 Conqueror's Journey. Tất cả các quyền được bảo lưu.
                    </p>
                </div>
                <div className="flex justify-center space-x-6 mb-6">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaTwitter size={24} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
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
