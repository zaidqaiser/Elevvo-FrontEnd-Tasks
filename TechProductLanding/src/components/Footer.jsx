import React from "react";

const Footer = () => {
  return (
    <div className="w-[90%] max-w-7xl mx-auto py-12 text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-bold">KRYPTO</h2>
      </div>
      <div className="text-center md:text-left">
        <h3 className="text-base font-semibold mb-3">Krypto</h3>
        <ul className="space-y-2 text-gray-300">
          <li>Home</li>
          <li>About</li>
          <li>Buy NFTs</li>
          <li>Sell NFTs</li>
        </ul>
      </div>
      <div className="text-center md:text-left">
        <h3 className="text-base font-semibold mb-3">Market</h3>
        <ul className="space-y-2 text-gray-300">
          <li>Browse NFTs</li>
          <li>Buy NFTs</li>
          <li>Sell NFTs</li>
        </ul>
      </div>
      <div className="text-center md:text-left">
        <h3 className="text-base font-semibold mb-3">Contact</h3>
        <ul className="space-y-2 text-gray-300">
          <li>Email</li>
          <li>LinkedIn</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div className="md:col-span-4 flex flex-col lg:flex-row items-center justify-between gap-6 mt-8">
        <h2 className="text-lg font-semibold whitespace-nowrap text-center lg:text-left">
          Join Our Newsletter
        </h2>
        <div className="flex items-center bg-[#2E2A5A] rounded-full overflow-hidden w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 px-4 py-3 bg-transparent text-white placeholder-gray-400 outline-none text-sm sm:text-base"
          />
          <button className="px-6 py-3 bg-[#8A8ADA] hover:bg-[#6d6db5] font-semibold whitespace-nowrap text-sm sm:text-base">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
