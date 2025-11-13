// import { useState, useEffect } from "react";
// import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isLightMode, setIsLightMode] = useState(!document.documentElement.classList.contains("dark"));

//   const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

//   useEffect(() => {
//     if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
//       document.documentElement.classList.add('dark');
//       setIsLightMode(false);
//     } else {
//       document.documentElement.classList.remove('dark');
//       setIsLightMode(true);
//     }
//   }, []);

//   const toggleTheme = () => {
//     document.documentElement.classList.toggle("dark");
//     setIsLightMode(prev => !prev);
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-[#0F172A]/80 dark:bg-white/10 backdrop-blur-md shadow-sm transition-colors duration-500">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center relative items-center">
//         {/* Logo */}
//         <h1 className="absolute left-6 text-2xl font-bold tracking-wide text-purple-400 cursor-pointer">
//           Nihal<span className="text-gray-200 dark:text-gray-100">.Das</span>
//         </h1>

//         {/* Desktop Menu */}
//        <ul className="hidden md:flex gap-8 text-gray-300 dark:text-gray-200 font-medium">
//           {navItems.map((item) => (
//             <li key={item}>
//               <a
//                 href={`#${item.toLowerCase()}`}
//                 className="hover:text-purple-400 dark:hover:text-purple-600 transition"
//               >
//                 {item}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Theme Toggle Button */}
//         <button
//           onClick={toggleTheme}
//           className="absolute right-14 md:right-20 text-xl text-gray-200 dark:text-gray-800 hover:text-purple-400 dark:hover:text-purple-600 transition"
//         >
//           {isLightMode ? <FaMoon /> : <FaSun />}
//         </button>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden absolute right-6 text-2xl text-gray-200 dark:text-gray-800"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden flex flex-col items-center bg-[#0F172A] dark:bg-white py-6 space-y-6 shadow-lg transition-all duration-300">
//           {navItems.map((item) => (
//             <a
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               onClick={() => setMenuOpen(false)}
//               className="text-gray-200 dark:text-gray-800 hover:text-purple-400 dark:hover:text-purple-600 transition"
//             >
//               {item}
//             </a>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(true);

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  // Sync theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsLightMode(false);
    } else {
      document.documentElement.classList.remove("dark");
      setIsLightMode(true);
    }
  }, []);

  // Toggle theme and persist preference
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    setIsLightMode(!isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0F172A]/80 dark:bg-white/10 backdrop-blur-md shadow-sm transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center relative items-center">
        {/* Logo */}
        <h1 className="absolute left-6 text-2xl font-bold tracking-wide text-purple-400 cursor-pointer">
          Nihal<span className="text-gray-200 dark:text-gray-100">.Das</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 dark:text-gray-200 font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-purple-400 dark:hover:text-purple-600 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="absolute right-14 md:right-20 text-xl text-gray-200 dark:text-gray-800 hover:text-purple-400 dark:hover:text-purple-600 transition"
        >
          {isLightMode ? <FaMoon /> : <FaSun />}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden absolute right-6 text-2xl text-gray-200 dark:text-gray-800"
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
              className="text-gray-200 dark:text-gray-800 hover:text-purple-400 dark:hover:text-purple-600 transition"
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

