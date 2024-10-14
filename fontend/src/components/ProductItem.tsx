import React from "react";

const ProductItem = () => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-sm overflow-hidden">
      <img
        src={`https://picsum.photos/300/200/?random= ${Math.random()}`}
        alt="Syltherine Chair"
        className="w-full h-[300px] object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">Syltherine</h2>
        <p className="text-sm text-gray-600">Stylish cafe chair</p>
        <p className="text-red-500 font-bold text-lg mt-2">2.500.000đ</p>

        <button className="mt-4 w-full bg-white text-yellow-500 border border-yellow-500 hover:bg-yellow-500 hover:text-white font-semibold py-2 px-4 rounded transition-colors duration-300">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
