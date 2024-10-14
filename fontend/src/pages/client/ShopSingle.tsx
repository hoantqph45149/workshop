import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import ProductTabs from "../../components/ProductTab";
import NewProduct from "../../components/NewProduct";
import axios from "axios";

const ShopSinglePage = () => {
  const [product, setProduct] = useState({} as any);
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("purple");
  const [mainImage, setMainImage] = useState(
    "https://picsum.photos/400/400/?random=1"
  ); // Đường dẫn ảnh chính (thay thế bằng link ảnh thật)

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:3000/products/36596");
      setProduct(data);
    })();
  }, []);
  // Define size and color options
  const sizes = ["L", "XL", "XS"];
  const colors = [
    { name: "purple", colorClass: "bg-purple-600" },
    { name: "gray", colorClass: "bg-gray-700" },
    { name: "yellow", colorClass: "bg-yellow-500" },
  ];
  const images = [
    "https://picsum.photos/400/400/?random=1",
    "https://picsum.photos/400/400/?random=2",
    "https://picsum.photos/400/400/?random=3",
    "https://picsum.photos/400/400/?random=4",
    "https://picsum.photos/400/400/?random=5",
  ];

  const onChange = (key: any) => {
    console.log(key);
  };

  return (
    <div className="bg-gray-50 pt-8">
      <div className="container mx-auto px-20 grid grid-cols-6 gap-8">
        {/* Phần bên trái: Bộ sưu tập hình ảnh */}
        <div className="col-span-3 flex gap-4">
          <div className="grid grid-cols-1 gap-2 mt-4">
            {images.map((thumbnail, index) => (
              <img
                key={index}
                src={thumbnail}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setMainImage(thumbnail)}
                className={`w-20 h-20 rounded-lg cursor-pointer object-cover ${
                  mainImage === thumbnail ? "ring-2 ring-yellow-500" : ""
                }`}
              />
            ))}
          </div>

          <img
            src={mainImage}
            alt="Product"
            className="w-full h-full rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Phần bên phải: Chi tiết sản phẩm */}
        <div className="col-span-3 flex flex-col gap-4">
          {/* Tên và giá sản phẩm */}
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-red-500 text-3xl font-semibold">
            {product.max_variant_price}
          </p>

          {/* Đánh giá sao */}
          <div className="flex items-center gap-1 text-yellow-500">
            <span className="text-lg">★★★★★</span>
            <span className="text-gray-500 text-sm">
              (5 đánh giá từ khách hàng)
            </span>
          </div>

          {/* Mô tả sản phẩm */}
          <p className="text-gray-600">
            Với âm thanh mạnh mẽ, cân bằng tốt giữa mid và high, Kilburn là một
            người hùng nhỏ gọn, mạnh mẽ, mang lại chất âm rõ ràng.
          </p>

          {/* Lựa chọn kích thước */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Kích thước:</span>
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 rounded ${
                  selectedSize === size
                    ? "bg-gray-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Lựa chọn màu sắc */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm font-medium">Màu sắc:</span>
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                className={`w-6 h-6 rounded-full ${color.colorClass} ${
                  selectedColor === color.name
                    ? "ring-2 ring-offset-2 ring-gray-500"
                    : ""
                }`}
              ></button>
            ))}
          </div>

          {/* Số lượng và Thêm vào giỏ hàng */}
          <div className="flex items-center gap-4 mt-4">
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-16 h-10 text-center border border-gray-300 rounded"
            />
            <button className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600">
              Thêm vào giỏ hàng
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
              + So sánh
            </button>
          </div>

          {/* Thông tin bổ sung */}
          <div className="mt-6 text-sm text-gray-500">
            <p>SKU: SS001</p>
            <p>Danh mục: Sofa</p>
            <p>Tags: Sofa, Ghế, Nhà cửa, Cửa hàng</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-20">
        <ProductTabs />
      </div>
      <NewProduct type="related" />
    </div>
  );
};

export default ShopSinglePage;
