import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaShoppingCart, FaDumbbell } from "react-icons/fa";
import career from "../assets/career_p.jpg";
import stitch_fender from "../assets/Stitch_fender.jpg";
import SCP from "../assets/supply_Chain_management.jpg";
import rls from "../assets/rls.jpg";

const projects = [
  {
    title: "SoundWave",
    description:
      "A real-time chat app with synchronized YouTube music playback across users using Django Channels and WebSockets.",
    tech: ["Django", "WebSockets", "YouTube API", "Render"],
    github: "https://github.com/Nihal-das",
    live: "#",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application built with Laravel, covering product catalogues, cart and checkout flows, and order management with a MySQL-backed database.",
    tech: ["Laravel", "PHP", "MySQL", "Blade"],
    github: "https://github.com/Nihal-das/E-Commerce-Laravel",
    live: "#",
    icon: <FaShoppingCart />,
  },
  {
    title: "Gym Management System",
    description:
      "A self-hosted gym management system with a Django REST Framework + PostgreSQL backend and a React + TypeScript frontend, featuring role-based access (Super Admin / Admin), branch-scoped member records with photo and search, and membership tracking.",
    tech: ["Django REST Framework", "PostgreSQL", "React", "TypeScript"],
    github: "https://github.com/Nihal-das/gym_management",
    live: "#",
    icon: <FaDumbbell />,
  },
  {
    title: "MES Career Link",
    description:
      "A portal for alumni to share job vacancies, students to apply, and mentors to connect — built with React and Spring Boot.",
    tech: ["React", "Spring Boot", "MySQL"],
    github: "https://github.com/Nihal-das",
    live: "#",
    image: career,
  },
  {
    title: "Stitch Fender",
    description:
      "A tailoring management system that captures customer measurements from images and automates order notifications.",
    tech: ["Flask", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Nihal-das",
    live: "#",
    image: stitch_fender,
  },
  {
    title: "Supply Chain Management",
    description:
      "A full-stack web application built with Django to streamline and automate the flow of goods and information across a supply chain, enabling suppliers, manufacturers, and distributors to collaborate through a centralized platform.",
    tech: ["Django", "HTML", "CSS", "JavaScript", "WebSockets"],
    github: "https://github.com/Nihal-das",
    live: "#",
    image: SCP,
  },
  {
    title: "RLS Guard Dog",
    description:
      "A role-based school management platform built with Next.js and Supabase, connecting students, teachers, and administrators with secure authentication and real-time updates.",
    tech: ["Next.js", "React", "Tailwind CSS", "Supabase"],
    github: "https://github.com/Nihal-das",
    live: "#",
    image: rls,
  },
];

const ProjectMedia = ({ project }) =>
  project.image ? (
    <img
      src={project.image}
      alt={project.title}
      className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500"
    />
  ) : (
    <div className="h-48 w-full flex items-center justify-center text-5xl text-white bg-gradient-to-br from-[var(--color-violet)] to-[var(--color-cyan)] group-hover:scale-110 transition-transform duration-500">
      {project.icon}
    </div>
  );

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-gray-50 dark:bg-[#0B1120] transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono-label text-xs uppercase text-violet-600 dark:text-cyan-300 mb-3 text-center"
        >
          05 / Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl font-bold mb-14 text-center text-gray-900 dark:text-gray-100"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-[#141C2F] rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl hover:shadow-violet-900/10 transition-all"
            >
              <div className="relative overflow-hidden">
                <ProjectMedia project={project} />
              </div>

              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-xl font-display font-semibold text-gray-800 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 bg-violet-100 text-violet-700 dark:bg-cyan-900/30 dark:text-cyan-300 rounded-full"
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
                    className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-cyan-300 transition"
                  >
                    <FaGithub /> <span className="text-sm">Code</span>
                  </a>
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-cyan-300 transition"
                    >
                      <FaExternalLinkAlt /> <span className="text-sm">Live</span>
                    </a>
                  )}
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
