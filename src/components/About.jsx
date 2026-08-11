import { motion } from "framer-motion";
import { FaLaptopCode, FaProjectDiagram, FaCertificate, FaGraduationCap } from "react-icons/fa";

const stats = [
  { icon: <FaLaptopCode />, label: "Internships / Roles", value: "3" },
  { icon: <FaProjectDiagram />, label: "Projects Built", value: "5+" },
  { icon: <FaCertificate />, label: "Certifications", value: "4" },
  { icon: <FaGraduationCap />, label: "MCA, CGPA", value: "8.17" },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gray-50 dark:bg-[#0B1120] text-gray-800 dark:text-gray-100 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono-label text-xs uppercase text-violet-600 dark:text-cyan-300 mb-3"
        >
          01 / About
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl font-bold mb-8"
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600 dark:text-gray-300"
        >
          I'm <span className="font-semibold text-gray-900 dark:text-white">Nihal P Y</span>, a
          full stack developer with hands-on experience across{" "}
          <span className="text-violet-600 dark:text-cyan-300">Laravel, Django, Flask, React and MySQL</span>.
          I specialize in backend development, REST APIs and real-time systems —
          optimizing SQL queries, implementing role-based authentication, and
          debugging production-level issues on database-driven applications.
          On the frontend, I enjoy turning that backend work into clean,
          responsive interfaces people actually enjoy using.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-white dark:bg-[#141C2F] p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-2xl text-violet-600 dark:text-cyan-300 mb-2 flex justify-center">
                {s.icon}
              </div>
              <p className="font-display text-2xl font-bold text-gray-900 dark:text-white">
                {s.value}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
