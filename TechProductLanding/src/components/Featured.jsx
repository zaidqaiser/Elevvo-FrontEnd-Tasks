import React from "react";

const Featured = () => {
  return (
    <div className="w-[90%] max-w-7xl mx-auto py-12">
      <h2 className="text-white text-sm font-semibold mb-4">FEATURED ON</h2>
      <div className="bg-[#302A63]/60 rounded-lg px-6 py-4 flex justify-evenly items-center flex-wrap gap-8">
        <img
          src="/assets/image5.png"
          alt="fastcompany"
          className="h-10 md:h-full object-contain"
        />
        <img
          src="/assets/image6.png"
          alt="tech"
          className="h-10 md:h-full object-contain"
        />
        <img
          src="/assets/image7.png"
          alt="MIT"
          className="h-10 md:h-full object-contain"
        />
        <img
          src="/assets/image8.png"
          alt="Forbes"
          className="h-10 md:h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Featured;
