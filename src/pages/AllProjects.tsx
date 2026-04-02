import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  github: string;
  image: string;
  type?: "Public" | "Private";
}

const allProjects: ProjectItem[] = [
  {
    title: "RiseTogether Platform",
    description:
      "A collaborative platform designed to connect individuals and teams for shared goals and community growth.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Satheesan-R/RiseTogether-Platform",
    image: "/3.webp",
    type: "Public",
  },
  {
    title: "Smart Vehicle Service Booking",
    description:
      "An intelligent booking system for vehicle service appointments with real-time slot management.",
    tech: ["PHP", "MySQL", "JavaScript", "CSS"],
    github: "https://github.com/Satheesan-R/smart-vehicle-service-booking-system",
    image: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1200&q=80",
    type: "Public",
  },
  {
    title: "Caretaker Management System",
    description:
      "A comprehensive management system for organizing and tracking caretaker assignments and schedules.",
    tech: ["Python", "MySQL", "HTML", "CSS"],
    github: "https://github.com/Satheesan-R/caretaker-management-system",
    image: "/download.jpg",
    type: "Public",
  },
  {
    title: "dsp-convolution-dft",
    description:
      "Implementation of convolution and direct DFT algorithms in Python for fundamental Digital Signal Processing analysis.",
    tech: ["Python", "Jupyter Notebook", "DSP"],
    github: "https://github.com/Satheesan-R/dsp-convolution-dft",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    type: "Public",
  },
  {
    title: "mini-c-interpreter",
    description:
      "A mini interpreter built in C demonstrating core compiler design concepts including lexical analysis, parsing, and semantic checking.",
    tech: ["C", "Compiler Design", "Parsing"],
    github: "https://github.com/Satheesan-R/mini-c-interpreter",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    type: "Public",
  },
  {
    title: "swift-track",
    description:
      "Event-driven microservices architecture for logistics management built using NestJS, Apache Kafka, and PostgreSQL with containerized infrastructure.",
    tech: ["NestJS", "Kafka", "PostgreSQL", "Docker", "React", "Vite"],
    github: "https://github.com/Satheesan-R/swift-track",
    image: "public/images.png",
    type: "Public",
  },
  {
    title: "fitzone-promo-website",
    description:
      "A promotional website for FitZone gym with modern design and responsive layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Satheesan-R/fitzone-promo-website",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    type: "Public",
  },
  {
    title: "30-days-react-challenge",
    description:
      "30 days React frontend challenge showcasing various React patterns and best practices.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/Satheesan-R/30-days-react-challenge",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    type: "Public",
  },
];

const AllProjects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <ArrowLeft size={18} /> Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              All <span className="text-gradient">Projects</span>
            </h1>
            <div className="w-20 h-1 bg-primary rounded-full mb-12" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {allProjects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 group flex flex-col"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-heading text-lg font-semibold flex-1 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {project.type && (
                        <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary font-medium whitespace-nowrap ml-2">
                          {project.type}
                        </span>
                      )}
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      <Github size={16} /> View on GitHub
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AllProjects;
