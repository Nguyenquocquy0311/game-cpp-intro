import React from 'react';

const Author: React.FC = () => {
  return (
    <section className="py-20 bg-white container">
      <div className="text-center mb-10">
        <h4 className='text-[32px] font-bold'>Về nhà phát triển</h4>
        <p className="text-lg leading-relaxed">
          Trò chơi này được tạo bởi <a href="#" className="text-blue-500 hover:underline">Nguyễn Quốc Quý</a>,
          một nhà phát triển game đam mê sáng tạo những trải nghiệm chơi game độc đáo. Với nền tảng phát triển
          phần mềm và niềm đam mê kể chuyện, Nguyễn Quốc Quý mong muốn mang lại điều gì đó mới mẻ cho thế giới game với
          <span className="italic"> "Conqueror's Journey"</span>.
        </p>
      </div>
      <div className="mx-auto flex flex-col md:flex-row space-x-8 items-center justify-between">
        {/* Left Side - Text */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/430990777_1644637016341607_5406936513515478401_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=JLZmKrznnAsQ7kNvgHDNfhS&_nc_ht=scontent.fhan14-2.fna&oh=00_AYCxucVJrR7Q7lCsoCKty-aNNf9dMUWC8j_h8gXGVuysIA&oe=66C57817" alt="Nguyễn Quốc Quý" className="w-[400px] h-[400px] rounded-xl shadow-lg" />
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <ul>
            <li><a href=''>Profile</a></li>
            <li><a href=''>Contact</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Author;
