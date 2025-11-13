import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import career from "../assets/career_p.jpg";
import stitch_fender from "../assets/Stitch_fender.jpg";
import SCP from "../assets/supply_Chain_management.jpg";
import rls from "../assets/rls.jpg"

const projects = [
  {
    title: "SoundWave",
    description:
      "A real-time chat app with synchronized YouTube music playback across users using Django Channels and WebSockets.",
    tech: ["Django", "WebSockets", "YouTube API", "Render"],
    github: "https://github.com/Nihal-das",
    live: "#", // you can replace with live demo link
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "MES Career Link",
    description:
      "A portal for alumni to share job vacancies, students to apply, and mentors to connect — built with React and Spring Boot.",
    tech: ["React", "Spring Boot", "MySQL"],
    github: "https://github.com/Nihal-das",
    live: "#",
    image:
      career,
  },
  {
    title: "Stitch Fender",
    description:
      "A tailoring management system that captures customer measurements from images and automates order notifications.",
    tech: ["Flask", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Nihal-das",
    live: "#",
    image:
      stitch_fender,
  },
  {
    title: "Supply Chain Management",
    description:
      "A full-stack web application built with Django to streamline and automate the flow of goods and information across a supply chain. The system enables suppliers, manufacturers, and distributors to collaborate efficiently through a centralized digital platform.",
    tech: ["Django", "HTML", "CSS", "JavaScript","Websockets","Youtube API"],
    github: "https://github.com/Nihal-das",
    live: "#",
    image:
      SCP,
  },
  {
    title: "RLS Guard Dog (School Management Platform)",
    description:
      "A modern, role-based school management system built with Next.js and Supabase, designed to connect students, teachers, and administrators in one streamlined digital platform. It provides secure authentication, data management, and real-time updates — making school communication smarter and faster.",
    tech: ["Next.js", "React", "Tailwind CSS", "Supabase (PostgreSQL, Auth, Realtime)"],
    github: "https://github.com/Nihal-das",
    live: "#",
    image:
      rls,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-gray-50 dark:bg-[#0B1120] transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100"
        >
          Featured <span className="text-indigo-600 dark:text-purple-400">Projects</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-[#141C2F] rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-indigo-100 text-indigo-700 dark:bg-purple-900/40 dark:text-purple-300 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-purple-400 transition"
                  >
                    <FaGithub /> <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-purple-400 transition"
                  >
                    <FaExternalLinkAlt /> <span className="text-sm">Live</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
