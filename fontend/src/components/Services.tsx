import React from "react";
import {
  FaHeadset,
  FaShieldAlt,
  FaShippingFast,
  FaTrophy,
} from "react-icons/fa";

const Services = () => {
  return (
    <section id="services">
      {" "}
      <div className="bg-[#FFF7ED] py-16">
        <div className="max-w-7xl mx-auto flex justify-between items-center space-x-8">
          <div className="flex items-center space-x-4">
            <FaTrophy className="h-10 w-10 text-black" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                High Quality
              </h3>
              <p className="text-gray-500 text-sm">
                Crafted from top materials
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FaHeadset className="h-10 w-10 text-black" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                24 / 7 Support
              </h3>
              <p className="text-gray-500 text-sm">Dedicated support</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FaShieldAlt className="h-10 w-10 text-black" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Warranty Protection
              </h3>
              <p className="text-gray-500 text-sm">Over 2 years</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FaShippingFast className="h-10 w-10 text-black" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Free Shipping
              </h3>
              <p className="text-gray-500 text-sm">Order over 150 $</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
