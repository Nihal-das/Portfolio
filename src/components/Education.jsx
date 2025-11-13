import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "MES AIMAT, Marampally (Mahatma Gandhi University)",
    year: "Jun 2025",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "The Cochin College (Mahatma Gandhi University)",
    year: "Apr 2023",
  },
];

const certifications = [
  {
    name: "Python Programming (NPTEL)",
    date: "May 2024",
  },
  {
    name: "React (Edure)",
    date: "Sep 2024",
  },
  {
    name: "Front-End Development Internship — SquareBraket Innovation LLP",
    date: "Feb 2025 – May 2025",
  },
  
  {
    name: "Internship in Artificial Intelligence — Alpha Innovation Pvt. Ltd.",
    date: "July 2025 – Sept 2025",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 bg-white dark:bg-[#0F172A] transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Education */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100"
        >
          Education <span className="text-indigo-600 dark:text-purple-400">&</span> Certifications
        </motion.h2>

        <div className="relative border-l border-gray-300 dark:border-gray-700 pl-8 mb-16 space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -left-4 top-2 bg-indigo-500 dark:bg-purple-500 text-white p-2 rounded-full shadow-lg">
                <FaGraduationCap className="text-lg" />
              </div>

              <div className="bg-gray-50 dark:bg-[#141C2F] p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {edu.degree}
                </h3>
                <p className="text-indigo-600 dark:text-purple-400 font-medium">
                  {edu.institution}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100"
        >
          Certifications
        </motion.h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-gray-50 dark:bg-[#141C2F] p-6 rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transition"
            >
              <FaCertificate className="text-3xl text-indigo-500 dark:text-purple-400 mb-3" />
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-100 text-center">
                {cert.name}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
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
