import { useState } from "react";
import {
  FaHome,
  FaChartBar,
  FaFileAlt,
  FaCalculator,
  FaEnvelope,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { icon: <FaHome size={20} />, label: "Home", path: "/" },
    { icon: <FaChartBar size={20} />, label: "Analytics", path: "/analytics" },
    { icon: <FaFileAlt size={20} />, label: "Reports", path: "/reports" },
    { icon: <FaCalculator size={20} />, label: "Calculate", path: "/calculate" },
    { icon: <FaEnvelope size={20} />, label: "Contact", path: "/contact" },
  ];

  return (
    <div className="relative h-screen bg-gray-200">
      <div
        className={`bg-blue-600 h-full transition-[width] duration-500 ease-in-out flex flex-col 
        ${open ? "w-56" : "w-16"} relative`}
      >
        {/* Logo + Text */}
        <div className="flex items-center gap-3 mt-6 px-4 relative">
          <img src="logo.png" alt="Logo" className="w-8 h-8 object-contain" />
          <h3
            className={`text-white font-semibold text-lg transition-all duration-500 ease-in-out
            ${open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5 w-0 overflow-hidden"}`}
          >
            DIAZ
          </h3>
        </div>

        {/* Toggle button */}
        <button
          onClick={() => setOpen(!open)}
          className="absolute -right-3 top-16 bg-gray-100 text-blue-600 rounded-full p-2 shadow-md transition-transform hover:scale-110"
        >
          {open ? <FaArrowLeft size={10} /> : <FaArrowRight size={10} />}
        </button>

        {/* Menu items */}
        <ul className="flex flex-col gap-4 mt-10 px-2">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.path}
                className="flex items-center text-white hover:bg-blue-700 p-2 rounded-md cursor-pointer transition-colors duration-300"
              >
                {/* Icon */}
                <div className="min-w-[24px] flex justify-center">{item.icon}</div>

                {/* Animated Text */}
                <span
                  className={`ml-2 whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out
                  ${open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5 w-0"}`}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
