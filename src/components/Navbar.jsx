import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default dark mode ON

  // Sync with system or saved preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  // Smooth fade transition handler
  const enableTransition = () => {
    document.documentElement.classList.add("theme-transition");
    setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 600);
  };

  const toggleTheme = () => {
    enableTransition(); // add fade effect
    const newTheme = isDarkMode ? "light" : "dark";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0F172A]/80 dark:bg-white/10 backdrop-blur-md shadow-sm transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center relative items-center">
        {/* Logo */}
        <h1 className="absolute left-6 text-2xl font-bold tracking-wide text-purple-400 dark:text-indigo-600 cursor-pointer">
          Nihal<span className="text-gray-900 dark:text-gray-200">.Das</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-800 dark:text-gray-200 font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative group transition"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 dark:bg-indigo-600 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(139,92,246,0.8)] dark:shadow-[0_0_8px_rgba(79,70,229,0.8)]"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle Button */}
        <button
          hidden
          onClick={toggleTheme}
          className="absolute right-14 md:right-20 text-xl text-gray-200 dark:text-gray-800 hover:text-purple-400 dark:hover:text-indigo-600 transition-transform duration-300 hover:scale-110"
          aria-label="Toggle Theme"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden absolute right-6 text-2xl text-gray-800 dark:text-gray-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#0F172A] dark:bg-white py-6 space-y-6 shadow-lg transition-all duration-300">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-gray-200 dark:text-gray-800 hover:text-purple-400 dark:hover:text-indigo-600 transition"
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
