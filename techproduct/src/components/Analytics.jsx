import React from "react";

const Analytics = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-center w-[90%] max-w-7xl mx-auto py-12 gap-10">
      {/* Left Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img src="/assets/tasks.png" alt="Analytics" className="max-w-sm md:max-w-md lg:max-w-lg" />
      </div>

      {/* Right Content */}
      <div className="text-white w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h2 className="text-white text-sm font-semibold">ANALYTICS</h2>
        <h1 className="text-3xl sm:text-4xl md:text-[4vw] font-bold leading-tight">
          Built-In Analytics <br /> To Track Your NFTs 
        </h1>
        <p className="text-base sm:text-md md:text-lg">
          Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.
        </p>
        <button className="mt-4 text-[#8A8ADA] border-4 border-[#8A8ADA] px-6 py-3 rounded-full font-semibold hover:bg-[#8A8ADA] hover:text-white transition">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Analytics;
