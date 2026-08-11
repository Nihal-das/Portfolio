import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaMoon, FaSun, FaFileDownload } from "react-icons/fa";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark) || !savedTheme) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }

    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const enableTransition = () => {
    document.documentElement.classList.add("theme-transition");
    setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 600);
  };

  const toggleTheme = () => {
    enableTransition();
    const newTheme = isDarkMode ? "light" : "dark";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 dark:bg-[#060a14]/80 backdrop-blur-md shadow-md shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="font-display text-xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Nihal<span className="gradient-text">.dev</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-sm text-gray-700 dark:text-gray-300">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="relative group transition-colors hover:text-violet-600 dark:hover:text-cyan-300"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1.5 w-0 h-0.5 bg-gradient-to-r from-[var(--color-violet)] to-[var(--color-cyan)] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="/Nihal_PY_Resume.pdf"
            download
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-violet-500 hover:text-violet-600 dark:hover:border-cyan-300 dark:hover:text-cyan-300 transition"
          >
            <FaFileDownload /> Resume
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-lg text-gray-700 dark:text-gray-200 hover:text-violet-600 dark:hover:text-cyan-300 transition-transform hover:scale-110"
          >
            {isDarkMode ? <FaMoon /> : <FaSun />}
          </button>
        </div>

        {/* Mobile buttons */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-lg text-gray-700 dark:text-gray-200"
          >
            {isDarkMode ? <FaMoon /> : <FaSun />}
          </button>
          <button
            className="text-2xl text-gray-800 dark:text-gray-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden flex flex-col items-center bg-white dark:bg-[#060a14] py-6 space-y-5 shadow-lg"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 dark:text-gray-200 hover:text-violet-600 dark:hover:text-cyan-300 transition"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/Nihal_PY_Resume.pdf"
            download
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700"
          >
            <FaFileDownload /> Resume
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
