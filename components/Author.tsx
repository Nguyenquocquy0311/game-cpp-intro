import React from 'react';
import { FaArrowAltCircleRight, FaList, FaUser, FaUserCheck } from 'react-icons/fa';

const Author: React.FC = () => {
  return (
    <section id='author' className="py-20 bg-white container">
      <div className="text-center mb-10">
        <h4 className='text-[32px] font-bold pb-4'>Nhà phát triển</h4>
      </div>
      <div className="mx-auto flex flex-col md:flex-row space-x-8 items-center justify-between">
        {/* Left Side - Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img src="https://camo.githubusercontent.com/7de37139d0b4c1ce40865e799b446c0e963a3dd8fb68d239707237c40604fa3d/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f3733303730332f73637265656e73686f74732f363538313234332f6176656e746f2e676966" alt="Nguyễn Quốc Quý" className="w-auto h-[400px] rounded-xl" />
        </div>

        {/* Right Side - Text */}
        <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col items-center md:items-start">
          <div className='rounded-full bg-slate-200 p-8 mb-6 flex items-center justify-center w-24 h-24 ml-8'>
            <FaUser className="text-4xl" />
          </div>
          <p className="text-[16px] text-gray-500 font-bold leading-7 px-8 pb-6 text-center md:text-left">
            Trò chơi này là bài tập lớn môn Lập trình nâng cao, được phát bởi <span className="text-blue-500 hover:underline">Nguyễn Quốc Quý</span>,
            một nhà phát triển phần mềm đam mê sáng tạo và thích những trải nghiệm chơi game độc đáo. Với nền tảng lập trình, phát triển
            phần mềm và niềm đam mê kể chuyện, mình mong muốn mang lại điều gì đó mới mẻ cho thế giới game với
            <span className="italic"> "Conqueror's Journey"</span>.
          </p>
          <ul className='px-8'>
            <li className='text-[18px] font-bold text-blue-500'><a href='https://nguyenquocquy.vercel.app' target='_blank' className='flex items-center mb-2'><FaArrowAltCircleRight className="mr-2" />Profile</a></li>
            {/* <li><a href='' className='flex items-center'><FaUser className="mr-2" />Contact</a></li> */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Author;
