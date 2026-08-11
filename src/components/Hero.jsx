import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

const responseLines = [
  { key: '"developer"', value: '"Nihal P Y"' },
  { key: '"role"', value: '"Full Stack Developer"' },
  { key: '"stack"', value: '["Laravel", "Django", "Flask", "React"]' },
  { key: '"status"', value: '"open_to_work"' },
];

const TerminalCard = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= responseLines.length) return;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 450 + visibleLines * 180);
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: -2 }}
      transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      whileHover={{ rotate: 0, scale: 1.02 }}
      className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#0B1120]/90 shadow-2xl shadow-violet-900/30 backdrop-blur-sm overflow-hidden font-mono-label"
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
        <span className="w-3 h-3 rounded-full bg-red-400/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
        <span className="w-3 h-3 rounded-full bg-green-400/80" />
        <span className="ml-3 text-xs text-gray-400">GET /api/developer/nihal</span>
      </div>
      <div className="p-6 text-sm leading-relaxed text-left">
        <p className="text-cyan-300 mb-2">200 OK</p>
        <p className="text-gray-500">{"{"}</p>
        {responseLines.map((line, i) => (
          <p key={line.key} className="pl-4 text-gray-200">
            <span className="text-violet-300">{line.key}</span>
            <span className="text-gray-500">: </span>
            <span className={i < visibleLines ? "text-cyan-200 opacity-100" : "opacity-0"}>
              {line.value}
            </span>
            {i < responseLines.length - 1 && <span className="text-gray-500">,</span>}
          </p>
        ))}
        <p className="text-gray-500">{"}"}</p>
        <span className="inline-block w-2 h-4 bg-cyan-300 cursor-blink mt-1" />
      </div>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center min-h-screen px-6 pt-28 pb-16 overflow-hidden
                 bg-gradient-to-b from-indigo-50 via-white to-white
                 dark:from-[#060a14] dark:via-[#060a14] dark:to-[#0B1120]
                 transition-all duration-700 ease-in-out"
    >
      {/* Ambient blobs */}
      <div className="bg-glow w-72 h-72 bg-violet-500 top-10 -left-10 animate-float-slow" />
      <div className="bg-glow w-80 h-80 bg-cyan-400 bottom-0 right-0 animate-float-slow-rev" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center w-full">
        {/* Left: intro */}
        <div className="text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono-label text-xs uppercase text-violet-600 dark:text-cyan-300 mb-4"
          >
            &lt; Full Stack Developer /&gt;
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
          >
            Hi, I'm{" "}
            <span className="gradient-text">Nihal P Y</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-5 max-w-xl mx-auto md:mx-0 text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            I design and build scalable web applications — from REST APIs and
            real-time systems in Laravel, Django &amp; Flask, to smooth,
            responsive interfaces in React.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap justify-center md:justify-start gap-4 mt-8"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-[var(--color-violet)] to-[var(--color-cyan)] hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-violet-500 dark:hover:border-cyan-300 transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Me
            </a>
            <a
              href="/Nihal_PY_Resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 rounded-full text-gray-700 dark:text-gray-200 hover:text-violet-600 dark:hover:text-cyan-300 transition-all duration-300"
            >
              <FaFileDownload /> Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-6 mt-8 justify-center md:justify-start text-2xl"
          >
            <a
              href="https://github.com/Nihal-das"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-violet-600 dark:text-gray-300 dark:hover:text-cyan-300 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nihal-py/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-violet-600 dark:text-gray-300 dark:hover:text-cyan-300 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </div>

        {/* Right: signature terminal card */}
        <div className="flex justify-center md:justify-end">
          <TerminalCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
