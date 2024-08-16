import { motion } from "framer-motion";

const GameObject = () => {
  return (
    <section id="objects" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Các Đối Tượng Trong Game</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold mb-2">Nhân Vật Chính</h3>
            <p className="mb-4">
              Nhân vật chính của câu chuyện, chiến đấu vượt qua các vật cản và kẻ thù để khám phá bí mật của hòn đảo.
            </p>
            <img
              src="https://i.pinimg.com/originals/1e/d2/05/1ed2051b243b94de885c4c96cbe4b45f.jpg"
              alt="Nhân Vật Chính"
              className="mx-auto mt-4 h-48 object-cover rounded-lg"
            />
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold mb-2">Vật Phẩm</h3>
            <p className="mb-4">
              Thu thập các vật phẩm như nhảy cao, khả năng bay, và vô hình để giúp bạn trong hành trình.
            </p>
            <div className="flex space-x-3 justify-center mt-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoq9sqejTHI1WeN8MRu7xJKK5ZxfJ33VA7OEaCcBsfPiwx04SudC9O3Osgp4PLPb2NRM4&usqp=CAU"
                alt="Nhảy Cao"
                className="h-20 object-cover rounded-lg"
              />
              <img
                src="https://png.pngtree.com/png-vector/20220307/ourmid/pngtree-icons-for-isometric-game-elements-colorful-isolated-vector-illustration-of-item-png-image_4420676.png"
                alt="Khả Năng Bay"
                className="h-20 object-cover rounded-lg"
              />
              <img
                src="https://png.pngtree.com/png-vector/20220307/ourmid/pngtree-icons-for-isometric-game-elements-colorful-isolated-vector-illustration-of-item-png-image_4420675.png"
                alt="Vô Hình"
                className="h-20 object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold mb-2">Kẻ Thù</h3>
            <p className="mb-4">
              Hãy cẩn thận với những thổ dân thù địch, họ sẽ không từ bỏ bất cứ điều gì để bảo vệ hòn đảo khỏi kẻ xâm nhập.
            </p>
            <div className="flex space-x-3 justify-center mt-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoq9sqejTHI1WeN8MRu7xJKK5ZxfJ33VA7OEaCcBsfPiwx04SudC9O3Osgp4PLPb2NRM4&usqp=CAU"
                alt="Kẻ Thù 1"
                className="h-20 object-cover rounded-lg"
              />
              <img
                src="https://png.pngtree.com/png-vector/20220307/ourmid/pngtree-icons-for-isometric-game-elements-colorful-isolated-vector-illustration-of-item-png-image_4420676.png"
                alt="Kẻ Thù 2"
                className="h-20 object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold mb-2">Vật Cản</h3>
            <p className="mb-4">
              Hãy vượt qua những vật cản như cây cối, đá tảng, và nhiều thử thách khác để tiến xa hơn trong cuộc hành trình.
            </p>
            <div className="flex space-x-3 justify-center mt-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoq9sqejTHI1WeN8MRu7xJKK5ZxfJ33VA7OEaCcBsfPiwx04SudC9O3Osgp4PLPb2NRM4&usqp=CAU"
                alt="Vật Cản"
                className="h-20 object-cover rounded-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GameObject;
