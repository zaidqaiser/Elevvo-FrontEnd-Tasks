import React from "react";

const Hero = () => {
  return (
    <div className="min-h-[70vh]  w-[90%] max-w-7xl text-white flex flex-col md:flex-row items-center justify-center mx-auto px-4 py-8 gap-10">
      
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-[5vw] font-bold leading-tight">
          Discover <br /> And Collect <br /> Rare NFTs
        </h1>
        <p className="text-base sm:text-lg md:text-xl">
          The most secure marketplace for buying and selling unique crypto assets.
        </p>
        <button className="mt-4 border-4 border-[#8A8ADA] px-6 py-3 rounded-full font-semibold hover:bg-[#8A8ADA] hover:text-white transition">
          Explore More
        </button>
      </div>

      <div className="flex-1">
        <img src="/assets/pc.png" className="w-full max-w-md mx-auto" alt="NFT showcase" />
      </div>
    </div>
  );
};

export default Hero;
