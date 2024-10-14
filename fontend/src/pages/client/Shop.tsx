import { Pagination } from "antd";
import Banner from "../../components/Banner";
import ProductItem from "../../components/ProductItem";
import Services from "../../components/Services";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
const ShopPage = () => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      <Banner />
      <div className="container mx-auto px-20">
        <div className="flex">
          {/* Categories Sidebar */}
          <div className="w-1/4 p-4">
            <h1 className="text-xl font-semibold mb-4">Categories</h1>
            <ul className="space-y-2">
              <li className="">
                <a className="focus:text-[#CA8A04]" href="#">
                  Cafe Chair
                </a>
              </li>
              <li>
                <a className="focus:text-[#CA8A04]" href="#">
                  Sofa
                </a>
              </li>
              <li>
                <a className="focus:text-[#CA8A04]" href="#">
                  Lamp
                </a>
              </li>
              <li>
                <a className="focus:text-[#CA8A04]" href="#">
                  Carpet
                </a>
              </li>
              <li>
                <a className="focus:text-[#CA8A04]" href="#">
                  Cabinet
                </a>
              </li>
              <li>
                <a className="focus:text-[#CA8A04]" href="#">
                  Tea table
                </a>
              </li>
            </ul>
          </div>
          {/* Product Grid */}
          <div className="w-3/4 grid grid-cols-3 gap-6 p-4">
            {products.map((product, index) => (
              <ProductItem key={index} />
            ))}
            <Pagination
              defaultCurrent={1}
              total={50}
              size="default"
              itemRender={(current, type, originalElement) => {
                if (type === "prev") {
                  return (
                    <button
                      className="mr-3" // Thiết lập màu trắng qua inline style
                    >
                      <FaAngleDoubleLeft />
                    </button>
                  );
                }
                if (type === "next") {
                  return (
                    <button
                      className="ml-3" // Thiết lập màu trắng qua inline style
                    >
                      <FaAngleDoubleRight />
                    </button>
                  );
                }

                return originalElement;
              }}
            />
          </div>
        </div>
      </div>
      <Services />
    </div>
  );
};

export default ShopPage;
