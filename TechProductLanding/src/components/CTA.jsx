import React from 'react'

const CTA = () => {
  return (
    <div className="w-[90%] max-w-7xl text-white flex flex-col md:flex-row items-center md:items-center justify-between mx-auto px-4 py-16 gap-10">
      
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h2 className="text-white text-sm font-semibold">GET OUR APP</h2>
        <h1 className="text-3xl sm:text-4xl md:text-[4vw] font-bold leading-tight">
          Browse NFTs From <br /> Your Smartphone
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0">
          Our Krypto app is the easiest way to keep track of your assets when you're on the go.
        </p>
        <button className="mt-4 bg-[#8A8ADA] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#726edb] transition duration-300">
          DOWNLOAD ON IOS
        </button>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center">
        <img src="/assets/mobile.png" className="w-full max-w-sm sm:max-w-md lg:max-w-lg" alt="NFT Mobile App" />
      </div>
    </div>
  )
}

export default CTA;
