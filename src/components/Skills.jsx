import { motion } from "framer-motion";
import { FaReact, FaPython, FaJava, FaDatabase, FaGithub } from "react-icons/fa";
import { SiDjango, SiFlask, SiSpringboot, SiMysql, SiJavascript } from "react-icons/si";

const skills = [
  { icon: <FaReact className="text-sky-400" />, name: "React" },
  { icon: <SiDjango className="text-green-500" />, name: "Django" },
  { icon: <SiFlask className="text-gray-400" />, name: "Flask" },
  { icon: <SiSpringboot className="text-green-600" />, name: "Spring Boot" },
  { icon: <FaPython className="text-blue-500" />, name: "Python" },
  { icon: <FaJava className="text-red-500" />, name: "Java" },
  { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
  { icon: <SiMysql className="text-blue-400" />, name: "MySQL" },
  { icon: <FaDatabase className="text-indigo-400" />, name: "MariaDB" },
  { icon: <FaGithub className="text-gray-400" />, name: "Git / GitHub" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-white dark:bg-[#0F172A] text-center transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-gray-100"
        >
          Technical <span className="text-indigo-600 dark:text-purple-400">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="flex flex-col items-center gap-3 hover:scale-110 transition-transform"
            >
              <div className="text-5xl">{skill.icon}</div>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
