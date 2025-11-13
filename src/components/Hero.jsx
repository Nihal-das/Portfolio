import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center text-center min-h-screen px-6 bg-linear-to-b from-indigo-500/10 via-transparent to-transparent dark:from-purple-700/5"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white"
      >
        Hi, I’m <span className="text-indigo-500 dark:text-purple-400">Nihal P Y</span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="mt-4 text-lg md:text-2xl text-gray-600 dark:text-gray-300"
      >
        Frontend-Focused Developer | MCA Graduate
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-6 max-w-xl text-gray-500 dark:text-gray-400 leading-relaxed"
      >
        I build responsive, interactive web apps using React, Django & Flask — turning ideas into smooth digital experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="flex gap-6 mt-8"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition dark:bg-purple-500 dark:hover:bg-purple-600"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-gray-400 text-gray-700 rounded-full hover:bg-gray-100 transition dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
        >
          Contact Me
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="flex gap-6 mt-10 text-2xl"
      >
        <a
          href="https://github.com/Nihal-das"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-purple-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/nihal-py/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-purple-400 transition"
        >
          <FaLinkedin />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
