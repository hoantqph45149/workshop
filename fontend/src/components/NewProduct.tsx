import React from "react";
import ProductItem from "./ProductItem";

const NewProduct = ({ type }: { type: string }) => {
  const products = [1, 2, 3, 4];
  return (
    <section id="newproduct" className="py-20 w-full">
      <div className="container mx-auto px-20">
        {type === "new" && (
          <>
            <div className="flex justify-between items-center">
              <h1 className="text-3xl text-[#262626] font-bold ">
                New Product
              </h1>
              <button className="border-2 border-[#CA8A04] text-[#CA8A04]  hover:bg-yellow-500 hover:text-white text-base font-semibold px-4 py-2">
                View All Product
              </button>
            </div>
          </>
        )}
        {type === "related" && (
          <>
            <div className="flex justify-center items-center">
              <h1 className="text-3xl text-[#262626] font-bold ">
                Related Product
              </h1>
            </div>
          </>
        )}
        <div className="grid grid-cols-1 pt-5 md:grid-cols-2 lg:grid-cols-4  gap-8">
          {products.map((product) => (
            <ProductItem key={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewProduct;
