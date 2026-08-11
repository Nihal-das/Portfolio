import { motion } from "framer-motion";
import { FaReact, FaPython, FaJava, FaDatabase, FaGithub, FaLaravel } from "react-icons/fa";
import { SiDjango, SiFlask, SiSpringboot, SiMysql, SiJavascript, SiPhp } from "react-icons/si";

const skillGroups = [
  {
    title: "Backend & Frameworks",
    items: [
      { icon: <FaLaravel className="text-red-500" />, name: "Laravel" },
      { icon: <SiDjango className="text-green-500" />, name: "Django" },
      { icon: <SiFlask className="text-gray-400" />, name: "Flask" },
      { icon: <SiSpringboot className="text-green-600" />, name: "Spring Boot" },
      { icon: <SiPhp className="text-indigo-400" />, name: "PHP" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { icon: <FaReact className="text-sky-400" />, name: "React" },
      { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript (ES6+)" },
      { icon: <FaDatabase className="text-violet-400" />, name: "HTML5 / CSS3" },
    ],
  },
  {
    title: "Languages",
    items: [
      { icon: <FaPython className="text-blue-500" />, name: "Python" },
      { icon: <FaJava className="text-red-500" />, name: "Java" },
    ],
  },
  {
    title: "Databases & Tools",
    items: [
      { icon: <SiMysql className="text-blue-400" />, name: "MySQL" },
      { icon: <FaDatabase className="text-indigo-400" />, name: "MariaDB" },
      { icon: <FaGithub className="text-gray-400" />, name: "Git / GitHub" },
    ],
  },
];

const coreConcepts = [
  "MVC Architecture",
  "REST APIs",
  "WebSockets & Django Channels",
  "Authentication & RBAC",
  "Query Optimization",
  "Responsive Design",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-white dark:bg-[#0F172A] text-center transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono-label text-xs uppercase text-violet-600 dark:text-cyan-300 mb-3"
        >
          02 / Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl font-bold mb-14 text-gray-900 dark:text-gray-100"
        >
          Technical <span className="gradient-text">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1, duration: 0.5 }}
              className="rounded-2xl bg-gray-50 dark:bg-[#141C2F] p-6"
            >
              <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-5">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {group.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#0B1120] shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12"
        >
          <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-5">
            Core Concepts
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {coreConcepts.map((c) => (
              <span
                key={c}
                className="text-xs font-mono-label px-4 py-2 rounded-full border border-violet-200 dark:border-cyan-900 text-violet-700 dark:text-cyan-300"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
