import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "MES AIMAT, Marampally (Mahatma Gandhi University)",
    year: "2025",
    detail: "CGPA: 8.17",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "The Cochin College (Mahatma Gandhi University)",
    year: "2023",
    detail: "CGPA: 7.54",
  },
];

const certifications = [
  { name: "Python Programming (NPTEL)", date: "May 2024" },
  { name: "React (Edure)", date: "Sep 2024" },
  { name: "Front-End Development Internship — SquareBraket Innovation LLP", date: "Feb 2025 – May 2025" },
  { name: "Internship in Artificial Intelligence — Alpha Innovation Pvt. Ltd.", date: "July 2025 – Sept 2025" },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 bg-white dark:bg-[#0F172A] transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono-label text-xs uppercase text-violet-600 dark:text-cyan-300 mb-3 text-center"
        >
          04 / Education
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100"
        >
          Education <span className="gradient-text">&</span> Certifications
        </motion.h2>

        <div className="relative border-l-2 border-violet-200 dark:border-[#1c2740] pl-8 mb-16 space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              <span className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-gradient-to-br from-[var(--color-violet)] to-[var(--color-cyan)] ring-4 ring-white dark:ring-[#0F172A] flex items-center justify-center" />
              <div className="absolute -left-[45px] top-0 text-white bg-gradient-to-br from-[var(--color-violet)] to-[var(--color-cyan)] p-2 rounded-full shadow-lg">
                <FaGraduationCap className="text-sm" />
              </div>

              <motion.div
                whileHover={{ y: -3 }}
                className="bg-gray-50 dark:bg-[#141C2F] p-6 rounded-xl shadow-md hover:shadow-xl transition-all ml-2"
              >
                <h3 className="text-lg font-display font-semibold text-gray-800 dark:text-gray-100">
                  {edu.degree}
                </h3>
                <p className="text-violet-600 dark:text-cyan-300 font-medium">
                  {edu.institution}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {edu.year} · {edu.detail}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-display font-bold mb-8 text-center text-gray-900 dark:text-gray-100"
        >
          Certifications
        </motion.h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-gray-50 dark:bg-[#141C2F] p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-xl transition-all"
            >
              <FaCertificate className="text-3xl text-violet-500 dark:text-cyan-300 mb-3" />
              <h4 className="text-sm font-medium text-gray-800 dark:text-gray-100">
                {cert.name}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 font-mono-label">
                {cert.date}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
