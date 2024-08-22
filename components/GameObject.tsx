import { useState } from "react";

const GameObject = () => {
  const [selectedCategory, setSelectedCategory] = useState("character");

  const renderContent = () => {
    switch (selectedCategory) {
      case "character":
        return (
          <div className="justify-center mt-4">
            <div className="w-3/4 mx-auto my-4 text-lg font-bold text-gray-800">
              Nhân vật chính của câu chuyện, chiến đấu vượt qua các vật cản và kẻ thù để khám phá bí mật của hòn đảo. <p className="px-4 text-base font-normal">Nhân vật chính mới vào game sẽ có 10 viên đạn, có trang bị sẵn súng và thể lực mới vào game là 200. Nhân vật có thể nhảy, bắn và né các vật cản và thổ dân. Mỗi lần nhảy hoặc chạy thì sẽ tốn thể lực.</p>
            </div>
            <div className="flex space-x-4 justify-center">
              <div className="flex flex-col">
                <div className="sprite-player" />
                <p className="font-normal mt-2">Chạy</p>
              </div>
              <div className="flex flex-col">
                <img
                  src="img/shoot.jpeg"
                  alt="Nhân Vật Chính"
                  className="h-60 object-cover rounded-lg"
                />
                <p className="font-normal mt-2">Bắn</p>
              </div>
              <div className="flex flex-col">
                <img
                  src="img/run.jpeg"
                  alt="Nhân Vật Chính"
                  className="h-60 w-[320px] rounded-lg"
                />
                <p className="font-normal mt-2">Nhảy</p>
              </div>
            </div>
          </div>
        );
      case "powerup":
        return (
          <div className="justify-center mt-4">
            <div className="w-3/4 mx-auto my-4 text-[20px] font-bold text-gray-700">
              Thu thập thuốc sức mạnh như nhảy cao, khả năng bay, và bất tử để giúp bạn trong hành trình.
              <ul className="text-left font-normal text-[16px] mx-6">
                <li><span className="font-bold">Nhảy cao: </span> Giúp nhân vật chính nhảy cao hơn bình thường, giúp nhân vật né được những vật cản cao hoặc những con quái bay thấp ở gần mình. Có tác dụng trong 5s.</li>
                <li><span className="font-bold">Bay: </span>Giúp nhân vật chính có thể di chuyển được ở trên không trong 1 khoảng thời gian. Điều này giúp người chơi có thể thu thập được những vật phẩm ở trên cao cũng như né được những cuộc tấn công ở dưới mặt đất của thổ dân. Có tác dụng trong 10s.</li>
                <li><span className="font-bold">Bất tử: </span>Vật phẩm giúp nhân vật chính chịu được những cuộc tấn công của quái vật hay thổ dân mà không hề bị thương tích gì. Ngoài ra nó cũng giúp nhân vật đi xuyên qua vật cản. Có tác dụng trong 10s.</li>
              </ul>
            </div>
            <div className="flex space-x-4 justify-center">
              <div className="flex flex-col">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoq9sqejTHI1WeN8MRu7xJKK5ZxfJ33VA7OEaCcBsfPiwx04SudC9O3Osgp4PLPb2NRM4&usqp=CAU"
                  alt="Nhảy Cao"
                  className="h-60 object-cover rounded-lg"
                />
                <p className="font-normal mt-2">Bất tử</p>
              </div>
              <div className="flex flex-col">
                <img
                  src="https://png.pngtree.com/png-vector/20220307/ourmid/pngtree-icons-for-isometric-game-elements-colorful-isolated-vector-illustration-of-item-png-image_4420676.png"
                  alt="Khả Năng Bay"
                  className="h-60 object-cover rounded-lg"
                />
                <p className="font-normal mt-2">Nhảy cao</p>
              </div>
              <div className="flex flex-col">
                <img
                  src="https://png.pngtree.com/png-vector/20220307/ourmid/pngtree-icons-for-isometric-game-elements-colorful-isolated-vector-illustration-of-item-png-image_4420675.png"
                  alt="Vô Hình"
                  className="h-60 object-cover rounded-lg"
                />
                <p className="font-normal mt-2">Bay</p>
              </div>
            </div>
          </div>
        );
      case "items":
        return (
          <div className="justify-center mt-4">
            <div className="w-3/4 mx-auto my-4 text-lg font-bold text-gray-800">
              Thu thập các vật như rìu, thực phẩm, bản đồ và balo để giúp bạn có thể sinh tồn và tiếp tục hành trình.
              <ul className="text-left font-normal text-[16px] mx-6 list-disc pl-6">
                <li><span className="font-bold">Rìu: </span> Giúp nhân vật chính phá hủy vật cản trên đường đi.</li>
                <li><span className="font-bold">Thực phẩm: </span>Giúp nhân vật chính hồi phụcthể lực.</li>
                <li><span className="font-bold">Bản đồ: </span>Giúp nhân vật chính tăng thêm điểm số.</li>
                <li><span className="font-bold">Balo: </span>Vật phẩm tiếp thêm đạn cho nhân vật chính.</li>
              </ul>
            </div>
            <div className="flex space-x-4 justify-center">
              <div className="flex flex-col">
                <img
                  src="img/kick.png"
                  alt="Vật Cản 2"
                  className="h-60 object-cover rounded-lg"
                />
                <p className="font-normal mt-2">Rìu</p>
              </div>
              <div className="flex flex-col">
                <img
                  src="img/bread.png"
                  alt="Vật Cản 2"
                  className="h-60 object-cover rounded-lg"
                />
                <p className="font-normal mt-2">Bánh mỳ</p>
              </div>
              <div className="flex flex-col">
                <img
                  src="img/map.png"
                  alt="Vật Cản 2"
                  className="h-60 object-cover rounded-lg"
                />
                <p className="font-normal mt-2">Bản đồ</p>
              </div>
              <div className="flex flex-col">
                <img
                  src="img/bag.png"
                  alt="Vật Cản 2"
                  className="h-60 object-cover rounded-lg"
                />
                <p className="font-normal mt-2">Balo</p>
              </div>
            </div>
          </div>
        );
      case "enemy":
        return (
          <div className="justify-center mt-4">
            <div className="w-3/4 mx-auto my-4 text-lg font-bold text-gray-800">
              Kẻ thù là những thổ dân thù địch và các quái vật nguy hiểm trên hòn đảo. Họ sẽ làm mọi cách để ngăn cản bạn khám phá bí mật của hòn đảo và tìm cách sinh tồn.
              <p className="px-4 text-base font-normal">
                Các thổ dân và quái vật trên đảo có những chiến thuật khác nhau để tấn công bạn. Thổ dân sẽ tấn công từ mặt đất, còn quái vật sẽ xuất hiện từ trên không, làm tăng độ khó và thử thách cho người chơi. Bạn cần vận dụng kỹ năng chiến đấu và phản xạ nhanh nhạy để đánh bại chúng.
              </p>
            </div>
            <div className="flex space-x-4 justify-center">
              <div className="flex flex-col">
                <div className="sprite-enemy-run" />
                <p className="font-normal mt-2">Thổ Dân</p>
              </div>
              <div className="flex flex-col">
                <div className="sprite-enemy-fly" />
                <p className="font-normal mt-2">Quái vật</p>
              </div>
            </div>
          </div>
        );
      case "obstacle":
        return (
          <div className="justify-center mt-4">
            <div className="!w-3/4 mx-auto my-4 text-lg font-bold text-gray-800">
              Trong hành trình của bạn, sẽ có rất nhiều vật cản xuất hiện để ngăn chặn bước tiến của bạn. Những vật cản này bao gồm các loại đá tảng lớn, cây cối chặn đường, và những cạm bẫy nguy hiểm khác.
              <p className="px-4 text-base font-normal pt-4">
                Để vượt qua những vật cản này, bạn cần thu thập các vật phẩm hỗ trợ hoặc sử dụng kỹ năng nhảy và né tránh một cách chính xác. Một số vật cản có thể được phá hủy bằng rìu hoặc né qua bằng cách nhảy cao.
              </p>
            </div>
            <div className="flex space-x-4 justify-center">
              <div className="flex flex-col">
                <img
                  src="img/obstacle1.png"
                  alt="Vật Cản 1"
                  className="h-60 object-cover rounded-lg"
                />
                <p className="font-normal mt-2">Đá Tảng</p>
              </div>
            </div>
          </div>
        );
        case "bullet":
        return (
          <div className="justify-center mt-4">
            <div className="w-3/4 mx-auto my-4 text-lg font-bold text-gray-800">
              Đạn là một phần quan trọng giúp nhân vật chính có thể tấn công và tiêu diệt kẻ thù. Bạn cần thu thập đạn trên đường đi để duy trì khả năng chiến đấu của mình.
              <ul className="text-left font-normal text-[16px] mx-6 list-disc pl-6">
                <li><span className="font-bold">Số lượng đạn: </span> Nhân vật chính bắt đầu với 10 viên đạn, bạn có thể thu thập thêm trong hành trình.</li>
                <li><span className="font-bold">Tăng số lượng đạn: </span> Sử dụng balo để tăng số lượng đạn có thể mang theo.</li>
              </ul>
            </div>
            <div className="flex space-x-4 justify-center">
              <div className="flex flex-col">
                <img
                  src="img/bullet2.png"
                  alt="Đạn"
                  className="h-60 object-cover rounded-lg"
                />
                <p className="font-normal mt-2">Đạn</p>
              </div>
              <div className="flex flex-col">
                <img
                  src="img/shoot.jpeg"
                  alt="Nhân Vật Chính"
                  className="h-60 object-cover rounded-lg"
                />
                <p className="font-normal mt-2">Nhân vật đang bắn</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="objects" className="py-20 bg-slate-100 h-[840px]">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Các thành phần Game</h2>
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setSelectedCategory("character")}
            className={`px-4 py-2 mr-4 rounded-lg ${selectedCategory === "character" ? "bg-black text-white" : "bg-gray-200"}`}
          >
            Nhân Vật
          </button>
          <button
            onClick={() => setSelectedCategory("powerup")}
            className={`px-4 py-2 mr-4 rounded-lg ${selectedCategory === "powerup" ? "bg-black text-white" : "bg-gray-200"}`}
          >
            Power Up
          </button>
          <button
            onClick={() => setSelectedCategory("items")}
            className={`px-4 py-2 mr-4 rounded-lg ${selectedCategory === "items" ? "bg-black text-white" : "bg-gray-200"}`}
          >
            Vật Phẩm
          </button>
          <button
            onClick={() => setSelectedCategory("enemy")}
            className={`px-4 py-2 mr-4 rounded-lg ${selectedCategory === "enemy" ? "bg-black text-white" : "bg-gray-200"}`}
          >
            Kẻ Thù
          </button>
          <button
            onClick={() => setSelectedCategory("obstacle")}
            className={`px-4 py-2 mr-4 rounded-lg ${selectedCategory === "obstacle" ? "bg-black text-white" : "bg-gray-200"}`}
          >
            Vật Cản
          </button>
          <button
            onClick={() => setSelectedCategory("bullet")}
            className={`px-4 py-2 rounded-lg ${selectedCategory === "bullet" ? "bg-black text-white" : "bg-gray-200"}`}
          >
            Đạn
          </button>
        </div>
        {renderContent()}
      </div>
    </section>
  );
};

export default GameObject;
