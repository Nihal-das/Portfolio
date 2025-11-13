import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gray-50 dark:bg-[#0B1120] text-gray-800 dark:text-gray-100 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          About <span className="text-indigo-600 dark:text-purple-400">Me</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600 dark:text-gray-300"
        >
          I’m <span className="font-semibold">Nihal P Y</span>, an MCA graduate
          and frontend-focused developer passionate about crafting smooth,
          responsive, and user-friendly web applications. I specialize in
          creating clean interfaces with React and have strong experience with
          backend frameworks like Django, Flask, and Spring Boot. I love solving
          problems, exploring new tools, and turning ideas into real digital
          experiences.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
