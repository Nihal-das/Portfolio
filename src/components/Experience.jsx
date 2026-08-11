import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "Junior Laravel Developer",
    company: "Cybooz IT Solutions Pvt. Ltd",
    period: "Dec 2025 – July 2026",
    description: [
      "Developed and maintained backend modules using Laravel and MySQL for financial and reporting systems.",
      "Optimized SQL queries and Eloquent relationships for financial reporting modules handling large datasets.",
      "Implemented role-based authentication and permission management systems.",
      "Resolved production-level issues related to financial calculations, attendance workflows, and database synchronization.",
      "Developed and customized reporting modules with PDF export and transaction-based workflows.",
    ],
  },
  {
    role: "Artificial Intelligence Intern",
    company: "Alpha Innovation Pvt. Ltd.",
    period: "July 2025 – Sept 2025",
    description: [
      "Worked on AI-based application workflows and practical implementation tasks during industrial training.",
      "Assisted in developing and testing AI-related project components.",
      "Gained exposure to real-world AI development practices and collaborative project environments.",
    ],
  },
  {
    role: "Front-End Development Intern",
    company: "SquareBraket Innovation LLP",
    period: "Feb 2025 – May 2025",
    description: [
      "Developed responsive UI components using React, HTML5, CSS3, and JavaScript.",
      "Integrated frontend interfaces with RESTful backend APIs.",
      "Improved cross-browser compatibility and responsive performance.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-gray-50 dark:bg-[#0B1120] transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono-label text-xs uppercase text-violet-600 dark:text-cyan-300 mb-3 text-center"
        >
          03 / Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl font-bold mb-14 text-center text-gray-900 dark:text-gray-100"
        >
          Work <span className="gradient-text">Experience</span>
        </motion.h2>

        <div className="relative border-l-2 border-violet-200 dark:border-[#1c2740] pl-8 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              <span className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-gradient-to-br from-[var(--color-violet)] to-[var(--color-cyan)] ring-4 ring-gray-50 dark:ring-[#0B1120]" />

              <motion.div
                whileHover={{ y: -3 }}
                className="bg-white dark:bg-[#141C2F] p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-2 text-violet-500 dark:text-cyan-300 mb-1">
                  <FaBriefcase />
                  <span className="text-xs font-mono-label uppercase">{exp.period}</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-gray-800 dark:text-gray-100">
                  {exp.role}
                </h3>
                <p className="text-violet-600 dark:text-cyan-300 font-medium mb-3">
                  {exp.company}
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
