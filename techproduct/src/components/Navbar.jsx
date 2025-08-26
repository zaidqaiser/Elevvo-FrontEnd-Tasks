const Navbar = () => {
  return (
    <div className="w-[90%] max-w-7xl h-[8vh] text-white flex justify-between items-center mx-auto px-4 sticky">
      <h2 className="text-xl font-bold">KRYPTO</h2>
      <ul className="hidden md:flex gap-10 text-lg">
        <li className="cursor-pointer hover:text-[#8A8ADA]">About</li>
        <li className="cursor-pointer hover:text-[#8A8ADA]">Pricing</li>
        <li className="cursor-pointer hover:text-[#8A8ADA]">Contact</li>
        <li className="cursor-pointer hover:text-[#8A8ADA]">Buy NFTs</li>
      </ul>

      <div className="md:hidden">
        <button className="text-2xl">☰</button>
      </div>
    </div>
  )
}

export default Navbar
