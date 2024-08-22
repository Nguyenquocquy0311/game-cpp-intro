import React from 'react';
import { FaGithub, FaYoutube } from 'react-icons/fa';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative bg-cover bg-home-bg-gradient bg-center h-[100vh] text-blue-900 flex items-center justify-center">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between h-full">
                {/* Left side - Text */}
                <div className="md:w-1/2 text-center md:text-left mx-4">
                    <h4 className="text-[52px] font-bold mb-5 leading-tight">Conqueror&rsquo;s Journey - Chinh phục hòn đảo, khám phá bí mật !</h4>
                    <p className="text-[16px] mb-10">
                        Một trò chơi phiêu lưu hành động đơn giản nhưng thú vị, được phát triển bằng thư viện SDL2. Trong game, người chơi sẽ vào vai một nhân vật chính, chạy qua các chướng ngại vật và thu thập các vật phẩm hỗ trợ để tiến xa hơn. Với đồ họa 2D mộc mạc và âm thanh sống động, trò chơi mang lại cảm giác thú vị và thách thức. Game có nhiều vật phẩm đặc biệt như nhảy cao, nhảy xa và bất tử,..giúp người chơi vượt qua các chướng ngại vật dễ dàng hơn. Bên cạnh đó, <span className='font-bold'>&quot;Conqueror&rsquo;s Journey&quot;</span> còn có màn hình menu thân thiện, giúp người chơi dễ dàng bắt đầu hoặc thoát khỏi trò chơi. Hãy thử sức và xem bạn có thể đi được bao xa trong hành trình chinh phục này
                    </p>
                    <a
                        href="https://github.com/Nguyenquocquy0311/game_cpp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 mx-2 bg-gray-700 hover:bg-gray-400 text-white font-bold rounded-lg transition duration-300">
                        <FaGithub size={24}/>
                    </a>

                    <a
                        href="https://youtu.be/PtOxfNqXwfk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 mx-2 bg-red-500 hover:bg-red-700 text-white font-bold rounded-lg transition duration-300">
                        <FaYoutube size={24} />
                    </a>
                </div>

                {/* Right side - Image */}
                <div className="md:w-1/2 mt-8 md:mt-0">
                    <img src="img/tải xuống.png" alt="Conqueror's Journey Logo" className="w-full h-auto object-contain" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
