import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsAtTop(false);
      } else {
        setIsAtTop(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={classNames("fixed bg-cover text-gray-900 h-20 w-full px-10 z-50", isAtTop ? 'bg-home-bg-gradient' : 'bg-white shadow-md')}>
      <div className="mx-auto flex justify-between items-center h-full">
        {/* Logo */}
        <div className="text-2xl font-bold ">
          <a href="" className=" hover:text-gray-400">
            Conqueror&rsquo;s Journey
          </a>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 font-bold">
          <a href="#author" className="hover:text-gray-400">
            Nhà phát triển
          </a>
          <a href="#story" className="hover:text-gray-400">
            Câu chuyện
          </a>
          <a href="#objects" className="hover:text-gray-400">
            Thành phần
          </a>
          <a href="#how-to-play" className="hover:text-gray-400">
            Cách chơi
          </a>
          <a href="#plan" className="hover:text-gray-400">
            Hướng nâng cấp
          </a>
        </nav>

        {/* Action buttons */}
        {/* <div className="space-x-4">
          <button className="px-4 py-2 bg-transparent border border-white rounded hover:bg-gray-700">
            Đăng nhập
          </button>
          <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500">
            Đăng ký
          </button>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
