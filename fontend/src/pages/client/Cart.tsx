import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const CartPage = () => {
  return (
    <div className="container mx-auto p-20">
      <div className="w-full flex justify-between gap-8 bg-white">
        <table className="w-2/3">
          <thead>
            <tr className="bg-gray-100 text-gray-600">
              <th className="py-2 px-4 text-left">Product</th>
              <th className="py-2 px-4 text-left">Price</th>
              <th className="py-2 px-4 text-left">Quantity</th>
              <th className="py-2 px-4 text-left">Subtotal</th>
              <th className="py-2 px-4 text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4 flex items-center">
                <img
                  src="https://picsum.photos/400/400/?random=1"
                  alt="Asgaard sofa"
                  className="h-16 w-16 object-cover mr-2"
                />
                <span>Asgaard sofa</span>
              </td>
              <td className="py-2 px-4">25.000.000đ</td>
              <td className="py-2 px-4">1</td>
              <td className="py-2 px-4">25.000.000đ</td>
              <td className="py-2 px-4">
                <button className="text-red-600 hover:text-red-800">
                  <FaRegTrashAlt />
                </button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4 flex items-center">
                <img
                  src="https://picsum.photos/400/400/?random=1"
                  alt="Asgaard sofa"
                  className="h-16 w-16 object-cover mr-2"
                />
                <span>Asgaard sofa</span>
              </td>
              <td className="py-2 px-4">25.000.000đ</td>
              <td className="py-2 px-4">1</td>
              <td className="py-2 px-4">25.000.000đ</td>
              <td className="py-2 px-4">
                <button className="text-red-600 hover:text-red-800">
                  <FaRegTrashAlt />
                </button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4 flex items-center">
                <img
                  src="https://picsum.photos/400/400/?random=1"
                  alt="Asgaard sofa"
                  className="h-16 w-16 object-cover mr-2"
                />
                <span>Asgaard sofa</span>
              </td>
              <td className="py-2 px-4">25.000.000đ</td>
              <td className="py-2 px-4">1</td>
              <td className="py-2 px-4">25.000.000đ</td>
              <td className="py-2 px-4">
                <button className="text-red-600 hover:text-red-800">
                  <FaRegTrashAlt />
                </button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4 flex items-center">
                <img
                  src="https://picsum.photos/400/400/?random=1"
                  alt="Asgaard sofa"
                  className="h-16 w-16 object-cover mr-2"
                />
                <span>Asgaard sofa</span>
              </td>
              <td className="py-2 px-4">25.000.000đ</td>
              <td className="py-2 px-4">1</td>
              <td className="py-2 px-4">25.000.000đ</td>
              <td className="py-2 px-4">
                <button className="text-red-600 hover:text-red-800">
                  <FaRegTrashAlt />
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="w-1/3 flex flex-col p-4 bg-[#F5F5F5] self-start">
          <div className="flex flex-col">
            <h2 className="text-xl py-2 text-center font-bold border-b-2 border-[#111]">
              Cart Total
            </h2>
            <div className="flex justify-between my-2">
              <span className="text-[#262626] font-semibold">Subtotal:</span>
              <span className="font-semibold">25.000.000đ</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#262626] font-semibold">Total:</span>
              <span className="font-bold text-xl text-[#EF4444]">
                25.000.000đ
              </span>
            </div>
          </div>
          <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 mt-2">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
