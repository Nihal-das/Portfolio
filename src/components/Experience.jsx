import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "Front-End Development Intern",
    company: "SquareBraket Innovation LLP",
    period: "Feb 2025 – May 2025",
    description: [
      "Implemented responsive UI components using React, HTML, and CSS.",
      "Participated in code reviews, improved accessibility, and optimized layouts.",
      "Assisted in testing UI flows and fixing cross-browser issues.",
    ],
  },
  {
    role: "Internship in Artificial Intelligence",
    company: "Alpha Innovation Pvt. Ltd.",
    period: "July 2025 – Sept 2025",
    description: [
      "Completed hands-on internship in Artificial Intelligence at Alpha Innovation Pvt. Ltd.",
      "Contributed to AI-related projects with dedication, professionalism, and a proactive attitude.",
      "Received Letter of Recommendation for excellent performance and valuable project contributions.",
      "Recognized for hard work and commitment during industrial training in AI domain.",
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
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100"
        >
          Work{" "}
          <span className="text-indigo-600 dark:text-purple-400">
            Experience
          </span>
        </motion.h2>

        <div className="relative border-l border-gray-300 dark:border-gray-700 pl-8 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              {/* Timeline Icon */}
              <div className="absolute -left-4 top-2 bg-indigo-500 dark:bg-purple-500 text-white p-2 rounded-full shadow-lg">
                <FaBriefcase className="text-lg" />
              </div>

              {/* Content */}
              <div className="bg-white dark:bg-[#141C2F] p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {exp.role}
                </h3>
                <p className="text-indigo-600 dark:text-purple-400 font-medium">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {exp.period}
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
