import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Plan: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    vertical: true, 
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex: number, newIndex: number) => setCurrentSlide(newIndex),
  };

  const planItems = [
    {
      title: "Tối ưu hóa game hơn",
      content: "Tối ưu hóa game hơn giúp cải thiện trải nghiệm người chơi và giảm thiểu các lỗi có thể gặp phải.",
      image: "img/run.jpeg",
    },
    {
      title: "Tạo thêm nhiều màn chơi nữa",
      content: "Thêm nhiều màn chơi mới để người chơi có thêm trải nghiệm mới và thử thách hơn.",
      image: "img/shoot.jpeg",
    },
    {
      title: "Thêm nhiều item giúp có game hấp dẫn hơn",
      content: "Các item mới sẽ làm cho trò chơi thêm phần thú vị và cung cấp cho người chơi nhiều tùy chọn chiến thuật.",
      image: "img/run.jpeg",
    },
    {
      title: "Có thể lưu lại lịch sử các lần chơi",
      content: "Tính năng lưu lại lịch sử chơi giúp người chơi có thể theo dõi tiến trình của mình.",
      image: "img/shoot.jpeg",
    }
  ];

  const scrollToSlide = (index: number) => {
    setCurrentSlide(index);
    sliderRef.slickGoTo(index);
  };

  let sliderRef: any;

  return (
    <section id="plan" className="pt-20 pb-32 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Hướng Phát Triển</h2>
        <p className="text-lg leading-relaxed w-3/4 mx-auto mb-12">
          Trong tương lai, chúng tôi dự định phát triển thêm các tính năng mới như chế độ chơi nhiều người, nâng cấp đồ họa, và thêm nhiều câu chuyện phụ để mở rộng thế giới của Game. Hãy cùng chờ đón những cập nhật tiếp theo!
        </p>

        <div className="flex items-start">
          <ul className="text-left text-[20px] font-bold w-1/2 ml-10">
            {planItems.map((item, index) => (
              <li key={index} className={`mb-2 px-4 py-3 cursor-pointer ${currentSlide === index ? 'shadow-lg rounded-md' : ''}`} onClick={() => scrollToSlide(index)}>
                {item.title}
                <p className="text-[14px] font-normal mt-2 w-3/4">{item.content}</p>
              </li>
            ))}
          </ul>
          <div className="w-1/2 pl-8">
            <Slider {...settings} ref={(slider: any) => (sliderRef = slider)}>
              {planItems.map((item, index) => (
                <div key={index} className="flex justify-center items-center h-full">
                  <img src={item.image} alt={item.title} className="rounded-lg shadow-lg h-96 w-[520px]" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
