import React from "react";
import { FaBullseye, FaRoad, FaHeart } from "react-icons/fa";
import Banner from "../../components/Banner";

const AboutPage: React.FC = () => {
  const services = [
    {
      title: "FLOORING",
      image: "https:/picsum.photos/1500/800/?random=1",
    },
    {
      title: "REFINISHING",
      image: "https:/picsum.photos/1500/800/?random=2",
    },
    {
      title: "INSTALLATION",
      image: "https:/picsum.photos/1500/800/?random=3",
    },
    {
      title: "WARMING THE FLOOR",
      image: "https:/picsum.photos/1500/800/?random=4",
    },
  ];
  return (
    <>
      <Banner />
      <div className="pt-8">
        {/* Mission, Vision, Values Section */}
        <div className="max-w-full mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Mission */}
            <div className="bg-white p-6">
              <FaBullseye className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">OUR MISSION</h3>
              <p className="text-gray-700">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-6">
              <FaRoad className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">OUR VISION</h3>
              <p className="text-gray-700">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-6">
              <FaHeart className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">OUR VALUES</h3>
              <p className="text-gray-700">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
        </div>

        {/* About Furniro Section */}
        <div className="max-w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image */}
            <div className="w-full">
              <img
                src="https://picsum.photos/600/400"
                alt="House"
                className="w-full h-full object-cover"
              />
            </div>

            {/* About Furniro Company Text */}
            <div className="p-6 bg-white flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6">ABOUT FURNIRO COMPANY</h2>
              <p className="text-gray-700 mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p className="text-gray-700">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            WE CREATE NATURAL WOOD FURNITURE <br /> AS WELL AS HIGH-QUALITY
          </h2>
        </div>

        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto px-20">
          {services.map((service, index) => (
            <div key={index} className="relative group">
              <img
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-[396px] rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <span className="text-white font-bold text-lg">
                  {service.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutPage;
