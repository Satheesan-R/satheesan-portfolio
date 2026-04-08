import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, X, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  image: string;
  imageFit?: "cover" | "contain";
  imagePositionClass?: string;
}

const projects: Project[] = [
  {
    title: "RiseTogether Platform",
    description:
      "A collaborative platform designed to connect individuals and teams for shared goals and community growth.",
    longDescription:
      "RiseTogether is a full-stack web application that brings people together around shared goals. It features user authentication, team creation, goal tracking, and a community feed. Built with a focus on clean architecture and responsive design.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Satheesan-R/RiseTogether-Platform",
    image:
      "/3.webp",
  },
  {
    title: "Smart Vehicle Service Booking",
    description:
      "An intelligent booking system for vehicle service appointments with real-time slot management.",
    longDescription:
      "This system streamlines the vehicle servicing process by allowing users to book service appointments online. Features include real-time availability, service history tracking, automated reminders, and an admin dashboard for managing bookings and staff.",
    tech: ["PHP", "MySQL", "JavaScript", "CSS"],
    github: "https://github.com/Satheesan-R/smart-vehicle-service-booking-system",
    image:
      "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Caretaker Management System",
    description:
      "A comprehensive management system for organizing and tracking caretaker assignments and schedules.",
    longDescription:
      "A complete management solution for organizing caretaker schedules, assignments, and performance tracking. The system includes role-based access control, shift scheduling, task assignment, and reporting capabilities for administrators.",
    tech: ["Python", "MySQL", "HTML", "CSS"],
    github: "https://github.com/Satheesan-R/caretaker-management-system",
    image:
      "/download.jpg",
    imageFit: "cover",
    imagePositionClass: "object-[center_30%]",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-center">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12 mx-auto" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                onClick={() => setSelected(project)}
                className="glass-card rounded-2xl overflow-hidden cursor-pointer hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                      project.imageFit === "contain"
                        ? "object-contain bg-secondary/40"
                        : `object-cover ${project.imagePositionClass ?? "object-[center_62%]"}`
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <ExternalLink size={18} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center mt-12"
          >
            <Link
              to="/all-projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-primary bg-primary/10 text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
            >
              See All My Projects <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card rounded-2xl p-8 max-w-lg w-full relative"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground"
              >
                <X size={18} />
              </button>

              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <ExternalLink size={22} className="text-primary" />
              </div>

              <div className="rounded-xl overflow-hidden mb-5 border border-border">
                <img
                  src={selected.image}
                  alt={`${selected.title} preview`}
                  className={`w-full h-52 ${
                    selected.imageFit === "contain"
                      ? "object-contain bg-secondary/40"
                      : `object-cover ${selected.imagePositionClass ?? "object-[center_62%]"}`
                  }`}
                />
              </div>

              <h3 className="font-heading text-2xl font-bold mb-3">
                {selected.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {selected.longDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selected.tech.map((t) => (
                  <span
                    key={t}
                    className="text-sm px-3 py-1.5 rounded-lg bg-primary/10 text-primary font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={selected.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                <Github size={16} /> View on GitHub
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
