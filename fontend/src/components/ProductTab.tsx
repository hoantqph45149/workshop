import React, { useState } from "react";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <div className="transition-opacity duration-300 opacity-100">
            <p className="text-[#A3A3A3]">
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road. Weighing in under 7 pounds, the Kilburn is a lightweight
              piece of vintage styled engineering. Setting the bar as one of the
              loudest speakers in its class, the Kilburn is a compact,
              stout-hearted hero with a well-balanced audio which boasts a clear
              midrange and extended highs for a sound that is both articulate
              and pronounced. The analogue knobs allow you to fine tune the
              controls to your personal preferences while the guitar-influenced
              leather strap enables easy and stylish travel.
            </p>
            <div className="flex gap-4 mt-4">
              <img
                src="https://picsum.photos/200/200/?random=1"
                alt="Product"
                className="w-1/2 h-[380px] rounded-lg shadow-md object-cover"
              />
              <img
                src="https://picsum.photos/200/200/?random=2"
                alt="Product"
                className="w-1/2 h-[380px] rounded-lg shadow-md object-cover"
              />
            </div>
          </div>
        );
      case "additionalInfo":
        return (
          <p className="transition-opacity duration-300 opacity-100 text-gray-600">
            Here is some additional information about the product.
          </p>
        );
      case "reviews":
        return (
          <p className="transition-opacity duration-300 opacity-100 text-gray-600">
            Customer reviews will be displayed here.
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full pt-8">
      {/* Tab buttons */}
      <div className="flex gap-8 border-b border-gray-300 mb-4">
        <button
          className={`pb-2 transition duration-300 ${
            activeTab === "description"
              ? "text-black font-semibold border-b-2 border-black"
              : "text-[#A3A3A3] font-semibold hover:text-black"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`pb-2 transition duration-300 ${
            activeTab === "additionalInfo"
              ? "text-black font-semibold border-b-2 border-black"
              : "text-[#A3A3A3] font-semibold hover:text-black"
          }`}
          onClick={() => setActiveTab("additionalInfo")}
        >
          Additional Information
        </button>
        <button
          className={`pb-2 transition duration-300 ${
            activeTab === "reviews"
              ? "text-black font-semibold border-b-2 border-black"
              : "text-[#A3A3A3] font-semibold hover:text-black"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews [5]
        </button>
      </div>

      {/* Tab content */}
      <div className="mt-4 transition-opacity duration-300">
        {renderContent()}
      </div>
    </div>
  );
};

export default ProductTabs;
