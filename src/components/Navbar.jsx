import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  // Default dark mode ON
  const [isLightMode, setIsLightMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;

    if (isLightMode) {
      html.classList.remove("dark"); // Switch to light
    } else {
      html.classList.add("dark"); // Default dark
    }
  }, [isLightMode]);

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-[#0F172A]/80 backdrop-blur-md shadow-sm transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-indigo-600 dark:text-purple-400 cursor-pointer">
          Nihal<span className="text-gray-800 dark:text-gray-200">.Das</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300 font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-indigo-500 dark:hover:text-purple-400 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            hidden
            onClick={() => setIsLightMode(!isLightMode)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-110 transition-transform duration-300"
          >
            {isLightMode ? (
              <FaMoon className="text-indigo-600 text-xl" /> // Switch to dark icon
            ) : (
              <FaSun className="text-yellow-400 text-xl" /> // Default sun icon
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-gray-800 dark:text-gray-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white dark:bg-[#0F172A] py-6 space-y-6 shadow-lg transition-all duration-300">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-gray-800 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-purple-400 transition"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
