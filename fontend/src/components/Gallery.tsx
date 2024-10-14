import React from "react";

const Gallery = () => {
  const gallerys = [1, 2, 3, 4, 5, 6];
  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-20">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl text-[#262626] font-bold ">Gallery</h1>
          <button className="border-2 border-[#CA8A04] text-[#CA8A04]  hover:bg-yellow-500 hover:text-white text-base font-semibold px-4 py-2">
            View All Gallery
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-5">
          {gallerys.map((gallery) => (
            <div
              className="w-[406] h-[300] rounded-sm overflow-hidden"
              key={gallery}
            >
              <img
                src={`https://picsum.photos/406/300/?random=${gallery}`}
                alt=""
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
