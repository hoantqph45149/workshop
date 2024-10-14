import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const News = () => {
  const news = [1, 2, 3, 4];
  return (
    <section id="news" className="py-20">
      <div className="container mx-auto px-20">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl text-[#262626] font-bold">News</h1>
          <button className="border-2 border-[#CA8A04] text-[#CA8A04] hover:bg-yellow-500 hover:text-white text-base font-semibold px-4 py-2">
            View All News
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-5">
          {news.map((news) => (
            <div className="max-w-xs rounded-sm" key={news}>
              <img
                src={`https://picsum.photos/600/600/?random=${news}`}
                alt="A bedroom"
                className="w-full h-[212px] rounded-t-lg object-cover"
              />
              <div className="pt-4">
                <div className="text-gray-500 text-sm mb-2 flex items-center">
                  <FaCalendarAlt className="h-4 w-4 mr-1" />
                  {new Date().toLocaleDateString()}
                </div>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  A bedroom must have something like this
                </h2>
                <a
                  href="#"
                  className="text-red-500 text-sm font-medium hover:underline flex items-center"
                >
                  Xem chi tiết
                  <FiArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
