import { FaMountain, FaMapSigns, FaQuestionCircle, FaKickstarter, FaTrain, FaFighterJet, FaTractor, FaUserNinja } from "react-icons/fa";

const Story = () => {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Cốt Truyện</h2>
        <div className="pb-12 mx-auto text-[14px] text-slate-500 font-medium w-3/4">John là 1 sĩ quan quân đội cấp cao, sau khi kết thúc nhiệm vụ và được bộ chỉ huy cho nghỉ phép dài ngày, John đã lên kế hoạch đi du lịch Maldivies cùng các đồng đội trong tiểu đội của mình. Tuy nhiên trong lúc đang bay đến Maldivies thì máy bay gặp sự cố và các hành khách trên máy bay buộc phải nhảy dù khẩn cấp để thoát nạn, John vô tình rơi xuống 1 hòn đảo bí ẩn, nằm sâu trong lòng đại dương, nơi sinh sống của 1 bộ tộc hung tợn, bộ tộc này đã tồn tại từ hàng thế kỷ, hoàn toàn tách biệt với thế giới bên ngoài. John, sau khi tiếp đất một cách an toàn, nhận ra rằng mình đang ở trên một hòn đảo hoàn toàn xa lạ, không có dấu hiệu của nền văn minh hiện đại. Hòn đảo được bao phủ bởi những cánh rừng rậm rạp, các vách núi đá hiểm trở, và các tàn tích cổ xưa mang dấu ấn của một nền văn minh đã mất.</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          <div className="p-6">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <FaMountain size={36} className="text-blue-500" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">Khám Phá Hòn Đảo</h3>
            <p className="mx-auto w-[360px]">
              John phát hiện mình bị mắc kẹt trên một hòn đảo bí ẩn, đầy những tàn tích cổ xưa và môi trường thiên nhiên khắc nghiệt.
            </p>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-red-100 p-4 rounded-full">
                <FaUserNinja size={36} className="text-red-500" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">Đối Mặt Với Bộ Tộc</h3>
            <p className="mx-auto w-[360px]">
              Trên hòn đảo, John phải đối mặt với một bộ tộc thổ dân hung tợn, những kẻ bảo vệ bí mật cổ xưa của hòn đảo bằng mọi giá.
            </p>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-100 p-4 rounded-full">
                <FaMapSigns size={36} className="text-green-500" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">Cuộc Hành Trình</h3>
            <p className="mx-auto w-[360px]">
              John bắt đầu hành trình tìm kiếm sự trợ giúp và những người đồng đội còn sống sót, trong khi phải vượt qua nhiều thử thách.
            </p>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-purple-100 p-4 rounded-full">
                <FaQuestionCircle size={36} className="text-purple-500" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">Bí Mật Cổ Xưa</h3>
            <p className="mx-auto w-[360px]">
              Trong quá trình khám phá, John phát hiện ra một bí mật cổ xưa có thể thay đổi vận mệnh của cả thế giới nếu rơi vào tay kẻ xấu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
